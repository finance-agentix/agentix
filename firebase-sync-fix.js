(() => {
  "use strict";

  const firebaseConfig = {
    apiKey: "AIzaSyDKMpiRGAbroouTaakvWXiXqGwvfYrbPsk",
    authDomain: "agentix-59416.firebaseapp.com",
    databaseURL: "https://agentix-59416-default-rtdb.firebaseio.com",
    projectId: "agentix-59416",
    storageBucket: "agentix-59416.firebasestorage.app",
    messagingSenderId: "63162409538",
    appId: "1:63162409538:web:7749ebd0d27ec8bd5343db"
  };

  function parseDate(value) {
    if (!value) return 0;
    const [datePart, timePart = "00:00"] = value.split(" ");
    const [day, month, year] = datePart.split(".");
    return new Date(`${year}-${month}-${day}T${timePart}:00`).getTime() || 0;
  }

  function startFirebaseSync() {
    if (!window.firebase) {
      console.error("Firebase yüklenemedi.");
      setTimeout(startFirebaseSync, 3000);
      return;
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.database();

    db.ref("agentix/liveTransactions")
      .limitToLast(1000)
      .on("value", snapshot => {
        const remoteInvestments = [];
        const remoteWithdrawals = [];

        snapshot.forEach(child => {
          const value = child.val();
          if (!value) return;

          const item = {
            firebaseKey: child.key,
            userId: value.userId || "AGX-000000",
            name: value.name || "Bilinmeyen Kullanıcı",
            amount: Number(value.amount || 0),
            date: value.date || "",
            status: value.status || "Bekliyor",
            createdAt: Number(value.createdAt || 0)
          };

          if (value.type === "investment") {
            remoteInvestments.push(item);
          } else if (value.type === "withdrawal") {
            remoteWithdrawals.push(item);
          }
        });

        remoteInvestments.sort((a, b) =>
          (b.createdAt || parseDate(b.date)) -
          (a.createdAt || parseDate(a.date))
        );

        remoteWithdrawals.sort((a, b) =>
          (b.createdAt || parseDate(b.date)) -
          (a.createdAt || parseDate(a.date))
        );

        const fixedInvestments = investments.filter(item => !item.firebaseKey);
        const fixedWithdrawals = withdrawals.filter(item => !item.firebaseKey);

        investments.splice(
          0,
          investments.length,
          ...remoteInvestments,
          ...fixedInvestments
        );

        withdrawals.splice(
          0,
          withdrawals.length,
          ...remoteWithdrawals,
          ...fixedWithdrawals
        );

        if (typeof renderAll === "function") renderAll();
      });

    db.ref("agentix/staffLogs")
      .limitToLast(500)
      .on("value", snapshot => {
        const remoteLogs = [];

        snapshot.forEach(child => {
          const value = child.val();
          if (!value) return;

          remoteLogs.push({
            firebaseKey: child.key,
            name: value.name || "Personel",
            action: value.action || "İşlem gerçekleştirdi",
            date: value.date || "",
            createdAt: Number(value.createdAt || 0)
          });
        });

        remoteLogs.sort((a, b) =>
          (b.createdAt || parseDate(b.date)) -
          (a.createdAt || parseDate(a.date))
        );

        const fixedLogs = staff.filter(item => !item.firebaseKey);

        staff.splice(
          0,
          staff.length,
          ...remoteLogs,
          ...fixedLogs
        );

        if (typeof renderAll === "function") renderAll();
      });
  }

  window.startRemoteSync = startFirebaseSync;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startFirebaseSync);
  } else {
    startFirebaseSync();
  }
})();
