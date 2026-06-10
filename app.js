let investments = [
  { name: "Ahmet Yılmaz", amount: 85000, date: "10.06.2026", status: "Onaylandı" },
  { name: "Elif Demir", amount: 42000, date: "09.06.2026", status: "Bekliyor" },
  { name: "Mehmet Kaya", amount: 120000, date: "08.06.2026", status: "Onaylandı" }
];

let withdrawals = [
  { name: "Can Arslan", amount: 25000, date: "10.06.2026", status: "Bekliyor" },
  { name: "Zeynep Koç", amount: 38000, date: "09.06.2026", status: "Onaylandı" },
  { name: "Murat Şahin", amount: 15000, date: "08.06.2026", status: "Reddedildi" }
];

let staff = [
  { name: "Seda Aydın", role: "Muhasebe", salary: 32000, status: "Aktif" },
  { name: "Burak Çelik", role: "Finans Uzmanı", salary: 41000, status: "Aktif" },
  { name: "Deniz Öz", role: "Operasyon", salary: 28500, status: "İzinli" }
];

function login() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  renderAll();
}

function logout() {
  document.getElementById("app").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

function showPage(pageId, button) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

function formatMoney(amount) {
  return "₺" + Number(amount).toLocaleString("tr-TR");
}

function today() {
  return new Date().toLocaleDateString("tr-TR");
}

function statusBadge(status) {
  return `<span class="status ${status.toLowerCase()}">${status}</span>`;
}

function renderInvestments() {
  const table = document.getElementById("investmentTable");
  table.innerHTML = investments.map(item => `
    <tr>
      <td>${item.name}</td>
      <td>${formatMoney(item.amount)}</td>
      <td>${item.date}</td>
      <td>${statusBadge(item.status)}</td>
    </tr>
  `).join("");
}

function renderWithdrawals() {
  const table = document.getElementById("withdrawalTable");
  table.innerHTML = withdrawals.map(item => `
    <tr>
      <td>${item.name}</td>
      <td>${formatMoney(item.amount)}</td>
      <td>${item.date}</td>
      <td>${statusBadge(item.status)}</td>
    </tr>
  `).join("");
}

function renderStaff() {
  const table = document.getElementById("staffTable");
  table.innerHTML = staff.map(item => `
    <tr>
      <td>${item.name}</td>
      <td>${item.role}</td>
      <td>${formatMoney(item.salary)}</td>
      <td>${statusBadge(item.status)}</td>
    </tr>
  `).join("");
}

function renderDashboard() {
  const totalInvestment = investments
    .filter(item => item.status === "Onaylandı")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalWithdrawal = withdrawals
    .filter(item => item.status === "Onaylandı")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  document.getElementById("totalInvestment").textContent = formatMoney(totalInvestment);
  document.getElementById("totalWithdrawal").textContent = formatMoney(totalWithdrawal);
  document.getElementById("netBalance").textContent = formatMoney(totalInvestment - totalWithdrawal);
  document.getElementById("staffCount").textContent = staff.length;

  const recent = [
    ...investments.slice(-3).map(item => ({ type: "Yatırım", ...item })),
    ...withdrawals.slice(-3).map(item => ({ type: "Çekim", ...item }))
  ].slice(-6).reverse();

  document.getElementById("recentTable").innerHTML = recent.map(item => `
    <tr>
      <td>${item.type}</td>
      <td>${item.name}</td>
      <td>${formatMoney(item.amount)}</td>
      <td>${statusBadge(item.status)}</td>
    </tr>
  `).join("");
}

function renderAll() {
  renderInvestments();
  renderWithdrawals();
  renderStaff();
  renderDashboard();
}

function addInvestment() {
  const name = document.getElementById("invName").value.trim();
  const amount = document.getElementById("invAmount").value;
  const status = document.getElementById("invStatus").value;

  if (!name || !amount) {
    alert("Lütfen müşteri adı ve tutar gir.");
    return;
  }

  investments.push({ name, amount: Number(amount), date: today(), status });

  document.getElementById("invName").value = "";
  document.getElementById("invAmount").value = "";

  renderAll();
}

function addWithdrawal() {
  const name = document.getElementById("wdName").value.trim();
  const amount = document.getElementById("wdAmount").value;
  const status = document.getElementById("wdStatus").value;

  if (!name || !amount) {
    alert("Lütfen müşteri adı ve tutar gir.");
    return;
  }

  withdrawals.push({ name, amount: Number(amount), date: today(), status });

  document.getElementById("wdName").value = "";
  document.getElementById("wdAmount").value = "";

  renderAll();
}

function addStaff() {
  const name = document.getElementById("staffName").value.trim();
  const role = document.getElementById("staffRole").value.trim();
  const salary = document.getElementById("staffSalary").value;
  const status = document.getElementById("staffStatus").value;

  if (!name || !role || !salary) {
    alert("Lütfen personel adı, görev ve maaş gir.");
    return;
  }

  staff.push({ name, role, salary: Number(salary), status });

  document.getElementById("staffName").value = "";
  document.getElementById("staffRole").value = "";
  document.getElementById("staffSalary").value = "";

  renderAll();
}

renderAll();
