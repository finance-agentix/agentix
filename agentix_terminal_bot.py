import json
import random
import time
import urllib.request
from datetime import datetime
from threading import Timer

BASE_URL = "https://agentix-59416-default-rtdb.firebaseio.com/agentix"

names = [
    "Emirhan Kaya", "Mert Demir", "Caner Yıldız", "Burak Aydın", "Kerem Şahin",
    "Onur Koç", "Eren Arslan", "Yusuf Çelik", "Furkan Özdemir", "Kaan Aksoy",
    "Alperen Doğan", "Tolga Yalçın", "Baran Kurt", "Serkan Polat", "Umut Eren",
    "Oğuzhan Tekin", "Arda Kaplan", "Bora Keskin", "Yiğit Kara", "Berkay Aslan"
]

staff_names = ["Burak", "Seda", "Elif", "Ayaz", "Cem", "Mert", "Deniz", "Ece"]

def now_text():
    return datetime.now().strftime("%d.%m.%Y %H:%M")

def post(path, data):
    url = f"{BASE_URL}/{path}.json"
    body = json.dumps(data, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=body,
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    with urllib.request.urlopen(req, timeout=15) as res:
        return json.loads(res.read().decode("utf-8"))

def patch(path, data):
    url = f"{BASE_URL}/{path}.json"
    body = json.dumps(data, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=body,
        headers={"Content-Type": "application/json"},
        method="PATCH"
    )
    with urllib.request.urlopen(req, timeout=15) as res:
        return res.read().decode("utf-8")

def random_amount():
    r = random.random()

    if r < 0.60:
        amount = random.randint(2000, 5000)
    elif r < 0.85:
        amount = random.randint(5000, 25000)
    else:
        amount = random.randint(25000, 120000)

    if random.random() < 0.30:
        amount = float(f"{amount}.{random.choice([15,20,35,40,45,50,65,70,75,80,90,95,99])}")

    return amount

def staff_action(tx_type, status):
    if tx_type == "investment":
        if status == "Bekliyor":
            return random.choice(["Bekleyen yatırımı incelemeye aldı", "Yatırım kaydını kontrol ediyor"])
        if status == "Onaylandı":
            return random.choice(["Manuel yatırım ekledi", "Yatırım kaydını doğruladı", "Yatırım dekontunu kontrol etti"])
        return random.choice(["Yatırım işlemini reddetti", "Hatalı yatırım kaydını kontrol etti"])

    if status == "Bekliyor":
        return random.choice(["Bekleyen çekimi incelemeye aldı", "Çekim talebini kontrol ediyor"])
    if status == "Onaylandı":
        return random.choice(["Çekim işlemini onayladı", "Çekim talebini tamamladı", "IBAN durumunu değiştirdi"])
    return random.choice(["Çekim işlemini reddetti", "IBAN uyuşmazlığı nedeniyle çekimi reddetti"])

def add_staff_log(tx_type, status):
    post("staffLogs", {
        "name": random.choice(staff_names),
        "action": staff_action(tx_type, status),
        "date": now_text()
    })

def finalize_transaction(firebase_key, tx_type):
    final_status = "Onaylandı" if random.random() < 0.82 else "Reddedildi"

    patch(f"liveTransactions/{firebase_key}", {
        "status": final_status,
        "decidedAt": now_text()
    })

    add_staff_log(tx_type, final_status)

    print(f"✅ {firebase_key} sonucu: {final_status}")

def create_transaction():
    tx_type = "investment" if random.random() < 0.58 else "withdrawal"

    item = {
        "type": tx_type,
        "userId": f"AGX-{random.randint(90000, 99999)}",
        "name": random.choice(names),
        "amount": random_amount(),
        "date": now_text(),
        "status": "Bekliyor"
    }

    response = post("liveTransactions", item)
    firebase_key = response["name"]

    add_staff_log(tx_type, "Bekliyor")

    print(f"⏳ Yeni işlem düştü: {item['type']} | {item['userId']} | {item['name']} | ₺{item['amount']} | Bekliyor")

    delay = random.randint(20, 60)
    Timer(delay, finalize_transaction, args=(firebase_key, tx_type)).start()

print("Agentix terminal işlem botu başladı. Durdurmak için CTRL + C bas.")

while True:
    create_transaction()
    wait = random.randint(30, 60)
    time.sleep(wait)
