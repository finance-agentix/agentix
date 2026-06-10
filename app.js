let investments = [
  { userId: "AGX-12000", name: "Burak Aydın", amount: 2750, date: "10.06.2026 22:36", status: "Onaylandı" },
  { userId: "AGX-12001", name: "Halil Kurt", amount: 3350, date: "10.06.2026 22:14", status: "Onaylandı" },
  { userId: "AGX-12002", name: "Tuna Başar", amount: 3900, date: "10.06.2026 22:07", status: "Onaylandı" },
  { userId: "AGX-12005", name: "Denizhan Kılıç", amount: 3200, date: "10.06.2026 20:38", status: "Onaylandı" },
  { userId: "AGX-12004", name: "Hakan Yılmaz", amount: 3050, date: "10.06.2026 20:35", status: "Onaylandı" },
  { userId: "AGX-12003", name: "Halil Kurt", amount: 3400, date: "10.06.2026 20:06", status: "Onaylandı" },
  { userId: "AGX-12006", name: "Bartu Sönmez", amount: 14800, date: "10.06.2026 18:52", status: "Onaylandı" },
  { userId: "AGX-12007", name: "Doğukan Şen", amount: 2900, date: "10.06.2026 17:00", status: "Reddedildi" },
  { userId: "AGX-12020", name: "Berkay Aslan", amount: 4500, date: "10.06.2026 16:56", status: "Reddedildi" },
  { userId: "AGX-12010", name: "Kürşat Uçar", amount: 3150, date: "10.06.2026 16:11", status: "Onaylandı" },
  { userId: "AGX-12011", name: "Cem Arıkan", amount: 4200, date: "10.06.2026 15:41", status: "Reddedildi" },
  { userId: "AGX-12008", name: "Berat Şahin", amount: 2200, date: "10.06.2026 15:24", status: "Onaylandı" },
  { userId: "AGX-12009", name: "Koray Avcı", amount: 64500, date: "10.06.2026 14:08", status: "Onaylandı" },
  { userId: "AGX-12013", name: "Sinan Yüce", amount: 90500, date: "10.06.2026 13:08", status: "Reddedildi" },
  { userId: "AGX-12028", name: "Taylan Bozkurt", amount: 2750, date: "10.06.2026 12:40", status: "Onaylandı" },
  { userId: "AGX-12012", name: "Samet Öztürk", amount: 2750, date: "10.06.2026 11:37", status: "Onaylandı" },
  { userId: "AGX-12022", name: "Mert Demir", amount: 2350, date: "10.06.2026 11:22", status: "Reddedildi" },
  { userId: "AGX-12014", name: "Sarp Yalçın", amount: 6200, date: "10.06.2026 11:06", status: "Onaylandı" },
  { userId: "AGX-12019", name: "Bora Keskin", amount: 2250, date: "10.06.2026 10:49", status: "Reddedildi" },
  { userId: "AGX-12017", name: "Bartu Sönmez", amount: 4350, date: "10.06.2026 10:24", status: "Onaylandı" },
  { userId: "AGX-12031", name: "Eymen Koç", amount: 10900, date: "10.06.2026 10:07", status: "Onaylandı" },
  { userId: "AGX-12025", name: "Batuhan Acar", amount: 2300, date: "10.06.2026 09:53", status: "Onaylandı" },
  { userId: "AGX-12024", name: "Hakan Yılmaz", amount: 4300, date: "10.06.2026 09:38", status: "Reddedildi" },
  { userId: "AGX-12039", name: "Erhan Tekin", amount: 3300, date: "10.06.2026 09:36", status: "Onaylandı" },
  { userId: "AGX-12044", name: "Samet Öztürk", amount: 3500, date: "10.06.2026 08:36", status: "Onaylandı" },
  { userId: "AGX-12021", name: "Okan Bayram", amount: 3450, date: "10.06.2026 08:16", status: "Onaylandı" },
  { userId: "AGX-12050", name: "Alperen Doğan", amount: 6300, date: "10.06.2026 08:13", status: "Onaylandı" },
  { userId: "AGX-12018", name: "Ömer Faruk", amount: 3850, date: "10.06.2026 08:07", status: "Onaylandı" },
  { userId: "AGX-12026", name: "Murat Efe", amount: 4400, date: "10.06.2026 08:05", status: "Onaylandı" },
  { userId: "AGX-12051", name: "Yunus Baş", amount: 4800, date: "10.06.2026 07:14", status: "Onaylandı" },
  { userId: "AGX-12042", name: "Anıl Korkmaz", amount: 2750, date: "10.06.2026 07:02", status: "Onaylandı" },
  { userId: "AGX-12035", name: "Emirhan Kaya", amount: 4000, date: "10.06.2026 06:12", status: "Onaylandı" },
  { userId: "AGX-12015", name: "Efe Güney", amount: 2200, date: "10.06.2026 06:08", status: "Onaylandı" },
  { userId: "AGX-12034", name: "Furkan Özdemir", amount: 3850, date: "10.06.2026 06:06", status: "Onaylandı" },
  { userId: "AGX-12036", name: "Kerem Şahin", amount: 6400, date: "10.06.2026 05:49", status: "Onaylandı" },
  { userId: "AGX-12071", name: "Cihan Polat", amount: 10700, date: "10.06.2026 04:49", status: "Reddedildi" },
  { userId: "AGX-12037", name: "Mehmet Ali", amount: 2400, date: "10.06.2026 04:38", status: "Reddedildi" },
  { userId: "AGX-12056", name: "Süleyman Yıldız", amount: 2800, date: "10.06.2026 03:57", status: "Onaylandı" },
  { userId: "AGX-12016", name: "Tuna Başar", amount: 3250, date: "10.06.2026 03:17", status: "Onaylandı" },
  { userId: "AGX-12063", name: "Gökhan Duman", amount: 3050, date: "10.06.2026 02:29", status: "Reddedildi" },
  { userId: "AGX-12027", name: "Emirhan Kaya", amount: 3550, date: "10.06.2026 00:47", status: "Onaylandı" },
  { userId: "AGX-12069", name: "Ramazan Aksoy", amount: 10700, date: "09.06.2026 23:28", status: "Onaylandı" },
  { userId: "AGX-12046", name: "Eray Özkan", amount: 4300, date: "09.06.2026 23:25", status: "Onaylandı" },
  { userId: "AGX-12058", name: "Halil Kurt", amount: 3950, date: "09.06.2026 23:13", status: "Onaylandı" },
  { userId: "AGX-12064", name: "Hakan Yılmaz", amount: 3750, date: "09.06.2026 23:03", status: "Reddedildi" },
  { userId: "AGX-12052", name: "Alperen Doğan", amount: 3850, date: "09.06.2026 21:30", status: "Onaylandı" },
  { userId: "AGX-12054", name: "Taha Kuru", amount: 4050, date: "09.06.2026 20:25", status: "Onaylandı" },
  { userId: "AGX-12023", name: "Sinan Yüce", amount: 3050, date: "09.06.2026 19:32", status: "Onaylandı" },
  { userId: "AGX-12043", name: "Baran Kurt", amount: 3700, date: "09.06.2026 16:16", status: "Onaylandı" },
  { userId: "AGX-12033", name: "Fatih Kaplan", amount: 11200, date: "09.06.2026 16:13", status: "Onaylandı" },
  { userId: "AGX-12030", name: "Arda Kaplan", amount: 3500, date: "09.06.2026 15:22", status: "Onaylandı" },
  { userId: "AGX-12029", name: "Alperen Doğan", amount: 4600, date: "09.06.2026 10:51", status: "Onaylandı" },
  { userId: "AGX-12062", name: "Bartu Sönmez", amount: 2800, date: "09.06.2026 10:23", status: "Onaylandı" },
  { userId: "AGX-12032", name: "Murat Efe", amount: 3250, date: "09.06.2026 07:26", status: "Reddedildi" },
  { userId: "AGX-12055", name: "Kaan Aksoy", amount: 3950, date: "09.06.2026 07:04", status: "Onaylandı" },
  { userId: "AGX-12092", name: "Yasin Eren", amount: 2450, date: "09.06.2026 06:35", status: "Onaylandı" },
  { userId: "AGX-12048", name: "Yusuf Çelik", amount: 2150, date: "09.06.2026 05:34", status: "Onaylandı" },
  { userId: "AGX-12053", name: "Bartu Sönmez", amount: 4250, date: "09.06.2026 04:58", status: "Onaylandı" },
  { userId: "AGX-12049", name: "Orkun Aydın", amount: 12200, date: "09.06.2026 04:45", status: "Onaylandı" },
  { userId: "AGX-12047", name: "Berkay Aslan", amount: 2650, date: "09.06.2026 02:32", status: "Onaylandı" },
  { userId: "AGX-12041", name: "Volkan Ateş", amount: 3700, date: "09.06.2026 02:11", status: "Onaylandı" },
  { userId: "AGX-12074", name: "Kadir Bulut", amount: 4100, date: "09.06.2026 02:06", status: "Onaylandı" },
  { userId: "AGX-12065", name: "Mert Demir", amount: 5000, date: "09.06.2026 01:57", status: "Reddedildi" },
  { userId: "AGX-12077", name: "Umut Eren", amount: 8800, date: "09.06.2026 01:44", status: "Onaylandı" },
  { userId: "AGX-12040", name: "Baran Kurt", amount: 4300, date: "09.06.2026 00:38", status: "Onaylandı" },
  { userId: "AGX-12059", name: "İsmail Çelik", amount: 4100, date: "09.06.2026 00:26", status: "Onaylandı" },
  { userId: "AGX-12073", name: "Mustafa Can", amount: 4600, date: "09.06.2026 00:24", status: "Onaylandı" },
  { userId: "AGX-12038", name: "Volkan Ateş", amount: 10700, date: "09.06.2026 00:10", status: "Onaylandı" },
  { userId: "AGX-12075", name: "Gökhan Duman", amount: 9000, date: "08.06.2026 21:44", status: "Onaylandı" },
  { userId: "AGX-12090", name: "Murat Efe", amount: 2100, date: "08.06.2026 21:02", status: "Onaylandı" },
  { userId: "AGX-12061", name: "Sinan Yüce", amount: 2650, date: "08.06.2026 20:46", status: "Reddedildi" },
  { userId: "AGX-12080", name: "Harun Ergin", amount: 3350, date: "08.06.2026 19:53", status: "Onaylandı" },
  { userId: "AGX-12045", name: "Yusuf Çelik", amount: 2000, date: "08.06.2026 18:42", status: "Onaylandı" },
  { userId: "AGX-12096", name: "Orkun Aydın", amount: 4900, date: "08.06.2026 16:01", status: "Onaylandı" },
  { userId: "AGX-12084", name: "İsmail Çelik", amount: 3300, date: "08.06.2026 15:54", status: "Reddedildi" },
  { userId: "AGX-12067", name: "Erhan Tekin", amount: 2950, date: "08.06.2026 15:52", status: "Onaylandı" },
  { userId: "AGX-12081", name: "Murat Efe", amount: 2200, date: "08.06.2026 06:55", status: "Reddedildi" },
  { userId: "AGX-12078", name: "Kerem Şahin", amount: 3350, date: "08.06.2026 04:13", status: "Onaylandı" },
  { userId: "AGX-12091", name: "Kürşat Uçar", amount: 4000, date: "08.06.2026 03:53", status: "Onaylandı" },
  { userId: "AGX-12088", name: "Samet Öztürk", amount: 2900, date: "08.06.2026 02:56", status: "Onaylandı" },
  { userId: "AGX-12097", name: "Mustafa Can", amount: 4400, date: "08.06.2026 02:40", status: "Onaylandı" },
  { userId: "AGX-12095", name: "Bora Ekinci", amount: 3750, date: "08.06.2026 02:30", status: "Onaylandı" },
  { userId: "AGX-12099", name: "Eray Özkan", amount: 3050, date: "08.06.2026 01:19", status: "Onaylandı" },
  { userId: "AGX-12057", name: "Furkan Özdemir", amount: 10200, date: "08.06.2026 01:07", status: "Onaylandı" },
  { userId: "AGX-12076", name: "Yunus Baş", amount: 4650, date: "08.06.2026 00:43", status: "Onaylandı" },
  { userId: "AGX-12086", name: "Alihan Uslu", amount: 3350, date: "08.06.2026 00:25", status: "Onaylandı" },
  { userId: "AGX-12070", name: "İlker Taş", amount: 7700, date: "07.06.2026 23:25", status: "Onaylandı" },
  { userId: "AGX-12060", name: "Bartu Sönmez", amount: 2300, date: "07.06.2026 20:35", status: "Reddedildi" },
  { userId: "AGX-12087", name: "Bora Ekinci", amount: 4150, date: "07.06.2026 19:05", status: "Onaylandı" },
  { userId: "AGX-12066", name: "Halil Kurt", amount: 3150, date: "07.06.2026 16:29", status: "Onaylandı" },
  { userId: "AGX-12079", name: "Erhan Tekin", amount: 3600, date: "07.06.2026 15:29", status: "Onaylandı" },
  { userId: "AGX-12068", name: "Melih Şimşek", amount: 2750, date: "07.06.2026 14:10", status: "Reddedildi" },
  { userId: "AGX-12072", name: "Sinan Yüce", amount: 4200, date: "07.06.2026 11:44", status: "Onaylandı" },
  { userId: "AGX-12089", name: "Tolga Yalçın", amount: 8500, date: "07.06.2026 11:25", status: "Reddedildi" },
  { userId: "AGX-12093", name: "Serkan Polat", amount: 2700, date: "07.06.2026 04:45", status: "Onaylandı" },
  { userId: "AGX-12083", name: "Orkun Aydın", amount: 3300, date: "06.06.2026 20:17", status: "Onaylandı" },
  { userId: "AGX-12082", name: "Efe Güney", amount: 2350, date: "06.06.2026 20:05", status: "Reddedildi" },
  { userId: "AGX-12094", name: "Bora Ekinci", amount: 2750, date: "06.06.2026 16:33", status: "Onaylandı" },
  { userId: "AGX-12085", name: "Batuhan Acar", amount: 2950, date: "06.06.2026 13:37", status: "Onaylandı" },
  { userId: "AGX-12098", name: "Aras Kaya", amount: 2750, date: "06.06.2026 09:05", status: "Onaylandı" }
];

let withdrawals = [
  { userId: "AGX-32000", name: "Alperen Doğan", amount: 2700, date: "10.06.2026 22:22", status: "Onaylandı" },
  { userId: "AGX-32001", name: "Tuna Başar", amount: 3300, date: "10.06.2026 21:37", status: "Onaylandı" },
  { userId: "AGX-32006", name: "Denizhan Kılıç", amount: 4550, date: "10.06.2026 20:57", status: "Onaylandı" },
  { userId: "AGX-32002", name: "Çağrı Er", amount: 4650, date: "10.06.2026 20:49", status: "Onaylandı" },
  { userId: "AGX-32003", name: "Berat Şahin", amount: 2000, date: "10.06.2026 20:45", status: "Onaylandı" },
  { userId: "AGX-32008", name: "Talha Arslan", amount: 2250, date: "10.06.2026 20:27", status: "Reddedildi" },
  { userId: "AGX-32004", name: "Çağrı Er", amount: 4350, date: "10.06.2026 20:15", status: "Onaylandı" },
  { userId: "AGX-32017", name: "Berat Şahin", amount: 3200, date: "10.06.2026 18:15", status: "Onaylandı" },
  { userId: "AGX-32015", name: "Bora Ekinci", amount: 4450, date: "10.06.2026 17:18", status: "Onaylandı" },
  { userId: "AGX-32005", name: "Mehmet Ali", amount: 3350, date: "10.06.2026 17:07", status: "Onaylandı" },
  { userId: "AGX-32010", name: "Kürşat Uçar", amount: 4400, date: "10.06.2026 16:53", status: "Onaylandı" },
  { userId: "AGX-32011", name: "Harun Ergin", amount: 11500, date: "10.06.2026 16:45", status: "Onaylandı" },
  { userId: "AGX-32014", name: "Berkay Aslan", amount: 3500, date: "10.06.2026 16:35", status: "Reddedildi" },
  { userId: "AGX-32009", name: "Bora Ekinci", amount: 2800, date: "10.06.2026 16:26", status: "Onaylandı" },
  { userId: "AGX-32016", name: "Hakan Yılmaz", amount: 56500, date: "10.06.2026 16:12", status: "Onaylandı" },
  { userId: "AGX-32021", name: "Denizhan Kılıç", amount: 3300, date: "10.06.2026 16:05", status: "Onaylandı" },
  { userId: "AGX-32007", name: "Bora Ekinci", amount: 13400, date: "10.06.2026 15:34", status: "Onaylandı" },
  { userId: "AGX-32022", name: "Utku Karaca", amount: 4650, date: "10.06.2026 15:06", status: "Onaylandı" },
  { userId: "AGX-32019", name: "Alihan Uslu", amount: 13100, date: "10.06.2026 13:25", status: "Onaylandı" },
  { userId: "AGX-32030", name: "Metehan Oral", amount: 4400, date: "10.06.2026 13:02", status: "Onaylandı" },
  { userId: "AGX-32049", name: "Cenk Soylu", amount: 3500, date: "10.06.2026 11:00", status: "Onaylandı" },
  { userId: "AGX-32028", name: "Tuna Başar", amount: 2800, date: "10.06.2026 10:44", status: "Onaylandı" },
  { userId: "AGX-32013", name: "Onur Koç", amount: 5000, date: "10.06.2026 10:42", status: "Onaylandı" },
  { userId: "AGX-32012", name: "Eren Arslan", amount: 72000, date: "10.06.2026 10:10", status: "Onaylandı" },
  { userId: "AGX-32024", name: "Ahmet Alp", amount: 4600, date: "10.06.2026 09:58", status: "Reddedildi" },
  { userId: "AGX-32036", name: "Anıl Korkmaz", amount: 4350, date: "10.06.2026 09:46", status: "Onaylandı" },
  { userId: "AGX-32043", name: "Berkay Aslan", amount: 3800, date: "10.06.2026 09:44", status: "Onaylandı" },
  { userId: "AGX-32050", name: "Eray Özkan", amount: 4200, date: "10.06.2026 09:12", status: "Onaylandı" },
  { userId: "AGX-32044", name: "Oğuzhan Tekin", amount: 3300, date: "10.06.2026 08:36", status: "Onaylandı" },
  { userId: "AGX-32057", name: "Kadir Bulut", amount: 86500, date: "10.06.2026 08:22", status: "Onaylandı" },
  { userId: "AGX-32039", name: "Onur Koç", amount: 85000, date: "10.06.2026 08:13", status: "Onaylandı" },
  { userId: "AGX-32029", name: "Ramazan Aksoy", amount: 5000, date: "10.06.2026 07:32", status: "Onaylandı" },
  { userId: "AGX-32048", name: "İlker Taş", amount: 2200, date: "10.06.2026 07:22", status: "Onaylandı" },
  { userId: "AGX-32051", name: "Bartu Sönmez", amount: 13500, date: "10.06.2026 07:14", status: "Onaylandı" },
  { userId: "AGX-32069", name: "Metehan Oral", amount: 4650, date: "10.06.2026 06:16", status: "Onaylandı" },
  { userId: "AGX-32032", name: "Yunus Baş", amount: 2950, date: "10.06.2026 05:28", status: "Reddedildi" },
  { userId: "AGX-32056", name: "Erhan Tekin", amount: 3900, date: "10.06.2026 04:54", status: "Onaylandı" },
  { userId: "AGX-32038", name: "Batuhan Acar", amount: 4250, date: "10.06.2026 04:44", status: "Onaylandı" },
  { userId: "AGX-32035", name: "Kadir Bulut", amount: 2600, date: "10.06.2026 03:16", status: "Onaylandı" },
  { userId: "AGX-32037", name: "Eray Özkan", amount: 62000, date: "10.06.2026 03:16", status: "Onaylandı" },
  { userId: "AGX-32053", name: "Yiğit Kara", amount: 2500, date: "10.06.2026 02:12", status: "Onaylandı" },
  { userId: "AGX-32042", name: "Umut Eren", amount: 10600, date: "10.06.2026 01:24", status: "Onaylandı" },
  { userId: "AGX-32020", name: "Rüzgar Çetin", amount: 4100, date: "10.06.2026 01:18", status: "Onaylandı" },
  { userId: "AGX-32025", name: "Sarp Yalçın", amount: 6600, date: "10.06.2026 01:16", status: "Onaylandı" },
  { userId: "AGX-32041", name: "Ahmet Alp", amount: 2550, date: "10.06.2026 00:32", status: "Onaylandı" },
  { userId: "AGX-32018", name: "Kaan Aksoy", amount: 4650, date: "10.06.2026 00:21", status: "Onaylandı" },
  { userId: "AGX-32023", name: "Erhan Tekin", amount: 3650, date: "09.06.2026 23:58", status: "Onaylandı" },
  { userId: "AGX-32068", name: "İlker Taş", amount: 2950, date: "09.06.2026 22:51", status: "Onaylandı" },
  { userId: "AGX-32059", name: "Aras Kaya", amount: 4900, date: "09.06.2026 21:49", status: "Onaylandı" },
  { userId: "AGX-32060", name: "Mehmet Ali", amount: 80000, date: "09.06.2026 21:26", status: "Onaylandı" },
  { userId: "AGX-32027", name: "Denizhan Kılıç", amount: 4700, date: "09.06.2026 21:15", status: "Onaylandı" },
  { userId: "AGX-32046", name: "Taylan Bozkurt", amount: 2150, date: "09.06.2026 21:08", status: "Onaylandı" },
  { userId: "AGX-32085", name: "Eray Özkan", amount: 97500, date: "09.06.2026 21:02", status: "Onaylandı" },
  { userId: "AGX-32033", name: "Mustafa Can", amount: 3100, date: "09.06.2026 18:25", status: "Onaylandı" },
  { userId: "AGX-32031", name: "Mehmet Ali", amount: 2050, date: "09.06.2026 16:26", status: "Onaylandı" },
  { userId: "AGX-32026", name: "Volkan Ateş", amount: 3800, date: "09.06.2026 16:05", status: "Onaylandı" },
  { userId: "AGX-32082", name: "Mustafa Can", amount: 8800, date: "09.06.2026 15:11", status: "Onaylandı" },
  { userId: "AGX-32034", name: "Cihan Polat", amount: 3450, date: "09.06.2026 11:48", status: "Onaylandı" },
  { userId: "AGX-32064", name: "Yunus Baş", amount: 5500, date: "09.06.2026 10:20", status: "Reddedildi" },
  { userId: "AGX-32062", name: "Yasin Eren", amount: 5000, date: "09.06.2026 10:16", status: "Onaylandı" },
  { userId: "AGX-32040", name: "Mehmet Ali", amount: 2000, date: "09.06.2026 07:55", status: "Onaylandı" },
  { userId: "AGX-32045", name: "Aras Kaya", amount: 4900, date: "09.06.2026 07:32", status: "Onaylandı" },
  { userId: "AGX-32061", name: "Sarp Yalçın", amount: 4700, date: "09.06.2026 05:49", status: "Onaylandı" },
  { userId: "AGX-32066", name: "Fatih Kaplan", amount: 2650, date: "09.06.2026 05:42", status: "Onaylandı" },
  { userId: "AGX-32075", name: "Berkay Aslan", amount: 3500, date: "09.06.2026 05:09", status: "Onaylandı" },
  { userId: "AGX-32074", name: "Sinan Yüce", amount: 9100, date: "09.06.2026 03:13", status: "Reddedildi" },
  { userId: "AGX-32076", name: "Halil Kurt", amount: 4950, date: "09.06.2026 02:02", status: "Onaylandı" },
  { userId: "AGX-32054", name: "Fatih Kaplan", amount: 4200, date: "08.06.2026 23:42", status: "Onaylandı" },
  { userId: "AGX-32052", name: "Levent Sarı", amount: 2700, date: "08.06.2026 22:01", status: "Onaylandı" },
  { userId: "AGX-32079", name: "Yasin Eren", amount: 58000, date: "08.06.2026 20:33", status: "Onaylandı" },
  { userId: "AGX-32070", name: "Berkay Aslan", amount: 4250, date: "08.06.2026 20:26", status: "Onaylandı" },
  { userId: "AGX-32072", name: "Yiğit Kara", amount: 4900, date: "08.06.2026 18:46", status: "Onaylandı" },
  { userId: "AGX-32078", name: "Efe Güney", amount: 4250, date: "08.06.2026 18:38", status: "Onaylandı" },
  { userId: "AGX-32088", name: "Erhan Tekin", amount: 3650, date: "08.06.2026 17:40", status: "Onaylandı" },
  { userId: "AGX-32055", name: "Sinan Yüce", amount: 3550, date: "08.06.2026 17:17", status: "Onaylandı" },
  { userId: "AGX-32084", name: "Mehmet Ali", amount: 5900, date: "08.06.2026 17:17", status: "Onaylandı" },
  { userId: "AGX-32071", name: "Çağrı Er", amount: 11500, date: "08.06.2026 16:05", status: "Onaylandı" },
  { userId: "AGX-32067", name: "Eray Özkan", amount: 4200, date: "08.06.2026 15:52", status: "Onaylandı" },
  { userId: "AGX-32073", name: "Furkan Özdemir", amount: 4500, date: "08.06.2026 14:37", status: "Onaylandı" },
  { userId: "AGX-32047", name: "Cem Arıkan", amount: 2800, date: "08.06.2026 11:51", status: "Reddedildi" },
  { userId: "AGX-32086", name: "Baran Kurt", amount: 4200, date: "08.06.2026 11:50", status: "Onaylandı" },
  { userId: "AGX-32081", name: "Mert Demir", amount: 3300, date: "08.06.2026 06:58", status: "Onaylandı" },
  { userId: "AGX-32063", name: "Kerem Şahin", amount: 3000, date: "08.06.2026 01:04", status: "Onaylandı" },
  { userId: "AGX-32058", name: "Sinan Yüce", amount: 4400, date: "07.06.2026 23:07", status: "Reddedildi" },
  { userId: "AGX-32083", name: "Alperen Doğan", amount: 14100, date: "07.06.2026 21:08", status: "Onaylandı" },
  { userId: "AGX-32089", name: "Samet Öztürk", amount: 3950, date: "07.06.2026 20:24", status: "Onaylandı" },
  { userId: "AGX-32065", name: "Bora Ekinci", amount: 2600, date: "07.06.2026 19:37", status: "Onaylandı" },
  { userId: "AGX-32077", name: "İlker Taş", amount: 2700, date: "07.06.2026 06:00", status: "Reddedildi" },
  { userId: "AGX-32080", name: "Baran Kurt", amount: 11100, date: "06.06.2026 18:29", status: "Onaylandı" },
  { userId: "AGX-32087", name: "Onur Koç", amount: 2150, date: "06.06.2026 15:42", status: "Onaylandı" }
];

let staff = [
  { name: "Seda Aydın", role: "Muhasebe", salary: 32000, status: "Aktif" },
  { name: "Burak Çelik", role: "Finans Uzmanı", salary: 41000, status: "Aktif" },
  { name: "Deniz Öz", role: "Operasyon", salary: 28500, status: "İzinli" }
];

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const loginError = document.getElementById("loginError");

  if (username !== "bozo" || password !== "bozo013455") {
    loginError.classList.remove("hidden");
    return;
  }

  loginError.classList.add("hidden");
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  setReadonlyMode();
  renderAll();
}

function logout() {
  document.getElementById("app").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

function setReadonlyMode() {
  document.querySelectorAll(".admin-only").forEach(area => {
    area.classList.add("hidden");
  });

  const role = document.getElementById("panelUserRole");
  if (role) {
    role.textContent = "İzleme Hesabı";
  }
}

function showPage(pageId, button) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  closeMobileMenu();
}

function formatMoney(amount) {
  return "₺" + Number(amount).toLocaleString("tr-TR");
}

function getDayFromDate(dateText) {
  return dateText.split(" ")[0];
}

function noPermission() {
  alert("Bu işlemi yapmak için yetkiniz yok.");
}

function toggleMobileMenu() {
  document.querySelector(".sidebar").classList.toggle("open");
  document.querySelector(".mobile-overlay").classList.toggle("show");
}

function closeMobileMenu() {
  document.querySelector(".sidebar").classList.remove("open");
  document.querySelector(".mobile-overlay").classList.remove("show");
}

function statusBadge(status) {
  return `<span class="status ${status.toLowerCase()}">${status}</span>`;
}

function renderInvestments() {
  const table = document.getElementById("investmentTable");
  const selectedDay = document.getElementById("investmentDayFilter")?.value || "all";

  const filtered = selectedDay === "all"
    ? investments
    : investments.filter(item => getDayFromDate(item.date) === selectedDay);

  table.innerHTML = filtered.map(item => `
    <tr>
      <td>${item.userId}</td>
      <td>${item.name}</td>
      <td>${formatMoney(item.amount)}</td>
      <td>${item.date}</td>
      <td>${statusBadge(item.status)}</td>
    </tr>
  `).join("");
}

function renderWithdrawals() {
  const table = document.getElementById("withdrawalTable");
  const selectedDay = document.getElementById("withdrawalDayFilter")?.value || "all";

  const filtered = selectedDay === "all"
    ? withdrawals
    : withdrawals.filter(item => getDayFromDate(item.date) === selectedDay);

  table.innerHTML = filtered.map(item => `
    <tr>
      <td>${item.userId}</td>
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
    ...investments.map(item => ({ type: "Yatırım", ...item })),
    ...withdrawals.map(item => ({ type: "Çekim", ...item }))
  ]
    .sort((a, b) => {
      const da = a.date.split(" ");
      const db = b.date.split(" ");
      const pa = da[0].split(".").reverse().join("-") + " " + da[1];
      const pb = db[0].split(".").reverse().join("-") + " " + db[1];
      return pb.localeCompare(pa);
    })
    .slice(0, 20);

  document.getElementById("recentTable").innerHTML = recent.map(item => `
    <tr>
      <td>${item.type}</td>
      <td>${item.userId}</td>
      <td>${item.name}</td>
      <td>${formatMoney(item.amount)}</td>
      <td>${item.date}</td>
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
  noPermission();
}

function addWithdrawal() {
  noPermission();
}

function addStaff() {
  noPermission();
}

renderAll();
