import json
import random
import socket
import threading
import time
import urllib.error
import urllib.request
from datetime import datetime

BASE_URL = "https://agentix-59416-default-rtdb.firebaseio.com/agentix"

NAMES = [
    "Emirhan Kaya", "Mert Demir", "Caner Yıldız", "Burak Aydın",
    "Kerem Şahin", "Onur Koç", "Eren Arslan", "Yusuf Çelik",
    "Furkan Özdemir", "Kaan Aksoy", "Alperen Doğan", "Tolga Yalçın",
    "Baran Kurt", "Serkan Polat", "Umut Eren", "Oğuzhan Tekin",
    "Arda Kaplan", "Bora Keskin", "Yiğit Kara", "Berkay Aslan",
    "Hakan Yılmaz", "Samet Öztürk", "Batuhan Acar", "Anıl Korkmaz"
]

STAFF_NAMES = [
    "Burak", "Seda", "Elif", "Ayaz",
    "Cem", "Mert", "Deniz", "Ece"
]

CENTS = [15, 20, 35, 40, 45, 50, 65, 70, 75, 80, 90, 95, 99]


def now_text():
    return datetime.now().strftime("%d.%m.%Y %H:%M")


def firebase_request(method, path, data, attempts=6):
    url = f"{BASE_URL}/{path}.json"
    body = json.dumps(data, ensure_ascii=False).encode("utf-8")

    for attempt in range(1, attempts + 1):
        try:
            request = urllib.request.Request(
                url,
                data=body,
                headers={"Content-Type": "application/json; charset=utf-8"},
                method=method
            )

            with urllib.request.urlopen(request, timeout=30) as response:
                content = response.read().decode("utf-8")
                return json.loads(content) if content else {}

        except (
            TimeoutError,
            socket.timeout,
            urllib.error.URLError,
            urllib.error.HTTPError,
            ConnectionError
        ) as error:
            print(
                f"Bağlantı hatası ({attempt}/{attempts}): {error}",
                flush=True
            )

            if attempt == attempts:
                raise

            time.sleep(min(5 * attempt, 30))


def post(path, data):
    return firebase_request("POST", path, data)


def patch(path, data):
    return firebase_request("PATCH", path, data)


def random_amount():
    chance = random.random()

    if chance < 0.60:
        amount = random.randint(2000, 5000)
    elif chance < 0.85:
        amount = random.randint(5000, 25000)
    else:
        amount = random.randint(25000, 120000)

    # İşlemlerin yaklaşık %30'u kuruşlu.
    if random.random() < 0.30:
        amount = float(f"{amount}.{random.choice(CENTS):02d}")

    return amount


def staff_action(transaction_type, status):
    if transaction_type == "investment":
        if status == "Bekliyor":
            return random.choice([
                "Bekleyen yatırımı incelemeye aldı",
                "Yatırım kaydını kontrol ediyor"
            ])

        if status == "Onaylandı":
            return random.choice([
                "Manuel yatırım ekledi",
                "Yatırım kaydını doğruladı",
                "Yatırım dekontunu kontrol etti"
            ])

        return random.choice([
            "Yatırım işlemini reddetti",
            "Hatalı yatırım kaydını kontrol etti"
        ])

    if status == "Bekliyor":
        return random.choice([
            "Bekleyen çekimi incelemeye aldı",
            "Çekim talebini kontrol ediyor"
        ])

    if status == "Onaylandı":
        return random.choice([
            "Çekim işlemini onayladı",
            "Çekim talebini tamamladı",
            "IBAN durumunu değiştirdi"
        ])

    return random.choice([
        "Çekim işlemini reddetti",
        "IBAN uyuşmazlığı nedeniyle çekimi reddetti"
    ])


def add_staff_log(transaction_type, status):
    log = {
        "name": random.choice(STAFF_NAMES),
        "action": staff_action(transaction_type, status),
        "date": now_text(),
        "createdAt": int(time.time() * 1000)
    }

    post("staffLogs", log)


def finalize_transaction(firebase_key, transaction_type):
    try:
        final_status = (
            "Onaylandı"
            if random.random() < 0.82
            else "Reddedildi"
        )

        patch(
            f"liveTransactions/{firebase_key}",
            {
                "status": final_status,
                "decidedAt": now_text(),
                "decidedTimestamp": int(time.time() * 1000)
            }
        )

        add_staff_log(transaction_type, final_status)

        print(
            f"Sonuçlandı: {firebase_key} → {final_status}",
            flush=True
        )

    except Exception as error:
        print(
            f"İşlem sonuçlandırılamadı, tekrar denenecek: {error}",
            flush=True
        )

        retry = threading.Timer(
            30,
            finalize_transaction,
            args=(firebase_key, transaction_type)
        )
        retry.daemon = True
        retry.start()


def create_transaction():
    # Yatırımlar çoğunluklu: yaklaşık %68 yatırım.
    transaction_type = (
        "investment"
        if random.random() < 0.68
        else "withdrawal"
    )

    timestamp = int(time.time() * 1000)

    transaction = {
        "type": transaction_type,
        "userId": f"AGX-{random.randint(100000, 999999)}",
        "name": random.choice(NAMES),
        "amount": random_amount(),
        "date": now_text(),
        "status": "Bekliyor",
        "createdAt": timestamp
    }

    response = post("liveTransactions", transaction)
    firebase_key = response["name"]

    add_staff_log(transaction_type, "Bekliyor")

    print(
        f"Yeni işlem: {transaction_type} | "
        f"{transaction['userId']} | {transaction['name']} | "
        f"₺{transaction['amount']} | Bekliyor",
        flush=True
    )

    # Önce beklemede görünür, 10-30 saniye sonra sonuçlanır.
    decision_delay = random.randint(10, 30)

    timer = threading.Timer(
        decision_delay,
        finalize_transaction,
        args=(firebase_key, transaction_type)
    )
    timer.daemon = True
    timer.start()


def main():
    print("Agentix arka plan işlem servisi başladı.", flush=True)

    while True:
        try:
            create_transaction()

            # Yaklaşık dakikada 2-5 işlem.
            wait_seconds = random.randint(12, 30)
            time.sleep(wait_seconds)

        except KeyboardInterrupt:
            print("Agentix servisi durduruldu.", flush=True)
            break

        except Exception as error:
            # Timeout veya internet kesintisinde bot kapanmaz.
            print(
                f"Geçici hata: {error}. 20 saniye sonra tekrar denenecek.",
                flush=True
            )
            time.sleep(20)


if __name__ == "__main__":
    main()
