let investments = [
  { userId: "AGX-12000", name: "Bora Ekinci", amount: 94000, date: "10.06.2026 23:31", status: "Onaylandı" },
  { userId: "AGX-12688", name: "Cemil Kılıç", amount: 4450, date: "10.06.2026 23:21", status: "Onaylandı" },
  { userId: "AGX-12001", name: "Eray Özkan", amount: 3900, date: "10.06.2026 23:15", status: "Onaylandı" },
  { userId: "AGX-12672", name: "Cihan Ergin", amount: 3800.40, date: "10.06.2026 22:59", status: "Onaylandı" },
  { userId: "AGX-12003", name: "Süleyman Yıldız", amount: 3400.45, date: "10.06.2026 22:43", status: "Bekliyor" },
  { userId: "AGX-12002", name: "Kaan Aksoy", amount: 13400.80, date: "10.06.2026 22:37", status: "Onaylandı" },
  { userId: "AGX-12004", name: "Cemil Kılıç", amount: 3000.35, date: "10.06.2026 22:15", status: "Onaylandı" },
  { userId: "AGX-12009", name: "Caner Yıldız", amount: 2300.95, date: "10.06.2026 22:15", status: "Onaylandı" },
  { userId: "AGX-12006", name: "Tuncay Yaman", amount: 4600.35, date: "10.06.2026 21:49", status: "Onaylandı" },
  { userId: "AGX-12011", name: "Berkay Aslan", amount: 2200, date: "10.06.2026 21:49", status: "Reddedildi" },
  { userId: "AGX-12729", name: "Metehan Oral", amount: 94000, date: "10.06.2026 21:40", status: "Onaylandı" },
  { userId: "AGX-12008", name: "Çağrı Er", amount: 4350.15, date: "10.06.2026 21:28", status: "Reddedildi" },
  { userId: "AGX-12007", name: "Doğukan Şen", amount: 59000, date: "10.06.2026 21:18", status: "Onaylandı" },
  { userId: "AGX-12015", name: "Fatih Kaplan", amount: 3700, date: "10.06.2026 21:04", status: "Reddedildi" },
  { userId: "AGX-12772", name: "Gökhan Duman", amount: 24700.40, date: "10.06.2026 20:48", status: "Onaylandı" },
  { userId: "AGX-12005", name: "Bora Ekinci", amount: 2200, date: "10.06.2026 20:43", status: "Onaylandı" },
  { userId: "AGX-12020", name: "Yusuf Çelik", amount: 3100, date: "10.06.2026 20:26", status: "Onaylandı" },
  { userId: "AGX-12019", name: "Furkan Özdemir", amount: 68000.80, date: "10.06.2026 20:22", status: "Onaylandı" },
  { userId: "AGX-12024", name: "Metin Güler", amount: 20600, date: "10.06.2026 20:22", status: "Onaylandı" },
  { userId: "AGX-12010", name: "Berkay Aslan", amount: 2800, date: "10.06.2026 20:13", status: "Onaylandı" },
  { userId: "AGX-12733", name: "Denizhan Kılıç", amount: 4150.70, date: "10.06.2026 20:13", status: "Onaylandı" },
  { userId: "AGX-12027", name: "Yunus Baş", amount: 4150.35, date: "10.06.2026 19:56", status: "Onaylandı" },
  { userId: "AGX-12763", name: "Ramazan Aksoy", amount: 3050, date: "10.06.2026 19:38", status: "Onaylandı" },
  { userId: "AGX-12012", name: "Talha Arslan", amount: 71000, date: "10.06.2026 19:24", status: "Onaylandı" },
  { userId: "AGX-12648", name: "Doğukan Şen", amount: 2450, date: "10.06.2026 19:15", status: "Onaylandı" },
  { userId: "AGX-12022", name: "Eymen Koç", amount: 3350, date: "10.06.2026 19:06", status: "Onaylandı" },
  { userId: "AGX-12612", name: "Kıvanç Demir", amount: 3200, date: "10.06.2026 18:55", status: "Onaylandı" },
  { userId: "AGX-12021", name: "Gökhan Duman", amount: 13300, date: "10.06.2026 18:36", status: "Onaylandı" },
  { userId: "AGX-12013", name: "Taylan Bozkurt", amount: 4800, date: "10.06.2026 18:33", status: "Onaylandı" },
  { userId: "AGX-12658", name: "Kuzey Yıldırım", amount: 2450, date: "10.06.2026 18:10", status: "Onaylandı" },
  { userId: "AGX-12036", name: "Bora Ekinci", amount: 2650.75, date: "10.06.2026 18:06", status: "Onaylandı" },
  { userId: "AGX-12450", name: "Alihan Uslu", amount: 12100, date: "10.06.2026 17:46", status: "Onaylandı" },
  { userId: "AGX-12039", name: "Cemil Kılıç", amount: 11800, date: "10.06.2026 17:43", status: "Onaylandı" },
  { userId: "AGX-12029", name: "Oğuzhan Tekin", amount: 8700, date: "10.06.2026 16:46", status: "Onaylandı" },
  { userId: "AGX-12049", name: "Selim Akın", amount: 23200, date: "10.06.2026 16:06", status: "Onaylandı" },
  { userId: "AGX-12040", name: "Denizhan Kılıç", amount: 3950.45, date: "10.06.2026 16:03", status: "Onaylandı" },
  { userId: "AGX-12042", name: "Alp Eren", amount: 3100.40, date: "10.06.2026 15:48", status: "Onaylandı" },
  { userId: "AGX-12034", name: "Eren Arslan", amount: 30000.35, date: "10.06.2026 15:31", status: "Onaylandı" },
  { userId: "AGX-12014", name: "Alperen Doğan", amount: 22400.20, date: "10.06.2026 15:22", status: "Onaylandı" },
  { userId: "AGX-12050", name: "Yusuf Çelik", amount: 2400, date: "10.06.2026 15:10", status: "Reddedildi" },
  { userId: "AGX-12609", name: "Ayhan Korkmaz", amount: 3200, date: "10.06.2026 15:05", status: "Onaylandı" },
  { userId: "AGX-12775", name: "Tarık Aydın", amount: 3600, date: "10.06.2026 14:55", status: "Onaylandı" },
  { userId: "AGX-12790", name: "Anıl Korkmaz", amount: 6600, date: "10.06.2026 14:48", status: "Onaylandı" },
  { userId: "AGX-12016", name: "Selim Akın", amount: 20600.90, date: "10.06.2026 14:29", status: "Reddedildi" },
  { userId: "AGX-12051", name: "Alihan Uslu", amount: 6500.75, date: "10.06.2026 14:09", status: "Onaylandı" },
  { userId: "AGX-12017", name: "Batuhan Acar", amount: 8500, date: "10.06.2026 14:06", status: "Reddedildi" },
  { userId: "AGX-12028", name: "Furkan Özdemir", amount: 2700.75, date: "10.06.2026 14:04", status: "Onaylandı" },
  { userId: "AGX-12030", name: "Ulaş Demirci", amount: 4100, date: "10.06.2026 14:04", status: "Onaylandı" },
  { userId: "AGX-12033", name: "Erhan Tekin", amount: 2800, date: "10.06.2026 14:03", status: "Onaylandı" },
  { userId: "AGX-12063", name: "Arda Kaplan", amount: 2000, date: "10.06.2026 14:02", status: "Onaylandı" },
  { userId: "AGX-12018", name: "Bora Keskin", amount: 19000, date: "10.06.2026 13:37", status: "Onaylandı" },
  { userId: "AGX-12038", name: "Cemil Kılıç", amount: 87000, date: "10.06.2026 13:17", status: "Reddedildi" },
  { userId: "AGX-12737", name: "Cihan Ergin", amount: 3650, date: "10.06.2026 13:03", status: "Reddedildi" },
  { userId: "AGX-12740", name: "Denizhan Kılıç", amount: 3650.35, date: "10.06.2026 12:54", status: "Onaylandı" },
  { userId: "AGX-12025", name: "Mustafa Can", amount: 11100, date: "10.06.2026 12:44", status: "Onaylandı" },
  { userId: "AGX-12059", name: "Alp Eren", amount: 4100, date: "10.06.2026 11:42", status: "Reddedildi" },
  { userId: "AGX-12026", name: "Cihan Polat", amount: 3700, date: "10.06.2026 10:57", status: "Onaylandı" },
  { userId: "AGX-12023", name: "Batuhan Acar", amount: 2850, date: "10.06.2026 10:50", status: "Onaylandı" },
  { userId: "AGX-12593", name: "Emirhan Kaya", amount: 4050, date: "10.06.2026 10:20", status: "Onaylandı" },
  { userId: "AGX-12072", name: "Yusuf Çelik", amount: 7400, date: "10.06.2026 10:13", status: "Onaylandı" },
  { userId: "AGX-12032", name: "Efe Güney", amount: 3700, date: "10.06.2026 10:11", status: "Onaylandı" },
  { userId: "AGX-12067", name: "Kadir Bulut", amount: 3550, date: "10.06.2026 10:08", status: "Onaylandı" },
  { userId: "AGX-12058", name: "Doğukan Şen", amount: 2100, date: "10.06.2026 09:00", status: "Reddedildi" },
  { userId: "AGX-12479", name: "Metehan Oral", amount: 2800, date: "10.06.2026 08:59", status: "Onaylandı" },
  { userId: "AGX-12097", name: "Murat Efe", amount: 4250, date: "10.06.2026 08:55", status: "Onaylandı" },
  { userId: "AGX-12052", name: "Metin Güler", amount: 4600, date: "10.06.2026 08:47", status: "Onaylandı" },
  { userId: "AGX-12508", name: "Berat Şahin", amount: 4350, date: "10.06.2026 08:45", status: "Onaylandı" },
  { userId: "AGX-12111", name: "İlker Taş", amount: 4600, date: "10.06.2026 08:42", status: "Onaylandı" },
  { userId: "AGX-12698", name: "Eray Özkan", amount: 2400, date: "10.06.2026 08:27", status: "Onaylandı" },
  { userId: "AGX-12031", name: "Fırat Özer", amount: 18100.65, date: "10.06.2026 08:25", status: "Onaylandı" },
  { userId: "AGX-12035", name: "Kamil Aksu", amount: 16200, date: "10.06.2026 08:19", status: "Onaylandı" },
  { userId: "AGX-12074", name: "Tarık Aydın", amount: 2700, date: "10.06.2026 07:31", status: "Reddedildi" },
  { userId: "AGX-12061", name: "Batuhan Acar", amount: 2950, date: "10.06.2026 07:18", status: "Onaylandı" },
  { userId: "AGX-12041", name: "Çağrı Er", amount: 3500, date: "10.06.2026 06:59", status: "Reddedildi" },
  { userId: "AGX-12037", name: "Kamil Aksu", amount: 4950, date: "10.06.2026 06:55", status: "Onaylandı" },
  { userId: "AGX-12078", name: "Eymen Koç", amount: 4300.45, date: "10.06.2026 06:32", status: "Onaylandı" },
  { userId: "AGX-12085", name: "Hakan Yılmaz", amount: 4800.90, date: "10.06.2026 06:30", status: "Onaylandı" },
  { userId: "AGX-12087", name: "Okan Bayram", amount: 5000, date: "10.06.2026 06:01", status: "Reddedildi" },
  { userId: "AGX-12071", name: "Okan Bayram", amount: 24000, date: "10.06.2026 05:47", status: "Onaylandı" },
  { userId: "AGX-12092", name: "Taha Kuru", amount: 4850.15, date: "10.06.2026 05:09", status: "Reddedildi" },
  { userId: "AGX-12047", name: "Arda Kaplan", amount: 4950, date: "10.06.2026 04:46", status: "Onaylandı" },
  { userId: "AGX-12113", name: "Caner Yıldız", amount: 2450, date: "10.06.2026 04:40", status: "Onaylandı" },
  { userId: "AGX-12081", name: "Yasin Eren", amount: 2450, date: "10.06.2026 04:33", status: "Onaylandı" },
  { userId: "AGX-12107", name: "Burak Aydın", amount: 4200.90, date: "10.06.2026 03:46", status: "Onaylandı" },
  { userId: "AGX-12044", name: "Kamil Aksu", amount: 4900, date: "10.06.2026 03:00", status: "Onaylandı" },
  { userId: "AGX-12048", name: "Umut Eren", amount: 2400, date: "10.06.2026 02:36", status: "Onaylandı" },
  { userId: "AGX-12066", name: "Taha Kuru", amount: 3900.65, date: "10.06.2026 02:29", status: "Onaylandı" },
  { userId: "AGX-12120", name: "Ayhan Korkmaz", amount: 2500.40, date: "10.06.2026 01:33", status: "Onaylandı" },
  { userId: "AGX-12053", name: "Ozan Çetin", amount: 4700, date: "10.06.2026 01:23", status: "Reddedildi" },
  { userId: "AGX-12084", name: "Kerem Şahin", amount: 5100.95, date: "10.06.2026 01:08", status: "Onaylandı" },
  { userId: "AGX-12046", name: "Ayhan Korkmaz", amount: 2700, date: "10.06.2026 00:24", status: "Onaylandı" },
  { userId: "AGX-12082", name: "Levent Sarı", amount: 2500.75, date: "10.06.2026 00:18", status: "Onaylandı" },
  { userId: "AGX-12045", name: "Aras Kaya", amount: 2100.45, date: "10.06.2026 00:16", status: "Onaylandı" },
  { userId: "AGX-12108", name: "Eray Özkan", amount: 3000, date: "10.06.2026 00:01", status: "Onaylandı" },
  { userId: "AGX-12043", name: "Doruk Can", amount: 2700, date: "09.06.2026 23:47", status: "Reddedildi" },
  { userId: "AGX-12068", name: "Tarık Aydın", amount: 3650.99, date: "09.06.2026 23:38", status: "Onaylandı" },
  { userId: "AGX-12181", name: "Egehan Sezer", amount: 53500.75, date: "09.06.2026 23:25", status: "Onaylandı" },
  { userId: "AGX-12091", name: "Cem Arıkan", amount: 4950.40, date: "09.06.2026 23:15", status: "Onaylandı" },
  { userId: "AGX-12465", name: "Mustafa Can", amount: 81500.75, date: "09.06.2026 23:03", status: "Reddedildi" },
  { userId: "AGX-12133", name: "Savaş Koç", amount: 5000.20, date: "09.06.2026 23:01", status: "Onaylandı" },
  { userId: "AGX-12064", name: "Çağrı Er", amount: 23700, date: "09.06.2026 22:56", status: "Onaylandı" },
  { userId: "AGX-12106", name: "Ömer Faruk", amount: 2900, date: "09.06.2026 22:48", status: "Onaylandı" },
  { userId: "AGX-12673", name: "Caner Yıldız", amount: 2950.95, date: "09.06.2026 22:37", status: "Onaylandı" },
  { userId: "AGX-12056", name: "Gökhan Duman", amount: 3550, date: "09.06.2026 22:20", status: "Onaylandı" },
  { userId: "AGX-12054", name: "Okan Bayram", amount: 11100, date: "09.06.2026 22:17", status: "Onaylandı" },
  { userId: "AGX-12138", name: "Efe Güney", amount: 33000.50, date: "09.06.2026 22:05", status: "Onaylandı" },
  { userId: "AGX-12779", name: "Taylan Bozkurt", amount: 111500, date: "09.06.2026 22:02", status: "Onaylandı" },
  { userId: "AGX-12654", name: "Volkan Ateş", amount: 3400, date: "09.06.2026 21:13", status: "Onaylandı" },
  { userId: "AGX-12088", name: "Aras Kaya", amount: 2900, date: "09.06.2026 21:07", status: "Onaylandı" },
  { userId: "AGX-12144", name: "Umut Eren", amount: 2850, date: "09.06.2026 21:03", status: "Reddedildi" },
  { userId: "AGX-12748", name: "Serkan Polat", amount: 19800.70, date: "09.06.2026 20:56", status: "Onaylandı" },
  { userId: "AGX-12624", name: "İsmail Çelik", amount: 3150.90, date: "09.06.2026 20:27", status: "Onaylandı" },
  { userId: "AGX-12125", name: "Yusuf Çelik", amount: 118500.75, date: "09.06.2026 20:24", status: "Onaylandı" },
  { userId: "AGX-12730", name: "Ahmet Alp", amount: 38500, date: "09.06.2026 19:55", status: "Onaylandı" },
  { userId: "AGX-12101", name: "Fatih Kaplan", amount: 3300, date: "09.06.2026 18:50", status: "Reddedildi" },
  { userId: "AGX-12060", name: "Recep Uğur", amount: 4500, date: "09.06.2026 18:25", status: "Onaylandı" },
  { userId: "AGX-12694", name: "Harun Ergin", amount: 72500.65, date: "09.06.2026 18:21", status: "Onaylandı" },
  { userId: "AGX-12692", name: "Berkay Aslan", amount: 4400, date: "09.06.2026 17:57", status: "Onaylandı" },
  { userId: "AGX-12105", name: "Süleyman Yıldız", amount: 2650, date: "09.06.2026 17:46", status: "Onaylandı" },
  { userId: "AGX-12062", name: "Okan Bayram", amount: 4700, date: "09.06.2026 17:36", status: "Onaylandı" },
  { userId: "AGX-12090", name: "Anıl Korkmaz", amount: 4600, date: "09.06.2026 17:33", status: "Reddedildi" },
  { userId: "AGX-12095", name: "Ramazan Aksoy", amount: 2550.35, date: "09.06.2026 17:20", status: "Onaylandı" },
  { userId: "AGX-12057", name: "Kerem Şahin", amount: 9800, date: "09.06.2026 17:10", status: "Onaylandı" },
  { userId: "AGX-12186", name: "Bora Keskin", amount: 4200.90, date: "09.06.2026 16:28", status: "Reddedildi" },
  { userId: "AGX-12089", name: "Mert Demir", amount: 8700, date: "09.06.2026 16:23", status: "Reddedildi" },
  { userId: "AGX-12104", name: "Doğukan Şen", amount: 4500, date: "09.06.2026 16:21", status: "Onaylandı" },
  { userId: "AGX-12075", name: "Çağrı Er", amount: 15600.50, date: "09.06.2026 16:11", status: "Reddedildi" },
  { userId: "AGX-12118", name: "Kaan Aksoy", amount: 4450, date: "09.06.2026 16:02", status: "Reddedildi" },
  { userId: "AGX-12083", name: "Talha Arslan", amount: 4550.80, date: "09.06.2026 15:45", status: "Onaylandı" },
  { userId: "AGX-12160", name: "Anıl Korkmaz", amount: 4300, date: "09.06.2026 15:25", status: "Onaylandı" },
  { userId: "AGX-12764", name: "Oğuzhan Tekin", amount: 4350, date: "09.06.2026 15:10", status: "Onaylandı" },
  { userId: "AGX-12102", name: "Rüzgar Çetin", amount: 114000, date: "09.06.2026 15:05", status: "Onaylandı" },
  { userId: "AGX-12065", name: "Sinan Yüce", amount: 23600, date: "09.06.2026 14:54", status: "Onaylandı" },
  { userId: "AGX-12070", name: "Ahmet Alp", amount: 8400, date: "09.06.2026 14:49", status: "Onaylandı" },
  { userId: "AGX-12115", name: "Denizhan Kılıç", amount: 2250, date: "09.06.2026 14:49", status: "Onaylandı" },
  { userId: "AGX-12055", name: "Berkay Aslan", amount: 2600.45, date: "09.06.2026 14:31", status: "Onaylandı" },
  { userId: "AGX-12134", name: "Cemil Kılıç", amount: 4550, date: "09.06.2026 14:04", status: "Reddedildi" },
  { userId: "AGX-12754", name: "Levent Sarı", amount: 2300.65, date: "09.06.2026 13:42", status: "Onaylandı" },
  { userId: "AGX-12136", name: "Tuna Başar", amount: 2150.65, date: "09.06.2026 13:27", status: "Onaylandı" },
  { userId: "AGX-12732", name: "İsmail Çelik", amount: 3750, date: "09.06.2026 13:21", status: "Onaylandı" },
  { userId: "AGX-12121", name: "Hakan Yılmaz", amount: 16800.75, date: "09.06.2026 13:14", status: "Onaylandı" },
  { userId: "AGX-12079", name: "Talha Arslan", amount: 56500.45, date: "09.06.2026 13:11", status: "Onaylandı" },
  { userId: "AGX-12069", name: "Kürşat Uçar", amount: 17500, date: "09.06.2026 13:04", status: "Onaylandı" },
  { userId: "AGX-12188", name: "İsmail Çelik", amount: 2950, date: "09.06.2026 12:55", status: "Onaylandı" },
  { userId: "AGX-12109", name: "Kamil Aksu", amount: 2450.20, date: "09.06.2026 12:54", status: "Onaylandı" },
  { userId: "AGX-12263", name: "Serhat Tan", amount: 3450.35, date: "09.06.2026 12:27", status: "Onaylandı" },
  { userId: "AGX-12152", name: "Anıl Korkmaz", amount: 5400.99, date: "09.06.2026 11:57", status: "Onaylandı" },
  { userId: "AGX-12214", name: "Çağrı Er", amount: 13900, date: "09.06.2026 11:43", status: "Onaylandı" },
  { userId: "AGX-12789", name: "Serkan Polat", amount: 18600, date: "09.06.2026 11:22", status: "Onaylandı" },
  { userId: "AGX-12244", name: "Ozan Çetin", amount: 15500, date: "09.06.2026 10:51", status: "Onaylandı" },
  { userId: "AGX-12570", name: "Fatih Kaplan", amount: 3600, date: "09.06.2026 10:23", status: "Onaylandı" },
  { userId: "AGX-12734", name: "Eray Özkan", amount: 4250, date: "09.06.2026 10:19", status: "Onaylandı" },
  { userId: "AGX-12140", name: "Oğuzhan Tekin", amount: 2000, date: "09.06.2026 10:05", status: "Onaylandı" },
  { userId: "AGX-12205", name: "Doğukan Şen", amount: 61000.75, date: "09.06.2026 09:52", status: "Onaylandı" },
  { userId: "AGX-12283", name: "Sinan Yüce", amount: 22800, date: "09.06.2026 09:44", status: "Onaylandı" },
  { userId: "AGX-12284", name: "Tarık Aydın", amount: 11100, date: "09.06.2026 09:36", status: "Onaylandı" },
  { userId: "AGX-12521", name: "Metin Güler", amount: 98500, date: "09.06.2026 09:09", status: "Reddedildi" },
  { userId: "AGX-12664", name: "Ramazan Aksoy", amount: 2750.80, date: "09.06.2026 09:09", status: "Onaylandı" },
  { userId: "AGX-12100", name: "İlker Taş", amount: 21200, date: "09.06.2026 09:07", status: "Reddedildi" },
  { userId: "AGX-12715", name: "Cemil Kılıç", amount: 22400, date: "09.06.2026 08:31", status: "Onaylandı" },
  { userId: "AGX-12139", name: "Anıl Korkmaz", amount: 4500, date: "09.06.2026 08:09", status: "Onaylandı" },
  { userId: "AGX-12103", name: "Berat Şahin", amount: 14300, date: "09.06.2026 08:05", status: "Onaylandı" },
  { userId: "AGX-12148", name: "Murat Efe", amount: 4000, date: "09.06.2026 07:56", status: "Onaylandı" },
  { userId: "AGX-12264", name: "Mert Demir", amount: 78000.45, date: "09.06.2026 07:55", status: "Onaylandı" },
  { userId: "AGX-12298", name: "Kadir Bulut", amount: 6800, date: "09.06.2026 07:44", status: "Onaylandı" },
  { userId: "AGX-12076", name: "Kuzey Yıldırım", amount: 31500, date: "09.06.2026 07:00", status: "Onaylandı" },
  { userId: "AGX-12270", name: "Egehan Sezer", amount: 64500.90, date: "09.06.2026 06:58", status: "Onaylandı" },
  { userId: "AGX-12203", name: "Kıvanç Demir", amount: 8200.99, date: "09.06.2026 06:53", status: "Onaylandı" },
  { userId: "AGX-12155", name: "Savaş Koç", amount: 5900, date: "09.06.2026 06:11", status: "Onaylandı" },
  { userId: "AGX-12080", name: "Ramazan Aksoy", amount: 2400, date: "09.06.2026 06:03", status: "Onaylandı" },
  { userId: "AGX-12119", name: "Hakan Yılmaz", amount: 2700, date: "09.06.2026 05:52", status: "Onaylandı" },
  { userId: "AGX-12126", name: "Eymen Koç", amount: 15700, date: "09.06.2026 05:34", status: "Onaylandı" },
  { userId: "AGX-12094", name: "Recep Uğur", amount: 4950, date: "09.06.2026 05:05", status: "Reddedildi" },
  { userId: "AGX-12234", name: "Ramazan Aksoy", amount: 3250, date: "09.06.2026 04:35", status: "Onaylandı" },
  { userId: "AGX-12322", name: "Ayhan Korkmaz", amount: 3150, date: "09.06.2026 04:34", status: "Reddedildi" },
  { userId: "AGX-12129", name: "Baran Kurt", amount: 17800, date: "09.06.2026 04:26", status: "Onaylandı" },
  { userId: "AGX-12287", name: "Yunus Baş", amount: 4750, date: "09.06.2026 04:24", status: "Reddedildi" },
  { userId: "AGX-12260", name: "Kuzey Yıldırım", amount: 4950, date: "09.06.2026 04:07", status: "Onaylandı" },
  { userId: "AGX-12077", name: "Tarık Aydın", amount: 2500, date: "09.06.2026 03:47", status: "Onaylandı" },
  { userId: "AGX-12073", name: "Doğukan Şen", amount: 4600, date: "09.06.2026 03:36", status: "Onaylandı" },
  { userId: "AGX-12110", name: "Yusuf Çelik", amount: 10700, date: "09.06.2026 03:26", status: "Onaylandı" },
  { userId: "AGX-12189", name: "Furkan Özdemir", amount: 2700, date: "09.06.2026 03:24", status: "Onaylandı" },
  { userId: "AGX-12086", name: "Sarp Yalçın", amount: 4750, date: "09.06.2026 03:02", status: "Onaylandı" },
  { userId: "AGX-12300", name: "Koray Avcı", amount: 3800.50, date: "09.06.2026 02:27", status: "Onaylandı" },
  { userId: "AGX-12274", name: "Serkan Polat", amount: 31000.70, date: "09.06.2026 01:48", status: "Onaylandı" },
  { userId: "AGX-12305", name: "Aras Kaya", amount: 21600, date: "09.06.2026 01:44", status: "Reddedildi" },
  { userId: "AGX-12183", name: "Ayhan Korkmaz", amount: 3550, date: "09.06.2026 01:39", status: "Onaylandı" },
  { userId: "AGX-12153", name: "Eymen Koç", amount: 4400, date: "09.06.2026 01:37", status: "Onaylandı" },
  { userId: "AGX-12175", name: "Halil Kurt", amount: 3150.40, date: "09.06.2026 00:50", status: "Reddedildi" },
  { userId: "AGX-12314", name: "İlker Taş", amount: 3200, date: "09.06.2026 00:26", status: "Onaylandı" },
  { userId: "AGX-12353", name: "Yusuf Çelik", amount: 84000, date: "09.06.2026 00:22", status: "Onaylandı" },
  { userId: "AGX-12238", name: "Serhat Tan", amount: 7900.20, date: "08.06.2026 23:50", status: "Reddedildi" },
  { userId: "AGX-12151", name: "Denizhan Kılıç", amount: 2750.65, date: "08.06.2026 23:41", status: "Onaylandı" },
  { userId: "AGX-12243", name: "Yunus Baş", amount: 96500, date: "08.06.2026 22:54", status: "Onaylandı" },
  { userId: "AGX-12128", name: "Batuhan Acar", amount: 8800, date: "08.06.2026 22:29", status: "Onaylandı" },
  { userId: "AGX-12184", name: "Bora Keskin", amount: 3150.35, date: "08.06.2026 22:23", status: "Onaylandı" },
  { userId: "AGX-12247", name: "Eray Özkan", amount: 10600, date: "08.06.2026 22:10", status: "Onaylandı" },
  { userId: "AGX-12156", name: "Harun Ergin", amount: 4250, date: "08.06.2026 22:07", status: "Onaylandı" },
  { userId: "AGX-12099", name: "Mert Demir", amount: 3150, date: "08.06.2026 22:02", status: "Onaylandı" },
  { userId: "AGX-12330", name: "Doruk Can", amount: 70500, date: "08.06.2026 21:55", status: "Onaylandı" },
  { userId: "AGX-12199", name: "Orkun Aydın", amount: 2200, date: "08.06.2026 21:41", status: "Onaylandı" },
  { userId: "AGX-12786", name: "Levent Sarı", amount: 20200.90, date: "08.06.2026 21:14", status: "Onaylandı" },
  { userId: "AGX-12741", name: "Cenk Soylu", amount: 83000, date: "08.06.2026 20:30", status: "Onaylandı" },
  { userId: "AGX-12256", name: "Murat Efe", amount: 2750.65, date: "08.06.2026 20:21", status: "Onaylandı" },
  { userId: "AGX-12384", name: "Eray Özkan", amount: 2000, date: "08.06.2026 20:16", status: "Onaylandı" },
  { userId: "AGX-12606", name: "Koray Avcı", amount: 24800.20, date: "08.06.2026 19:49", status: "Onaylandı" },
  { userId: "AGX-12222", name: "Orkun Aydın", amount: 3400, date: "08.06.2026 19:45", status: "Onaylandı" },
  { userId: "AGX-12130", name: "Kürşat Uçar", amount: 3700, date: "08.06.2026 19:34", status: "Onaylandı" },
  { userId: "AGX-12644", name: "Rüzgar Çetin", amount: 20900, date: "08.06.2026 18:59", status: "Onaylandı" },
  { userId: "AGX-12132", name: "Anıl Korkmaz", amount: 4250.90, date: "08.06.2026 18:37", status: "Onaylandı" },
  { userId: "AGX-12356", name: "Melih Şimşek", amount: 3350, date: "08.06.2026 18:08", status: "Onaylandı" },
  { userId: "AGX-12291", name: "Tuncay Yaman", amount: 15400, date: "08.06.2026 18:07", status: "Onaylandı" },
  { userId: "AGX-12292", name: "Tolga Yalçın", amount: 2450.35, date: "08.06.2026 17:59", status: "Onaylandı" },
  { userId: "AGX-12179", name: "Recep Uğur", amount: 4400.20, date: "08.06.2026 17:45", status: "Reddedildi" },
  { userId: "AGX-12098", name: "Ahmet Alp", amount: 114000.95, date: "08.06.2026 17:30", status: "Onaylandı" },
  { userId: "AGX-12182", name: "Yusuf Çelik", amount: 4350, date: "08.06.2026 16:55", status: "Onaylandı" },
  { userId: "AGX-12219", name: "Serkan Polat", amount: 4900.95, date: "08.06.2026 16:45", status: "Reddedildi" },
  { userId: "AGX-12254", name: "Tuncay Yaman", amount: 2800, date: "08.06.2026 16:32", status: "Reddedildi" },
  { userId: "AGX-12174", name: "Kürşat Uçar", amount: 10700, date: "08.06.2026 16:23", status: "Reddedildi" },
  { userId: "AGX-12093", name: "Orkun Aydın", amount: 3950.95, date: "08.06.2026 15:46", status: "Onaylandı" },
  { userId: "AGX-12197", name: "Tuna Başar", amount: 3050, date: "08.06.2026 15:42", status: "Onaylandı" },
  { userId: "AGX-12096", name: "Batuhan Acar", amount: 25000, date: "08.06.2026 15:24", status: "Onaylandı" },
  { userId: "AGX-12224", name: "Mustafa Can", amount: 4600, date: "08.06.2026 15:24", status: "Onaylandı" },
  { userId: "AGX-12178", name: "Yasin Eren", amount: 4050, date: "08.06.2026 15:10", status: "Onaylandı" },
  { userId: "AGX-12261", name: "Eren Arslan", amount: 15100, date: "08.06.2026 14:59", status: "Onaylandı" },
  { userId: "AGX-12378", name: "Metin Güler", amount: 4050.80, date: "08.06.2026 14:47", status: "Onaylandı" },
  { userId: "AGX-12428", name: "Serhat Tan", amount: 12600, date: "08.06.2026 14:22", status: "Onaylandı" },
  { userId: "AGX-12501", name: "Rıza Arslan", amount: 44000, date: "08.06.2026 13:59", status: "Onaylandı" },
  { userId: "AGX-12316", name: "Ayhan Korkmaz", amount: 15500, date: "08.06.2026 13:32", status: "Onaylandı" },
  { userId: "AGX-12166", name: "Doğukan Şen", amount: 11200, date: "08.06.2026 13:21", status: "Onaylandı" },
  { userId: "AGX-12117", name: "Serkan Polat", amount: 6700, date: "08.06.2026 12:59", status: "Onaylandı" },
  { userId: "AGX-12320", name: "İsmail Çelik", amount: 15800.95, date: "08.06.2026 12:43", status: "Reddedildi" },
  { userId: "AGX-12721", name: "Metehan Oral", amount: 2000.99, date: "08.06.2026 12:41", status: "Onaylandı" },
  { userId: "AGX-12168", name: "Savaş Koç", amount: 4750, date: "08.06.2026 12:39", status: "Onaylandı" },
  { userId: "AGX-12114", name: "Emirhan Kaya", amount: 2100, date: "08.06.2026 12:37", status: "Onaylandı" },
  { userId: "AGX-12448", name: "Onur Koç", amount: 4750, date: "08.06.2026 11:49", status: "Onaylandı" },
  { userId: "AGX-12627", name: "Denizhan Kılıç", amount: 47500, date: "08.06.2026 11:47", status: "Onaylandı" },
  { userId: "AGX-12112", name: "Taylan Bozkurt", amount: 6900, date: "08.06.2026 11:45", status: "Reddedildi" },
  { userId: "AGX-12412", name: "Alp Eren", amount: 5000, date: "08.06.2026 11:43", status: "Onaylandı" },
  { userId: "AGX-12172", name: "Aras Kaya", amount: 11400, date: "08.06.2026 11:11", status: "Onaylandı" },
  { userId: "AGX-12455", name: "Ozan Çetin", amount: 8200, date: "08.06.2026 10:54", status: "Onaylandı" },
  { userId: "AGX-12135", name: "Cihan Polat", amount: 2950, date: "08.06.2026 10:38", status: "Onaylandı" },
  { userId: "AGX-12333", name: "Fatih Kaplan", amount: 43000, date: "08.06.2026 10:26", status: "Onaylandı" },
  { userId: "AGX-12229", name: "Doğukan Şen", amount: 13900, date: "08.06.2026 10:22", status: "Onaylandı" },
  { userId: "AGX-12617", name: "Kıvanç Demir", amount: 4750.50, date: "08.06.2026 10:15", status: "Onaylandı" },
  { userId: "AGX-12446", name: "Kuzey Yıldırım", amount: 35000.75, date: "08.06.2026 09:50", status: "Onaylandı" },
  { userId: "AGX-12137", name: "Cenk Soylu", amount: 4700, date: "08.06.2026 09:45", status: "Onaylandı" },
  { userId: "AGX-12116", name: "Okan Bayram", amount: 4850, date: "08.06.2026 09:41", status: "Onaylandı" },
  { userId: "AGX-12736", name: "Miraç Kaplan", amount: 18500, date: "08.06.2026 09:26", status: "Onaylandı" },
  { userId: "AGX-12163", name: "Murat Efe", amount: 77500, date: "08.06.2026 08:58", status: "Onaylandı" },
  { userId: "AGX-12210", name: "Tarık Aydın", amount: 2850, date: "08.06.2026 08:33", status: "Onaylandı" },
  { userId: "AGX-12600", name: "Ulaş Demirci", amount: 15900.75, date: "08.06.2026 08:08", status: "Reddedildi" },
  { userId: "AGX-12200", name: "Serhat Tan", amount: 24300, date: "08.06.2026 08:07", status: "Onaylandı" },
  { userId: "AGX-12131", name: "Harun Ergin", amount: 9000, date: "08.06.2026 08:05", status: "Reddedildi" },
  { userId: "AGX-12147", name: "Kuzey Yıldırım", amount: 3400, date: "08.06.2026 07:50", status: "Onaylandı" },
  { userId: "AGX-12427", name: "Rüzgar Çetin", amount: 14600.45, date: "08.06.2026 07:31", status: "Onaylandı" },
  { userId: "AGX-12296", name: "Ömer Faruk", amount: 2850, date: "08.06.2026 07:15", status: "Onaylandı" },
  { userId: "AGX-12242", name: "Eren Arslan", amount: 116000.75, date: "08.06.2026 06:56", status: "Onaylandı" },
  { userId: "AGX-12216", name: "Kerem Şahin", amount: 2250, date: "08.06.2026 06:35", status: "Onaylandı" },
  { userId: "AGX-12127", name: "Doruk Can", amount: 51000.20, date: "08.06.2026 05:57", status: "Onaylandı" },
  { userId: "AGX-12281", name: "Utku Karaca", amount: 4400, date: "08.06.2026 05:56", status: "Onaylandı" },
  { userId: "AGX-12123", name: "Tarık Aydın", amount: 20700, date: "08.06.2026 05:55", status: "Reddedildi" },
  { userId: "AGX-12493", name: "Erhan Tekin", amount: 2900, date: "08.06.2026 05:46", status: "Onaylandı" },
  { userId: "AGX-12233", name: "Bora Keskin", amount: 21100, date: "08.06.2026 05:26", status: "Reddedildi" },
  { userId: "AGX-12159", name: "Tarık Aydın", amount: 4550.70, date: "08.06.2026 05:18", status: "Onaylandı" },
  { userId: "AGX-12362", name: "Oğuzhan Tekin", amount: 24600, date: "08.06.2026 05:02", status: "Onaylandı" },
  { userId: "AGX-12190", name: "Berkay Aslan", amount: 20500, date: "08.06.2026 05:01", status: "Onaylandı" },
  { userId: "AGX-12143", name: "Ramazan Aksoy", amount: 41000, date: "08.06.2026 04:50", status: "Onaylandı" },
  { userId: "AGX-12167", name: "Gökhan Duman", amount: 7400.80, date: "08.06.2026 04:39", status: "Onaylandı" },
  { userId: "AGX-12336", name: "Fatih Kaplan", amount: 2400.50, date: "08.06.2026 04:21", status: "Onaylandı" },
  { userId: "AGX-12367", name: "Volkan Ateş", amount: 11300, date: "08.06.2026 04:17", status: "Onaylandı" },
  { userId: "AGX-12225", name: "Taha Kuru", amount: 4900, date: "08.06.2026 03:59", status: "Onaylandı" },
  { userId: "AGX-12290", name: "Sarp Yalçın", amount: 3200, date: "08.06.2026 03:52", status: "Onaylandı" },
  { userId: "AGX-12319", name: "Serkan Polat", amount: 3950.95, date: "08.06.2026 02:16", status: "Reddedildi" },
  { userId: "AGX-12141", name: "Tarık Aydın", amount: 2400, date: "08.06.2026 01:03", status: "Onaylandı" },
  { userId: "AGX-12354", name: "Tuncay Yaman", amount: 3800, date: "08.06.2026 00:44", status: "Onaylandı" },
  { userId: "AGX-12425", name: "Murat Efe", amount: 22300, date: "08.06.2026 00:40", status: "Onaylandı" },
  { userId: "AGX-12142", name: "Eren Arslan", amount: 12200, date: "08.06.2026 00:25", status: "Onaylandı" },
  { userId: "AGX-12122", name: "Tolga Yalçın", amount: 4150.95, date: "08.06.2026 00:20", status: "Onaylandı" },
  { userId: "AGX-12475", name: "Umut Eren", amount: 3550, date: "08.06.2026 00:18", status: "Onaylandı" },
  { userId: "AGX-12196", name: "Burak Aydın", amount: 2700, date: "07.06.2026 23:37", status: "Onaylandı" },
  { userId: "AGX-12541", name: "Taha Kuru", amount: 55000, date: "07.06.2026 23:22", status: "Onaylandı" },
  { userId: "AGX-12271", name: "Baran Kurt", amount: 22300, date: "07.06.2026 23:11", status: "Onaylandı" },
  { userId: "AGX-12124", name: "Ozan Çetin", amount: 4950.95, date: "07.06.2026 23:10", status: "Reddedildi" },
  { userId: "AGX-12334", name: "Yunus Baş", amount: 73000, date: "07.06.2026 23:10", status: "Onaylandı" },
  { userId: "AGX-12231", name: "Levent Sarı", amount: 21000, date: "07.06.2026 22:15", status: "Onaylandı" },
  { userId: "AGX-12191", name: "Alihan Uslu", amount: 65500, date: "07.06.2026 22:14", status: "Reddedildi" },
  { userId: "AGX-12221", name: "Bora Keskin", amount: 4950.40, date: "07.06.2026 21:54", status: "Onaylandı" },
  { userId: "AGX-12295", name: "Kıvanç Demir", amount: 38000, date: "07.06.2026 21:41", status: "Onaylandı" },
  { userId: "AGX-12223", name: "Harun Ergin", amount: 4150.95, date: "07.06.2026 21:04", status: "Reddedildi" },
  { userId: "AGX-12279", name: "Tolga Yalçın", amount: 4250, date: "07.06.2026 20:59", status: "Onaylandı" },
  { userId: "AGX-12583", name: "Ahmet Alp", amount: 8300, date: "07.06.2026 20:52", status: "Onaylandı" },
  { userId: "AGX-12700", name: "Talha Arslan", amount: 13200, date: "07.06.2026 20:43", status: "Onaylandı" },
  { userId: "AGX-12498", name: "Tuncay Yaman", amount: 24400, date: "07.06.2026 20:42", status: "Onaylandı" },
  { userId: "AGX-12237", name: "Anıl Korkmaz", amount: 4450, date: "07.06.2026 20:26", status: "Onaylandı" },
  { userId: "AGX-12301", name: "Levent Sarı", amount: 4600, date: "07.06.2026 20:18", status: "Onaylandı" },
  { userId: "AGX-12348", name: "Metehan Oral", amount: 3550, date: "07.06.2026 20:00", status: "Onaylandı" },
  { userId: "AGX-12511", name: "Cem Arıkan", amount: 3550, date: "07.06.2026 19:41", status: "Onaylandı" },
  { userId: "AGX-12207", name: "Cenk Soylu", amount: 16600, date: "07.06.2026 19:37", status: "Reddedildi" },
  { userId: "AGX-12525", name: "Mehmet Ali", amount: 3950, date: "07.06.2026 19:25", status: "Onaylandı" },
  { userId: "AGX-12169", name: "Arda Kaplan", amount: 2550, date: "07.06.2026 19:22", status: "Onaylandı" },
  { userId: "AGX-12571", name: "Umut Eren", amount: 4100, date: "07.06.2026 19:17", status: "Onaylandı" },
  { userId: "AGX-12794", name: "Alperen Doğan", amount: 17200, date: "07.06.2026 19:16", status: "Onaylandı" },
  { userId: "AGX-12158", name: "Eray Özkan", amount: 3800.90, date: "07.06.2026 19:04", status: "Reddedildi" },
  { userId: "AGX-12177", name: "Eray Özkan", amount: 8900, date: "07.06.2026 18:46", status: "Onaylandı" },
  { userId: "AGX-12385", name: "Doğukan Şen", amount: 4350, date: "07.06.2026 18:31", status: "Onaylandı" },
  { userId: "AGX-12171", name: "Halil Kurt", amount: 4050, date: "07.06.2026 18:29", status: "Onaylandı" },
  { userId: "AGX-12154", name: "Cihan Polat", amount: 2550, date: "07.06.2026 18:25", status: "Onaylandı" },
  { userId: "AGX-12165", name: "Batuhan Acar", amount: 13700, date: "07.06.2026 18:23", status: "Reddedildi" },
  { userId: "AGX-12258", name: "Mehmet Ali", amount: 3600.45, date: "07.06.2026 18:10", status: "Onaylandı" },
  { userId: "AGX-12145", name: "Denizhan Kılıç", amount: 2450, date: "07.06.2026 18:07", status: "Reddedildi" },
  { userId: "AGX-12714", name: "Yiğit Kara", amount: 3550, date: "07.06.2026 17:45", status: "Onaylandı" },
  { userId: "AGX-12360", name: "İsmail Çelik", amount: 2900.40, date: "07.06.2026 17:33", status: "Onaylandı" },
  { userId: "AGX-12585", name: "Cenk Soylu", amount: 6400, date: "07.06.2026 17:28", status: "Onaylandı" },
  { userId: "AGX-12396", name: "Mustafa Can", amount: 11800.45, date: "07.06.2026 16:18", status: "Reddedildi" },
  { userId: "AGX-12434", name: "Koray Avcı", amount: 4700, date: "07.06.2026 15:50", status: "Onaylandı" },
  { userId: "AGX-12239", name: "Baran Kurt", amount: 5000, date: "07.06.2026 15:45", status: "Onaylandı" },
  { userId: "AGX-12192", name: "Sinan Yüce", amount: 12100, date: "07.06.2026 15:32", status: "Onaylandı" },
  { userId: "AGX-12441", name: "Erhan Tekin", amount: 3150, date: "07.06.2026 15:23", status: "Onaylandı" },
  { userId: "AGX-12185", name: "Cemil Kılıç", amount: 17600, date: "07.06.2026 15:16", status: "Onaylandı" },
  { userId: "AGX-12603", name: "Batuhan Acar", amount: 3250, date: "07.06.2026 15:06", status: "Onaylandı" },
  { userId: "AGX-12744", name: "Cenk Soylu", amount: 3850, date: "07.06.2026 14:52", status: "Onaylandı" },
  { userId: "AGX-12588", name: "Serkan Polat", amount: 27000, date: "07.06.2026 14:50", status: "Onaylandı" },
  { userId: "AGX-12323", name: "Denizhan Kılıç", amount: 4450, date: "07.06.2026 14:43", status: "Reddedildi" },
  { userId: "AGX-12285", name: "Rüzgar Çetin", amount: 2900.40, date: "07.06.2026 14:42", status: "Onaylandı" },
  { userId: "AGX-12202", name: "Baran Kurt", amount: 4700, date: "07.06.2026 14:41", status: "Onaylandı" },
  { userId: "AGX-12539", name: "Kuzey Yıldırım", amount: 102500, date: "07.06.2026 14:32", status: "Onaylandı" },
  { userId: "AGX-12324", name: "Levent Sarı", amount: 3450, date: "07.06.2026 14:28", status: "Onaylandı" },
  { userId: "AGX-12443", name: "Ramazan Aksoy", amount: 3200.90, date: "07.06.2026 14:17", status: "Onaylandı" },
  { userId: "AGX-12272", name: "Kürşat Uçar", amount: 24900, date: "07.06.2026 13:58", status: "Reddedildi" },
  { userId: "AGX-12445", name: "Oğuzhan Tekin", amount: 56500, date: "07.06.2026 13:52", status: "Onaylandı" },
  { userId: "AGX-12705", name: "Denizhan Kılıç", amount: 20200, date: "07.06.2026 13:48", status: "Onaylandı" },
  { userId: "AGX-12149", name: "Ramazan Aksoy", amount: 3500, date: "07.06.2026 13:37", status: "Onaylandı" },
  { userId: "AGX-12146", name: "Sarp Yalçın", amount: 4300, date: "07.06.2026 12:43", status: "Onaylandı" },
  { userId: "AGX-12622", name: "Rıza Arslan", amount: 12700, date: "07.06.2026 12:38", status: "Onaylandı" },
  { userId: "AGX-12561", name: "Savaş Koç", amount: 3150, date: "07.06.2026 12:08", status: "Onaylandı" },
  { userId: "AGX-12503", name: "Yasin Eren", amount: 3850, date: "07.06.2026 11:41", status: "Onaylandı" },
  { userId: "AGX-12419", name: "Selim Akın", amount: 4850, date: "07.06.2026 11:40", status: "Reddedildi" },
  { userId: "AGX-12596", name: "Caner Yıldız", amount: 2150, date: "07.06.2026 11:20", status: "Reddedildi" },
  { userId: "AGX-12187", name: "Samet Öztürk", amount: 2650, date: "07.06.2026 11:17", status: "Onaylandı" },
  { userId: "AGX-12361", name: "Miraç Kaplan", amount: 11700.15, date: "07.06.2026 11:09", status: "Onaylandı" },
  { userId: "AGX-12506", name: "Ömer Faruk", amount: 4550, date: "07.06.2026 11:04", status: "Reddedildi" },
  { userId: "AGX-12424", name: "Volkan Ateş", amount: 2100.99, date: "07.06.2026 10:41", status: "Onaylandı" },
  { userId: "AGX-12170", name: "Berkay Aslan", amount: 2350, date: "07.06.2026 10:24", status: "Onaylandı" },
  { userId: "AGX-12343", name: "Kadir Bulut", amount: 4350, date: "07.06.2026 09:48", status: "Onaylandı" },
  { userId: "AGX-12573", name: "İlker Taş", amount: 3850, date: "07.06.2026 09:33", status: "Reddedildi" },
  { userId: "AGX-12370", name: "Metin Güler", amount: 2400, date: "07.06.2026 09:14", status: "Onaylandı" },
  { userId: "AGX-12162", name: "Egehan Sezer", amount: 17600.35, date: "07.06.2026 09:06", status: "Onaylandı" },
  { userId: "AGX-12702", name: "Alp Eren", amount: 12500, date: "07.06.2026 08:22", status: "Onaylandı" },
  { userId: "AGX-12407", name: "Kerem Şahin", amount: 4400, date: "07.06.2026 07:13", status: "Onaylandı" },
  { userId: "AGX-12150", name: "Gökhan Duman", amount: 4550, date: "07.06.2026 05:26", status: "Onaylandı" },
  { userId: "AGX-12180", name: "Umut Eren", amount: 2250, date: "07.06.2026 05:23", status: "Reddedildi" },
  { userId: "AGX-12193", name: "Murat Efe", amount: 3600, date: "07.06.2026 05:23", status: "Onaylandı" },
  { userId: "AGX-12386", name: "Rıza Arslan", amount: 31500, date: "07.06.2026 05:21", status: "Reddedildi" },
  { userId: "AGX-12201", name: "Onur Koç", amount: 2150, date: "07.06.2026 05:05", status: "Onaylandı" },
  { userId: "AGX-12195", name: "Fırat Özer", amount: 2000, date: "07.06.2026 04:33", status: "Onaylandı" },
  { userId: "AGX-12273", name: "Umut Eren", amount: 2500.70, date: "07.06.2026 04:24", status: "Onaylandı" },
  { userId: "AGX-12608", name: "Recep Uğur", amount: 2950, date: "07.06.2026 04:15", status: "Onaylandı" },
  { userId: "AGX-12157", name: "Bora Keskin", amount: 4300, date: "07.06.2026 03:57", status: "Onaylandı" },
  { userId: "AGX-12500", name: "Taha Kuru", amount: 2650.65, date: "07.06.2026 03:44", status: "Onaylandı" },
  { userId: "AGX-12426", name: "Cemil Kılıç", amount: 34000, date: "07.06.2026 03:09", status: "Onaylandı" },
  { userId: "AGX-12266", name: "Hakan Yılmaz", amount: 3750, date: "07.06.2026 02:23", status: "Onaylandı" },
  { userId: "AGX-12433", name: "Umut Eren", amount: 2700.40, date: "07.06.2026 01:42", status: "Reddedildi" },
  { userId: "AGX-12331", name: "Kadir Bulut", amount: 108500, date: "07.06.2026 01:41", status: "Onaylandı" },
  { userId: "AGX-12706", name: "Kamil Aksu", amount: 4750.90, date: "07.06.2026 01:17", status: "Onaylandı" },
  { userId: "AGX-12248", name: "Erhan Tekin", amount: 18500.90, date: "07.06.2026 00:19", status: "Reddedildi" },
  { userId: "AGX-12476", name: "Eymen Koç", amount: 2250, date: "07.06.2026 00:18", status: "Onaylandı" },
  { userId: "AGX-12230", name: "Emirhan Kaya", amount: 3650, date: "06.06.2026 23:43", status: "Onaylandı" },
  { userId: "AGX-12250", name: "Atakan Ersoy", amount: 56000, date: "06.06.2026 23:34", status: "Onaylandı" },
  { userId: "AGX-12276", name: "Süleyman Yıldız", amount: 15300, date: "06.06.2026 22:57", status: "Onaylandı" },
  { userId: "AGX-12252", name: "Erhan Tekin", amount: 66000, date: "06.06.2026 22:55", status: "Onaylandı" },
  { userId: "AGX-12483", name: "Talha Arslan", amount: 18200.20, date: "06.06.2026 22:52", status: "Onaylandı" },
  { userId: "AGX-12161", name: "Bartu Sönmez", amount: 2050.20, date: "06.06.2026 22:51", status: "Onaylandı" },
  { userId: "AGX-12215", name: "Tarık Aydın", amount: 3750, date: "06.06.2026 22:48", status: "Reddedildi" },
  { userId: "AGX-12726", name: "Umut Eren", amount: 2200, date: "06.06.2026 22:44", status: "Onaylandı" },
  { userId: "AGX-12548", name: "İlker Taş", amount: 3200.20, date: "06.06.2026 22:43", status: "Onaylandı" },
  { userId: "AGX-12416", name: "Ozan Çetin", amount: 3550.95, date: "06.06.2026 22:22", status: "Onaylandı" },
  { userId: "AGX-12265", name: "Furkan Özdemir", amount: 7300, date: "06.06.2026 22:16", status: "Onaylandı" },
  { userId: "AGX-12584", name: "Kuzey Yıldırım", amount: 4500, date: "06.06.2026 22:14", status: "Onaylandı" },
  { userId: "AGX-12309", name: "Talha Arslan", amount: 4800, date: "06.06.2026 21:41", status: "Onaylandı" },
  { userId: "AGX-12392", name: "Levent Sarı", amount: 83000.50, date: "06.06.2026 21:28", status: "Onaylandı" },
  { userId: "AGX-12164", name: "Ramazan Aksoy", amount: 3300, date: "06.06.2026 21:06", status: "Onaylandı" },
  { userId: "AGX-12422", name: "Ozan Çetin", amount: 4300, date: "06.06.2026 21:04", status: "Onaylandı" },
  { userId: "AGX-12743", name: "Emirhan Kaya", amount: 15500, date: "06.06.2026 20:22", status: "Reddedildi" },
  { userId: "AGX-12249", name: "Sinan Yüce", amount: 14100, date: "06.06.2026 19:53", status: "Reddedildi" },
  { userId: "AGX-12374", name: "Tuna Başar", amount: 2650, date: "06.06.2026 19:46", status: "Onaylandı" },
  { userId: "AGX-12176", name: "Süleyman Yıldız", amount: 18200, date: "06.06.2026 19:43", status: "Onaylandı" },
  { userId: "AGX-12401", name: "Yunus Baş", amount: 22600, date: "06.06.2026 19:17", status: "Onaylandı" },
  { userId: "AGX-12602", name: "Sinan Yüce", amount: 8100, date: "06.06.2026 19:08", status: "Onaylandı" },
  { userId: "AGX-12173", name: "Kadir Bulut", amount: 3500, date: "06.06.2026 18:38", status: "Onaylandı" },
  { userId: "AGX-12408", name: "Samet Öztürk", amount: 69000, date: "06.06.2026 18:34", status: "Onaylandı" },
  { userId: "AGX-12674", name: "Rıza Arslan", amount: 17500, date: "06.06.2026 18:27", status: "Onaylandı" },
  { userId: "AGX-12405", name: "Serhat Tan", amount: 3300, date: "06.06.2026 18:16", status: "Onaylandı" },
  { userId: "AGX-12432", name: "Ayhan Korkmaz", amount: 109500, date: "06.06.2026 17:50", status: "Onaylandı" },
  { userId: "AGX-12614", name: "Melih Şimşek", amount: 23000, date: "06.06.2026 17:12", status: "Onaylandı" },
  { userId: "AGX-12365", name: "Ayhan Korkmaz", amount: 6700, date: "06.06.2026 16:07", status: "Onaylandı" },
  { userId: "AGX-12388", name: "Fatih Kaplan", amount: 4500.50, date: "06.06.2026 15:59", status: "Onaylandı" },
  { userId: "AGX-12194", name: "Metehan Oral", amount: 3300, date: "06.06.2026 15:58", status: "Onaylandı" },
  { userId: "AGX-12391", name: "Eray Özkan", amount: 96000.15, date: "06.06.2026 15:09", status: "Onaylandı" },
  { userId: "AGX-12696", name: "Tuncay Yaman", amount: 4950, date: "06.06.2026 14:59", status: "Onaylandı" },
  { userId: "AGX-12209", name: "Recep Uğur", amount: 30000, date: "06.06.2026 14:53", status: "Onaylandı" },
  { userId: "AGX-12286", name: "Rüzgar Çetin", amount: 75000, date: "06.06.2026 14:36", status: "Reddedildi" },
  { userId: "AGX-12632", name: "Murat Efe", amount: 10800, date: "06.06.2026 14:14", status: "Onaylandı" },
  { userId: "AGX-12204", name: "Cemil Kılıç", amount: 2000.20, date: "06.06.2026 14:08", status: "Reddedildi" },
  { userId: "AGX-12235", name: "Umut Eren", amount: 2000, date: "06.06.2026 13:45", status: "Onaylandı" },
  { userId: "AGX-12611", name: "Denizhan Kılıç", amount: 22500.99, date: "06.06.2026 12:59", status: "Onaylandı" },
  { userId: "AGX-12710", name: "Recep Uğur", amount: 2950, date: "06.06.2026 12:55", status: "Onaylandı" },
  { userId: "AGX-12400", name: "Onur Koç", amount: 2550, date: "06.06.2026 12:54", status: "Reddedildi" },
  { userId: "AGX-12640", name: "Denizhan Kılıç", amount: 21800, date: "06.06.2026 12:43", status: "Onaylandı" },
  { userId: "AGX-12321", name: "Eymen Koç", amount: 23400, date: "06.06.2026 12:32", status: "Reddedildi" },
  { userId: "AGX-12615", name: "Ahmet Alp", amount: 4300.65, date: "06.06.2026 11:57", status: "Onaylandı" },
  { userId: "AGX-12208", name: "Cenk Soylu", amount: 3800, date: "06.06.2026 11:55", status: "Onaylandı" },
  { userId: "AGX-12537", name: "Furkan Özdemir", amount: 2500, date: "06.06.2026 11:38", status: "Onaylandı" },
  { userId: "AGX-12308", name: "Doğukan Şen", amount: 12400, date: "06.06.2026 11:36", status: "Onaylandı" },
  { userId: "AGX-12325", name: "Yasin Eren", amount: 2700, date: "06.06.2026 11:10", status: "Onaylandı" },
  { userId: "AGX-12653", name: "Berat Şahin", amount: 3450.65, date: "06.06.2026 10:39", status: "Reddedildi" },
  { userId: "AGX-12198", name: "Fırat Özer", amount: 4350.75, date: "06.06.2026 10:33", status: "Onaylandı" },
  { userId: "AGX-12689", name: "Miraç Kaplan", amount: 23200.90, date: "06.06.2026 10:31", status: "Onaylandı" },
  { userId: "AGX-12727", name: "Fırat Özer", amount: 78500.80, date: "06.06.2026 10:29", status: "Onaylandı" },
  { userId: "AGX-12595", name: "Fatih Kaplan", amount: 2600.20, date: "06.06.2026 10:28", status: "Onaylandı" },
  { userId: "AGX-12364", name: "Miraç Kaplan", amount: 6900.65, date: "06.06.2026 10:22", status: "Reddedildi" },
  { userId: "AGX-12723", name: "Kamil Aksu", amount: 2650, date: "06.06.2026 10:14", status: "Onaylandı" },
  { userId: "AGX-12212", name: "Metehan Oral", amount: 24700, date: "06.06.2026 10:01", status: "Onaylandı" },
  { userId: "AGX-12745", name: "Fırat Özer", amount: 64000, date: "06.06.2026 09:59", status: "Reddedildi" },
  { userId: "AGX-12347", name: "Tuna Başar", amount: 2200.99, date: "06.06.2026 09:30", status: "Onaylandı" },
  { userId: "AGX-12389", name: "Anıl Korkmaz", amount: 4450, date: "06.06.2026 09:21", status: "Onaylandı" },
  { userId: "AGX-12315", name: "Gökhan Duman", amount: 3550, date: "06.06.2026 09:17", status: "Onaylandı" },
  { userId: "AGX-12510", name: "Cenk Soylu", amount: 2950, date: "06.06.2026 09:04", status: "Reddedildi" },
  { userId: "AGX-12349", name: "Yusuf Çelik", amount: 40500.90, date: "06.06.2026 09:02", status: "Onaylandı" },
  { userId: "AGX-12255", name: "Sinan Yüce", amount: 7200, date: "06.06.2026 08:58", status: "Reddedildi" },
  { userId: "AGX-12605", name: "Kürşat Uçar", amount: 15300, date: "06.06.2026 08:36", status: "Onaylandı" },
  { userId: "AGX-12318", name: "Hüseyin Ekin", amount: 2400, date: "06.06.2026 08:09", status: "Onaylandı" },
  { userId: "AGX-12269", name: "Rüzgar Çetin", amount: 40000.50, date: "06.06.2026 07:29", status: "Reddedildi" },
  { userId: "AGX-12232", name: "Miraç Kaplan", amount: 2050.35, date: "06.06.2026 07:23", status: "Onaylandı" },
  { userId: "AGX-12307", name: "Utku Karaca", amount: 4650, date: "06.06.2026 06:53", status: "Reddedildi" },
  { userId: "AGX-12678", name: "Doruk Can", amount: 4700.75, date: "06.06.2026 06:29", status: "Onaylandı" },
  { userId: "AGX-12226", name: "Kıvanç Demir", amount: 3100.70, date: "06.06.2026 06:23", status: "Onaylandı" },
  { userId: "AGX-12206", name: "Levent Sarı", amount: 3800, date: "06.06.2026 06:08", status: "Onaylandı" },
  { userId: "AGX-12402", name: "Levent Sarı", amount: 3750, date: "06.06.2026 05:32", status: "Onaylandı" },
  { userId: "AGX-12380", name: "Burak Aydın", amount: 24000.70, date: "06.06.2026 05:27", status: "Onaylandı" },
  { userId: "AGX-12245", name: "Ercan Durmaz", amount: 60500, date: "06.06.2026 05:06", status: "Onaylandı" },
  { userId: "AGX-12687", name: "Tuna Başar", amount: 2800.35, date: "06.06.2026 04:55", status: "Onaylandı" },
  { userId: "AGX-12530", name: "Miraç Kaplan", amount: 4550.80, date: "06.06.2026 04:44", status: "Onaylandı" },
  { userId: "AGX-12769", name: "Utku Karaca", amount: 10600, date: "06.06.2026 04:11", status: "Onaylandı" },
  { userId: "AGX-12495", name: "Rıza Arslan", amount: 4800, date: "06.06.2026 04:01", status: "Reddedildi" },
  { userId: "AGX-12533", name: "Volkan Ateş", amount: 3200.50, date: "06.06.2026 04:00", status: "Onaylandı" },
  { userId: "AGX-12317", name: "Kuzey Yıldırım", amount: 4050, date: "06.06.2026 03:13", status: "Onaylandı" },
  { userId: "AGX-12218", name: "Miraç Kaplan", amount: 18800.99, date: "06.06.2026 03:12", status: "Onaylandı" },
  { userId: "AGX-12280", name: "Cihan Polat", amount: 5900, date: "06.06.2026 02:46", status: "Onaylandı" },
  { userId: "AGX-12220", name: "Yunus Baş", amount: 2300, date: "06.06.2026 02:05", status: "Onaylandı" },
  { userId: "AGX-12784", name: "Kaan Aksoy", amount: 2600.40, date: "06.06.2026 01:57", status: "Onaylandı" },
  { userId: "AGX-12294", name: "Alihan Uslu", amount: 2900.90, date: "06.06.2026 01:53", status: "Onaylandı" },
  { userId: "AGX-12262", name: "Selim Akın", amount: 9900, date: "06.06.2026 01:33", status: "Onaylandı" },
  { userId: "AGX-12643", name: "Berkay Aslan", amount: 23600, date: "06.06.2026 01:30", status: "Onaylandı" },
  { userId: "AGX-12711", name: "Burak Aydın", amount: 5000, date: "06.06.2026 01:04", status: "Reddedildi" },
  { userId: "AGX-12421", name: "Yiğit Kara", amount: 12200, date: "06.06.2026 00:15", status: "Onaylandı" },
  { userId: "AGX-12217", name: "Anıl Korkmaz", amount: 18100.15, date: "06.06.2026 00:05", status: "Reddedildi" },
  { userId: "AGX-12512", name: "Arda Kaplan", amount: 2500.45, date: "06.06.2026 00:02", status: "Reddedildi" },
  { userId: "AGX-12211", name: "Burak Aydın", amount: 4300, date: "05.06.2026 23:51", status: "Onaylandı" },
  { userId: "AGX-12762", name: "Baran Kurt", amount: 2750, date: "05.06.2026 23:51", status: "Onaylandı" },
  { userId: "AGX-12240", name: "İlker Taş", amount: 2750, date: "05.06.2026 23:34", status: "Onaylandı" },
  { userId: "AGX-12257", name: "Furkan Özdemir", amount: 23400, date: "05.06.2026 23:27", status: "Onaylandı" },
  { userId: "AGX-12722", name: "Burak Aydın", amount: 2100, date: "05.06.2026 23:04", status: "Onaylandı" },
  { userId: "AGX-12452", name: "Cihan Polat", amount: 2900, date: "05.06.2026 22:58", status: "Onaylandı" },
  { userId: "AGX-12268", name: "Rüzgar Çetin", amount: 3500, date: "05.06.2026 22:54", status: "Reddedildi" },
  { userId: "AGX-12213", name: "Kadir Bulut", amount: 23600, date: "05.06.2026 22:42", status: "Onaylandı" },
  { userId: "AGX-12682", name: "Kuzey Yıldırım", amount: 3050.20, date: "05.06.2026 22:38", status: "Reddedildi" },
  { userId: "AGX-12363", name: "Tolga Yalçın", amount: 4900, date: "05.06.2026 22:25", status: "Reddedildi" },
  { userId: "AGX-12227", name: "Erhan Tekin", amount: 4450.90, date: "05.06.2026 22:23", status: "Onaylandı" },
  { userId: "AGX-12251", name: "Kerem Şahin", amount: 15200.45, date: "05.06.2026 22:12", status: "Onaylandı" },
  { userId: "AGX-12520", name: "Taha Kuru", amount: 8000, date: "05.06.2026 22:10", status: "Onaylandı" },
  { userId: "AGX-12429", name: "Orkun Aydın", amount: 3900, date: "05.06.2026 21:52", status: "Onaylandı" },
  { userId: "AGX-12332", name: "Bartu Sönmez", amount: 2750, date: "05.06.2026 21:47", status: "Onaylandı" },
  { userId: "AGX-12519", name: "Çağrı Er", amount: 3550.50, date: "05.06.2026 20:57", status: "Onaylandı" },
  { userId: "AGX-12462", name: "Serkan Polat", amount: 4450, date: "05.06.2026 20:20", status: "Onaylandı" },
  { userId: "AGX-12685", name: "İsmail Çelik", amount: 2400.70, date: "05.06.2026 20:20", status: "Onaylandı" },
  { userId: "AGX-12619", name: "Berkay Aslan", amount: 7300.40, date: "05.06.2026 19:46", status: "Reddedildi" },
  { userId: "AGX-12752", name: "Ayhan Korkmaz", amount: 5200.70, date: "05.06.2026 19:24", status: "Onaylandı" },
  { userId: "AGX-12439", name: "Aras Kaya", amount: 119000, date: "05.06.2026 19:01", status: "Onaylandı" },
  { userId: "AGX-12507", name: "Samet Öztürk", amount: 4700.20, date: "05.06.2026 18:53", status: "Onaylandı" },
  { userId: "AGX-12534", name: "Atakan Ersoy", amount: 4450, date: "05.06.2026 18:47", status: "Onaylandı" },
  { userId: "AGX-12686", name: "Yusuf Çelik", amount: 3800.99, date: "05.06.2026 18:27", status: "Onaylandı" },
  { userId: "AGX-12577", name: "Ayhan Korkmaz", amount: 2700.45, date: "05.06.2026 18:26", status: "Onaylandı" },
  { userId: "AGX-12578", name: "Koray Avcı", amount: 16400, date: "05.06.2026 18:18", status: "Onaylandı" },
  { userId: "AGX-12228", name: "Koray Avcı", amount: 25000, date: "05.06.2026 18:08", status: "Onaylandı" },
  { userId: "AGX-12471", name: "Kadir Bulut", amount: 14600, date: "05.06.2026 17:48", status: "Reddedildi" },
  { userId: "AGX-12377", name: "İlker Taş", amount: 56500, date: "05.06.2026 17:45", status: "Onaylandı" },
  { userId: "AGX-12542", name: "Erhan Tekin", amount: 2750, date: "05.06.2026 16:59", status: "Onaylandı" },
  { userId: "AGX-12543", name: "Miraç Kaplan", amount: 4100.40, date: "05.06.2026 16:42", status: "Onaylandı" },
  { userId: "AGX-12423", name: "Yusuf Çelik", amount: 113000, date: "05.06.2026 16:37", status: "Onaylandı" },
  { userId: "AGX-12616", name: "Kıvanç Demir", amount: 50000, date: "05.06.2026 16:35", status: "Onaylandı" },
  { userId: "AGX-12381", name: "Onur Koç", amount: 44000.35, date: "05.06.2026 16:28", status: "Onaylandı" },
  { userId: "AGX-12246", name: "Cihan Polat", amount: 2350, date: "05.06.2026 16:21", status: "Reddedildi" },
  { userId: "AGX-12350", name: "Berkay Aslan", amount: 3100, date: "05.06.2026 15:06", status: "Onaylandı" },
  { userId: "AGX-12773", name: "Berkay Aslan", amount: 2250.15, date: "05.06.2026 14:41", status: "Onaylandı" },
  { userId: "AGX-12553", name: "Metin Güler", amount: 2100.75, date: "05.06.2026 14:24", status: "Onaylandı" },
  { userId: "AGX-12277", name: "Ahmet Alp", amount: 2750, date: "05.06.2026 14:14", status: "Onaylandı" },
  { userId: "AGX-12259", name: "Süleyman Yıldız", amount: 4950, date: "05.06.2026 13:54", status: "Onaylandı" },
  { userId: "AGX-12518", name: "Mert Demir", amount: 4000, date: "05.06.2026 13:54", status: "Onaylandı" },
  { userId: "AGX-12289", name: "Gökhan Duman", amount: 57500, date: "05.06.2026 13:26", status: "Onaylandı" },
  { userId: "AGX-12460", name: "Kadir Bulut", amount: 4000, date: "05.06.2026 13:14", status: "Onaylandı" },
  { userId: "AGX-12623", name: "Gökhan Duman", amount: 77500.15, date: "05.06.2026 12:55", status: "Onaylandı" },
  { userId: "AGX-12492", name: "İlker Taş", amount: 2900.75, date: "05.06.2026 12:22", status: "Onaylandı" },
  { userId: "AGX-12463", name: "Cihan Polat", amount: 18500.75, date: "05.06.2026 12:21", status: "Onaylandı" },
  { userId: "AGX-12437", name: "İlker Taş", amount: 74000, date: "05.06.2026 12:19", status: "Reddedildi" },
  { userId: "AGX-12438", name: "Rıza Arslan", amount: 4300.65, date: "05.06.2026 12:04", status: "Onaylandı" },
  { userId: "AGX-12329", name: "Fırat Özer", amount: 2050, date: "05.06.2026 11:53", status: "Onaylandı" },
  { userId: "AGX-12344", name: "Miraç Kaplan", amount: 4450, date: "05.06.2026 11:36", status: "Onaylandı" },
  { userId: "AGX-12683", name: "Koray Avcı", amount: 2250, date: "05.06.2026 11:33", status: "Onaylandı" },
  { userId: "AGX-12649", name: "Ayhan Korkmaz", amount: 2350.20, date: "05.06.2026 10:57", status: "Onaylandı" },
  { userId: "AGX-12470", name: "Eren Arslan", amount: 41000, date: "05.06.2026 10:23", status: "Onaylandı" },
  { userId: "AGX-12486", name: "Yunus Baş", amount: 3400, date: "05.06.2026 10:17", status: "Onaylandı" },
  { userId: "AGX-12447", name: "Fırat Özer", amount: 4050, date: "05.06.2026 10:14", status: "Reddedildi" },
  { userId: "AGX-12768", name: "Baran Kurt", amount: 4150.50, date: "05.06.2026 10:01", status: "Onaylandı" },
  { userId: "AGX-12668", name: "Ahmet Alp", amount: 3450, date: "05.06.2026 09:55", status: "Onaylandı" },
  { userId: "AGX-12297", name: "Alp Eren", amount: 5000, date: "05.06.2026 09:46", status: "Onaylandı" },
  { userId: "AGX-12708", name: "Doğukan Şen", amount: 5000, date: "05.06.2026 09:28", status: "Onaylandı" },
  { userId: "AGX-12755", name: "Okan Bayram", amount: 10000, date: "05.06.2026 09:23", status: "Onaylandı" },
  { userId: "AGX-12383", name: "Miraç Kaplan", amount: 2150.50, date: "05.06.2026 09:21", status: "Reddedildi" },
  { userId: "AGX-12299", name: "Cihan Ergin", amount: 20900.80, date: "05.06.2026 08:52", status: "Onaylandı" },
  { userId: "AGX-12311", name: "Taha Kuru", amount: 3800.15, date: "05.06.2026 08:47", status: "Onaylandı" },
  { userId: "AGX-12253", name: "Erhan Tekin", amount: 2200, date: "05.06.2026 08:37", status: "Onaylandı" },
  { userId: "AGX-12580", name: "Ulaş Demirci", amount: 2100, date: "05.06.2026 08:14", status: "Onaylandı" },
  { userId: "AGX-12594", name: "Hakan Yılmaz", amount: 4550, date: "05.06.2026 08:12", status: "Onaylandı" },
  { userId: "AGX-12312", name: "Miraç Kaplan", amount: 2300.20, date: "05.06.2026 08:11", status: "Onaylandı" },
  { userId: "AGX-12669", name: "Kürşat Uçar", amount: 3350, date: "05.06.2026 08:10", status: "Onaylandı" },
  { userId: "AGX-12371", name: "Utku Karaca", amount: 2650.99, date: "05.06.2026 07:32", status: "Onaylandı" },
  { userId: "AGX-12454", name: "Erhan Tekin", amount: 10000, date: "05.06.2026 07:17", status: "Onaylandı" },
  { userId: "AGX-12481", name: "Kürşat Uçar", amount: 17600, date: "05.06.2026 07:12", status: "Onaylandı" },
  { userId: "AGX-12241", name: "Tarık Aydın", amount: 12700, date: "05.06.2026 06:57", status: "Onaylandı" },
  { userId: "AGX-12457", name: "Caner Yıldız", amount: 20400.20, date: "05.06.2026 06:18", status: "Onaylandı" },
  { userId: "AGX-12236", name: "Eren Arslan", amount: 34000, date: "05.06.2026 05:53", status: "Onaylandı" },
  { userId: "AGX-12639", name: "Bora Ekinci", amount: 3500, date: "05.06.2026 05:02", status: "Reddedildi" },
  { userId: "AGX-12310", name: "Koray Avcı", amount: 2600, date: "05.06.2026 04:03", status: "Onaylandı" },
  { userId: "AGX-12704", name: "Eren Arslan", amount: 114500, date: "05.06.2026 02:37", status: "Onaylandı" },
  { userId: "AGX-12771", name: "Tarık Aydın", amount: 3250.65, date: "05.06.2026 02:08", status: "Onaylandı" },
  { userId: "AGX-12569", name: "Cihan Polat", amount: 23800, date: "05.06.2026 01:11", status: "Onaylandı" },
  { userId: "AGX-12572", name: "Recep Uğur", amount: 2800.20, date: "05.06.2026 00:28", status: "Onaylandı" },
  { userId: "AGX-12478", name: "Batuhan Acar", amount: 32000, date: "05.06.2026 00:05", status: "Onaylandı" },
  { userId: "AGX-12662", name: "Doğukan Şen", amount: 2850, date: "05.06.2026 00:03", status: "Reddedildi" },
  { userId: "AGX-12410", name: "Erhan Tekin", amount: 23900.80, date: "04.06.2026 23:55", status: "Onaylandı" },
  { userId: "AGX-12783", name: "Okan Bayram", amount: 34000.65, date: "04.06.2026 23:52", status: "Onaylandı" },
  { userId: "AGX-12656", name: "Cihan Ergin", amount: 2850, date: "04.06.2026 23:31", status: "Onaylandı" },
  { userId: "AGX-12415", name: "Sinan Yüce", amount: 31000, date: "04.06.2026 22:11", status: "Onaylandı" },
  { userId: "AGX-12680", name: "Yunus Baş", amount: 4850.70, date: "04.06.2026 22:01", status: "Onaylandı" },
  { userId: "AGX-12417", name: "Melih Şimşek", amount: 3150, date: "04.06.2026 21:37", status: "Onaylandı" },
  { userId: "AGX-12302", name: "Mert Demir", amount: 3200, date: "04.06.2026 21:35", status: "Onaylandı" },
  { userId: "AGX-12398", name: "Bora Ekinci", amount: 6000, date: "04.06.2026 21:34", status: "Onaylandı" },
  { userId: "AGX-12693", name: "Kamil Aksu", amount: 71500.99, date: "04.06.2026 21:32", status: "Onaylandı" },
  { userId: "AGX-12337", name: "Yunus Baş", amount: 3350, date: "04.06.2026 21:25", status: "Onaylandı" },
  { userId: "AGX-12665", name: "Atakan Ersoy", amount: 102500, date: "04.06.2026 21:17", status: "Reddedildi" },
  { userId: "AGX-12645", name: "Halil Kurt", amount: 5000, date: "04.06.2026 21:16", status: "Reddedildi" },
  { userId: "AGX-12549", name: "Oğuzhan Tekin", amount: 36000, date: "04.06.2026 21:04", status: "Onaylandı" },
  { userId: "AGX-12275", name: "Ramazan Aksoy", amount: 4000, date: "04.06.2026 20:54", status: "Onaylandı" },
  { userId: "AGX-12517", name: "Bora Ekinci", amount: 2350, date: "04.06.2026 20:54", status: "Onaylandı" },
  { userId: "AGX-12293", name: "Çağrı Er", amount: 3000, date: "04.06.2026 20:53", status: "Onaylandı" },
  { userId: "AGX-12641", name: "Bartu Sönmez", amount: 3500, date: "04.06.2026 20:45", status: "Onaylandı" },
  { userId: "AGX-12551", name: "Serhat Tan", amount: 46000, date: "04.06.2026 20:31", status: "Onaylandı" },
  { userId: "AGX-12304", name: "Yasin Eren", amount: 4200, date: "04.06.2026 20:27", status: "Onaylandı" },
  { userId: "AGX-12420", name: "Hakan Yılmaz", amount: 115500.45, date: "04.06.2026 20:27", status: "Onaylandı" },
  { userId: "AGX-12628", name: "Mehmet Ali", amount: 4200.75, date: "04.06.2026 19:44", status: "Onaylandı" },
  { userId: "AGX-12592", name: "Doğukan Şen", amount: 2400, date: "04.06.2026 19:33", status: "Reddedildi" },
  { userId: "AGX-12555", name: "Oğuzhan Tekin", amount: 24600, date: "04.06.2026 19:24", status: "Reddedildi" },
  { userId: "AGX-12413", name: "Egehan Sezer", amount: 4250, date: "04.06.2026 18:47", status: "Onaylandı" },
  { userId: "AGX-12667", name: "Burak Aydın", amount: 5000.15, date: "04.06.2026 18:41", status: "Onaylandı" },
  { userId: "AGX-12637", name: "Kürşat Uçar", amount: 3200, date: "04.06.2026 18:14", status: "Onaylandı" },
  { userId: "AGX-12621", name: "Mert Demir", amount: 3550, date: "04.06.2026 18:06", status: "Onaylandı" },
  { userId: "AGX-12491", name: "Tolga Yalçın", amount: 3400, date: "04.06.2026 18:05", status: "Onaylandı" },
  { userId: "AGX-12564", name: "Tuncay Yaman", amount: 2600, date: "04.06.2026 17:01", status: "Onaylandı" },
  { userId: "AGX-12590", name: "Miraç Kaplan", amount: 2550.70, date: "04.06.2026 16:46", status: "Reddedildi" },
  { userId: "AGX-12756", name: "Taylan Bozkurt", amount: 58000, date: "04.06.2026 16:21", status: "Onaylandı" },
  { userId: "AGX-12267", name: "İsmail Çelik", amount: 117500, date: "04.06.2026 16:08", status: "Onaylandı" },
  { userId: "AGX-12671", name: "Emirhan Kaya", amount: 5700, date: "04.06.2026 16:02", status: "Onaylandı" },
  { userId: "AGX-12303", name: "Orkun Aydın", amount: 13800, date: "04.06.2026 16:00", status: "Onaylandı" },
  { userId: "AGX-12505", name: "Metehan Oral", amount: 58000.35, date: "04.06.2026 15:59", status: "Reddedildi" },
  { userId: "AGX-12326", name: "Halil Kurt", amount: 118500, date: "04.06.2026 15:18", status: "Onaylandı" },
  { userId: "AGX-12474", name: "Anıl Korkmaz", amount: 3250, date: "04.06.2026 15:17", status: "Onaylandı" },
  { userId: "AGX-12576", name: "Orkun Aydın", amount: 2150, date: "04.06.2026 14:07", status: "Onaylandı" },
  { userId: "AGX-12288", name: "Kürşat Uçar", amount: 68500.99, date: "04.06.2026 13:57", status: "Onaylandı" },
  { userId: "AGX-12724", name: "Serkan Polat", amount: 4750, date: "04.06.2026 13:36", status: "Reddedildi" },
  { userId: "AGX-12650", name: "Burak Aydın", amount: 2450, date: "04.06.2026 13:06", status: "Onaylandı" },
  { userId: "AGX-12774", name: "Tarık Aydın", amount: 94000.99, date: "04.06.2026 12:48", status: "Onaylandı" },
  { userId: "AGX-12552", name: "Metin Güler", amount: 9200.40, date: "04.06.2026 12:30", status: "Onaylandı" },
  { userId: "AGX-12490", name: "Arda Kaplan", amount: 9700, date: "04.06.2026 12:20", status: "Onaylandı" },
  { userId: "AGX-12712", name: "Bartu Sönmez", amount: 19800.65, date: "04.06.2026 11:23", status: "Onaylandı" },
  { userId: "AGX-12466", name: "Hakan Yılmaz", amount: 2050, date: "04.06.2026 11:00", status: "Onaylandı" },
  { userId: "AGX-12785", name: "Talha Arslan", amount: 3650, date: "04.06.2026 10:30", status: "Onaylandı" },
  { userId: "AGX-12496", name: "Recep Uğur", amount: 3850, date: "04.06.2026 10:21", status: "Onaylandı" },
  { userId: "AGX-12393", name: "Batuhan Acar", amount: 117000.90, date: "04.06.2026 10:19", status: "Onaylandı" },
  { userId: "AGX-12787", name: "Hakan Yılmaz", amount: 3200.45, date: "04.06.2026 10:00", status: "Onaylandı" },
  { userId: "AGX-12788", name: "Utku Karaca", amount: 7800, date: "04.06.2026 09:53", status: "Reddedildi" },
  { userId: "AGX-12558", name: "Alp Eren", amount: 66000.50, date: "04.06.2026 09:20", status: "Onaylandı" },
  { userId: "AGX-12679", name: "Doruk Can", amount: 2450, date: "04.06.2026 09:01", status: "Onaylandı" },
  { userId: "AGX-12453", name: "Volkan Ateş", amount: 14200, date: "04.06.2026 08:58", status: "Onaylandı" },
  { userId: "AGX-12366", name: "Metin Güler", amount: 4700.65, date: "04.06.2026 08:55", status: "Onaylandı" },
  { userId: "AGX-12477", name: "Murat Efe", amount: 4500, date: "04.06.2026 08:24", status: "Onaylandı" },
  { userId: "AGX-12482", name: "Ömer Faruk", amount: 21900.45, date: "04.06.2026 08:21", status: "Onaylandı" },
  { userId: "AGX-12703", name: "Mert Demir", amount: 15600, date: "04.06.2026 08:18", status: "Onaylandı" },
  { userId: "AGX-12597", name: "Fırat Özer", amount: 8300.20, date: "04.06.2026 08:16", status: "Onaylandı" },
  { userId: "AGX-12630", name: "Ercan Durmaz", amount: 46500.70, date: "04.06.2026 08:14", status: "Onaylandı" },
  { userId: "AGX-12532", name: "Ahmet Alp", amount: 4900.70, date: "04.06.2026 07:56", status: "Onaylandı" },
  { userId: "AGX-12563", name: "Burak Aydın", amount: 12700, date: "04.06.2026 07:53", status: "Onaylandı" },
  { userId: "AGX-12565", name: "Ayhan Korkmaz", amount: 2950, date: "04.06.2026 07:28", status: "Onaylandı" },
  { userId: "AGX-12566", name: "Cihan Ergin", amount: 2200, date: "04.06.2026 07:08", status: "Reddedildi" },
  { userId: "AGX-12461", name: "Furkan Özdemir", amount: 20300, date: "04.06.2026 06:08", status: "Reddedildi" },
  { userId: "AGX-12538", name: "Tuncay Yaman", amount: 2400.80, date: "04.06.2026 05:59", status: "Reddedildi" },
  { userId: "AGX-12278", name: "Berat Şahin", amount: 3850.75, date: "04.06.2026 05:21", status: "Onaylandı" },
  { userId: "AGX-12306", name: "Tuna Başar", amount: 2150, date: "04.06.2026 04:13", status: "Onaylandı" },
  { userId: "AGX-12328", name: "İlker Taş", amount: 12200, date: "04.06.2026 03:32", status: "Onaylandı" },
  { userId: "AGX-12394", name: "Cihan Polat", amount: 27500, date: "04.06.2026 03:19", status: "Reddedildi" },
  { userId: "AGX-12352", name: "Miraç Kaplan", amount: 4000, date: "04.06.2026 03:10", status: "Onaylandı" },
  { userId: "AGX-12760", name: "İsmail Çelik", amount: 2650.15, date: "04.06.2026 02:48", status: "Onaylandı" },
  { userId: "AGX-12472", name: "Arda Kaplan", amount: 3800.90, date: "04.06.2026 02:19", status: "Reddedildi" },
  { userId: "AGX-12661", name: "Yasin Eren", amount: 3800, date: "04.06.2026 02:11", status: "Onaylandı" },
  { userId: "AGX-12342", name: "Bora Ekinci", amount: 2400, date: "04.06.2026 02:09", status: "Onaylandı" },
  { userId: "AGX-12382", name: "Eray Özkan", amount: 3300, date: "04.06.2026 02:01", status: "Onaylandı" },
  { userId: "AGX-12355", name: "Doğukan Şen", amount: 68500.40, date: "04.06.2026 01:44", status: "Onaylandı" },
  { userId: "AGX-12345", name: "Rıza Arslan", amount: 2600, date: "04.06.2026 00:43", status: "Onaylandı" },
  { userId: "AGX-12670", name: "Çağrı Er", amount: 4050, date: "03.06.2026 23:57", status: "Onaylandı" },
  { userId: "AGX-12529", name: "Cem Arıkan", amount: 3150, date: "03.06.2026 23:53", status: "Onaylandı" },
  { userId: "AGX-12458", name: "Serkan Polat", amount: 2150, date: "03.06.2026 23:28", status: "Reddedildi" },
  { userId: "AGX-12765", name: "Ahmet Alp", amount: 2950, date: "03.06.2026 22:34", status: "Onaylandı" },
  { userId: "AGX-12282", name: "Ulaş Demirci", amount: 6400.45, date: "03.06.2026 22:18", status: "Onaylandı" },
  { userId: "AGX-12575", name: "Sinan Yüce", amount: 23400, date: "03.06.2026 22:16", status: "Onaylandı" },
  { userId: "AGX-12340", name: "Caner Yıldız", amount: 10100, date: "03.06.2026 21:32", status: "Onaylandı" },
  { userId: "AGX-12409", name: "Ramazan Aksoy", amount: 53000, date: "03.06.2026 21:02", status: "Onaylandı" },
  { userId: "AGX-12731", name: "Egehan Sezer", amount: 2600, date: "03.06.2026 20:50", status: "Onaylandı" },
  { userId: "AGX-12690", name: "Yunus Baş", amount: 100500, date: "03.06.2026 20:43", status: "Onaylandı" },
  { userId: "AGX-12684", name: "Metehan Oral", amount: 68500, date: "03.06.2026 20:25", status: "Onaylandı" },
  { userId: "AGX-12675", name: "Alihan Uslu", amount: 3200, date: "03.06.2026 20:23", status: "Onaylandı" },
  { userId: "AGX-12411", name: "Umut Eren", amount: 6200.20, date: "03.06.2026 20:14", status: "Onaylandı" },
  { userId: "AGX-12579", name: "Yasin Eren", amount: 17700, date: "03.06.2026 19:31", status: "Onaylandı" },
  { userId: "AGX-12313", name: "Fırat Özer", amount: 2950, date: "03.06.2026 19:16", status: "Onaylandı" },
  { userId: "AGX-12681", name: "Selim Akın", amount: 15600, date: "03.06.2026 19:07", status: "Onaylandı" },
  { userId: "AGX-12652", name: "Efe Güney", amount: 21600, date: "03.06.2026 18:43", status: "Onaylandı" },
  { userId: "AGX-12647", name: "Furkan Özdemir", amount: 12700.90, date: "03.06.2026 18:31", status: "Onaylandı" },
  { userId: "AGX-12358", name: "Yiğit Kara", amount: 3150, date: "03.06.2026 18:26", status: "Onaylandı" },
  { userId: "AGX-12613", name: "Okan Bayram", amount: 4350, date: "03.06.2026 17:45", status: "Onaylandı" },
  { userId: "AGX-12522", name: "Samet Öztürk", amount: 4800, date: "03.06.2026 17:26", status: "Onaylandı" },
  { userId: "AGX-12514", name: "Aras Kaya", amount: 5800, date: "03.06.2026 16:47", status: "Onaylandı" },
  { userId: "AGX-12701", name: "Kürşat Uçar", amount: 2700, date: "03.06.2026 16:14", status: "Reddedildi" },
  { userId: "AGX-12659", name: "Fatih Kaplan", amount: 3900, date: "03.06.2026 15:50", status: "Onaylandı" },
  { userId: "AGX-12524", name: "Burak Aydın", amount: 16200, date: "03.06.2026 15:38", status: "Onaylandı" },
  { userId: "AGX-12778", name: "Kadir Bulut", amount: 2400, date: "03.06.2026 15:22", status: "Onaylandı" },
  { userId: "AGX-12782", name: "Baran Kurt", amount: 3700, date: "03.06.2026 15:16", status: "Reddedildi" },
  { userId: "AGX-12442", name: "Kıvanç Demir", amount: 19100, date: "03.06.2026 14:36", status: "Reddedildi" },
  { userId: "AGX-12581", name: "Baran Kurt", amount: 4300, date: "03.06.2026 14:07", status: "Onaylandı" },
  { userId: "AGX-12395", name: "Okan Bayram", amount: 4650, date: "03.06.2026 13:45", status: "Onaylandı" },
  { userId: "AGX-12368", name: "Tuna Başar", amount: 2350, date: "03.06.2026 13:41", status: "Onaylandı" },
  { userId: "AGX-12718", name: "Yunus Baş", amount: 54500, date: "03.06.2026 13:41", status: "Onaylandı" },
  { userId: "AGX-12562", name: "Baran Kurt", amount: 22500, date: "03.06.2026 13:30", status: "Onaylandı" },
  { userId: "AGX-12535", name: "Utku Karaca", amount: 19500, date: "03.06.2026 13:06", status: "Onaylandı" },
  { userId: "AGX-12487", name: "Sarp Yalçın", amount: 5700, date: "03.06.2026 13:00", status: "Onaylandı" },
  { userId: "AGX-12766", name: "Kürşat Uçar", amount: 2700, date: "03.06.2026 12:48", status: "Onaylandı" },
  { userId: "AGX-12629", name: "Oğuzhan Tekin", amount: 2500.35, date: "03.06.2026 12:46", status: "Onaylandı" },
  { userId: "AGX-12633", name: "Rüzgar Çetin", amount: 2750, date: "03.06.2026 12:05", status: "Onaylandı" },
  { userId: "AGX-12515", name: "Taylan Bozkurt", amount: 23600, date: "03.06.2026 12:00", status: "Onaylandı" },
  { userId: "AGX-12770", name: "Tuncay Yaman", amount: 2400, date: "03.06.2026 11:50", status: "Onaylandı" },
  { userId: "AGX-12720", name: "Bartu Sönmez", amount: 114000, date: "03.06.2026 11:26", status: "Reddedildi" },
  { userId: "AGX-12449", name: "Batuhan Acar", amount: 2100, date: "03.06.2026 10:56", status: "Reddedildi" },
  { userId: "AGX-12339", name: "Ramazan Aksoy", amount: 3350, date: "03.06.2026 10:42", status: "Reddedildi" },
  { userId: "AGX-12516", name: "Sinan Yüce", amount: 9300, date: "03.06.2026 10:28", status: "Onaylandı" },
  { userId: "AGX-12523", name: "Tuncay Yaman", amount: 3450, date: "03.06.2026 10:19", status: "Onaylandı" },
  { userId: "AGX-12713", name: "Fatih Kaplan", amount: 3250, date: "03.06.2026 10:17", status: "Onaylandı" },
  { userId: "AGX-12767", name: "İlker Taş", amount: 2350.45, date: "03.06.2026 10:10", status: "Onaylandı" },
  { userId: "AGX-12403", name: "Ozan Çetin", amount: 2050, date: "03.06.2026 10:07", status: "Onaylandı" },
  { userId: "AGX-12599", name: "Cemil Kılıç", amount: 4800, date: "03.06.2026 10:06", status: "Onaylandı" },
  { userId: "AGX-12758", name: "Süleyman Yıldız", amount: 15500.95, date: "03.06.2026 09:49", status: "Onaylandı" },
  { userId: "AGX-12341", name: "Metin Güler", amount: 4450, date: "03.06.2026 09:40", status: "Reddedildi" },
  { userId: "AGX-12781", name: "Metin Güler", amount: 2900.90, date: "03.06.2026 09:19", status: "Onaylandı" },
  { userId: "AGX-12499", name: "Bartu Sönmez", amount: 12500, date: "03.06.2026 09:18", status: "Onaylandı" },
  { userId: "AGX-12456", name: "Tolga Yalçın", amount: 3900.70, date: "03.06.2026 09:08", status: "Onaylandı" },
  { userId: "AGX-12655", name: "Efe Güney", amount: 4650, date: "03.06.2026 09:02", status: "Onaylandı" },
  { userId: "AGX-12646", name: "Kaan Aksoy", amount: 3350, date: "03.06.2026 08:21", status: "Onaylandı" },
  { userId: "AGX-12379", name: "Eymen Koç", amount: 17500, date: "03.06.2026 08:18", status: "Reddedildi" },
  { userId: "AGX-12738", name: "Tarık Aydın", amount: 2550.65, date: "03.06.2026 08:13", status: "Reddedildi" },
  { userId: "AGX-12531", name: "Talha Arslan", amount: 7700, date: "03.06.2026 05:36", status: "Onaylandı" },
  { userId: "AGX-12697", name: "Cihan Ergin", amount: 4150, date: "03.06.2026 05:36", status: "Onaylandı" },
  { userId: "AGX-12431", name: "Yunus Baş", amount: 3900.80, date: "03.06.2026 04:39", status: "Onaylandı" },
  { userId: "AGX-12591", name: "Serhat Tan", amount: 3250, date: "03.06.2026 04:23", status: "Onaylandı" },
  { userId: "AGX-12435", name: "Burak Aydın", amount: 6300, date: "03.06.2026 03:03", status: "Reddedildi" },
  { userId: "AGX-12666", name: "Tuna Başar", amount: 19700.50, date: "03.06.2026 02:45", status: "Onaylandı" },
  { userId: "AGX-12568", name: "Kerem Şahin", amount: 5000, date: "03.06.2026 02:07", status: "Reddedildi" },
  { userId: "AGX-12335", name: "Kerem Şahin", amount: 2850.90, date: "03.06.2026 01:40", status: "Onaylandı" },
  { userId: "AGX-12497", name: "Tuncay Yaman", amount: 2950, date: "03.06.2026 01:01", status: "Onaylandı" },
  { userId: "AGX-12440", name: "Yusuf Çelik", amount: 3300, date: "03.06.2026 00:44", status: "Onaylandı" },
  { userId: "AGX-12459", name: "Selim Akın", amount: 24400.99, date: "03.06.2026 00:18", status: "Onaylandı" },
  { userId: "AGX-12480", name: "Anıl Korkmaz", amount: 82500.80, date: "02.06.2026 23:33", status: "Onaylandı" },
  { userId: "AGX-12607", name: "Bartu Sönmez", amount: 13900, date: "02.06.2026 23:12", status: "Onaylandı" },
  { userId: "AGX-12625", name: "Yiğit Kara", amount: 10800, date: "02.06.2026 21:41", status: "Onaylandı" },
  { userId: "AGX-12485", name: "Arda Kaplan", amount: 4750, date: "02.06.2026 21:30", status: "Onaylandı" },
  { userId: "AGX-12776", name: "Rıza Arslan", amount: 3350.50, date: "02.06.2026 21:30", status: "Onaylandı" },
  { userId: "AGX-12467", name: "Baran Kurt", amount: 113000, date: "02.06.2026 20:56", status: "Onaylandı" },
  { userId: "AGX-12709", name: "Tuncay Yaman", amount: 21300.35, date: "02.06.2026 20:46", status: "Onaylandı" },
  { userId: "AGX-12418", name: "Çağrı Er", amount: 4000, date: "02.06.2026 20:22", status: "Reddedildi" },
  { userId: "AGX-12761", name: "Efe Güney", amount: 12500, date: "02.06.2026 20:02", status: "Onaylandı" },
  { userId: "AGX-12699", name: "Yasin Eren", amount: 23600, date: "02.06.2026 19:35", status: "Onaylandı" },
  { userId: "AGX-12346", name: "Doğukan Şen", amount: 4500, date: "02.06.2026 19:24", status: "Onaylandı" },
  { userId: "AGX-12327", name: "Tuncay Yaman", amount: 72000.70, date: "02.06.2026 19:22", status: "Onaylandı" },
  { userId: "AGX-12436", name: "Serkan Polat", amount: 4850, date: "02.06.2026 19:16", status: "Onaylandı" },
  { userId: "AGX-12357", name: "Levent Sarı", amount: 107500, date: "02.06.2026 19:03", status: "Onaylandı" },
  { userId: "AGX-12338", name: "Tarık Aydın", amount: 3500.40, date: "02.06.2026 18:19", status: "Onaylandı" },
  { userId: "AGX-12719", name: "Berat Şahin", amount: 3950.35, date: "02.06.2026 18:11", status: "Onaylandı" },
  { userId: "AGX-12753", name: "Yusuf Çelik", amount: 21200, date: "02.06.2026 17:57", status: "Onaylandı" },
  { userId: "AGX-12742", name: "Kuzey Yıldırım", amount: 3200, date: "02.06.2026 17:41", status: "Onaylandı" },
  { userId: "AGX-12660", name: "Recep Uğur", amount: 14200, date: "02.06.2026 17:33", status: "Onaylandı" },
  { userId: "AGX-12728", name: "Arda Kaplan", amount: 4850, date: "02.06.2026 17:00", status: "Onaylandı" },
  { userId: "AGX-12567", name: "Efe Güney", amount: 4450.90, date: "02.06.2026 16:59", status: "Onaylandı" },
  { userId: "AGX-12746", name: "Umut Eren", amount: 59000.65, date: "02.06.2026 16:33", status: "Onaylandı" },
  { userId: "AGX-12777", name: "Cemil Kılıç", amount: 10100, date: "02.06.2026 16:28", status: "Onaylandı" },
  { userId: "AGX-12749", name: "Metehan Oral", amount: 3050, date: "02.06.2026 15:49", status: "Reddedildi" },
  { userId: "AGX-12444", name: "Yasin Eren", amount: 50500, date: "02.06.2026 15:45", status: "Onaylandı" },
  { userId: "AGX-12707", name: "Fırat Özer", amount: 3750.40, date: "02.06.2026 15:14", status: "Onaylandı" },
  { userId: "AGX-12751", name: "Alperen Doğan", amount: 4850, date: "02.06.2026 15:13", status: "Onaylandı" },
  { userId: "AGX-12618", name: "Bora Keskin", amount: 4500, date: "02.06.2026 14:51", status: "Reddedildi" },
  { userId: "AGX-12390", name: "Denizhan Kılıç", amount: 4750, date: "02.06.2026 13:57", status: "Onaylandı" },
  { userId: "AGX-12735", name: "Ömer Faruk", amount: 16000, date: "02.06.2026 13:08", status: "Onaylandı" },
  { userId: "AGX-12451", name: "Denizhan Kılıç", amount: 4700, date: "02.06.2026 12:32", status: "Onaylandı" },
  { userId: "AGX-12759", name: "Koray Avcı", amount: 29500.70, date: "02.06.2026 12:27", status: "Onaylandı" },
  { userId: "AGX-12780", name: "Tuncay Yaman", amount: 2900.20, date: "02.06.2026 12:12", status: "Onaylandı" },
  { userId: "AGX-12642", name: "Cihan Polat", amount: 22900, date: "02.06.2026 12:08", status: "Onaylandı" },
  { userId: "AGX-12509", name: "Cihan Ergin", amount: 4950, date: "02.06.2026 11:48", status: "Onaylandı" },
  { userId: "AGX-12351", name: "Erhan Tekin", amount: 2350, date: "02.06.2026 10:48", status: "Reddedildi" },
  { userId: "AGX-12397", name: "Mustafa Can", amount: 3050.70, date: "02.06.2026 10:23", status: "Onaylandı" },
  { userId: "AGX-12620", name: "Ramazan Aksoy", amount: 3250, date: "02.06.2026 08:47", status: "Onaylandı" },
  { userId: "AGX-12657", name: "Rüzgar Çetin", amount: 4500.35, date: "02.06.2026 08:39", status: "Onaylandı" },
  { userId: "AGX-12691", name: "Alperen Doğan", amount: 16800, date: "02.06.2026 08:07", status: "Onaylandı" },
  { userId: "AGX-12544", name: "Taha Kuru", amount: 3950, date: "02.06.2026 06:57", status: "Onaylandı" },
  { userId: "AGX-12546", name: "Rüzgar Çetin", amount: 4150, date: "02.06.2026 06:13", status: "Onaylandı" },
  { userId: "AGX-12359", name: "Berat Şahin", amount: 2250, date: "02.06.2026 06:09", status: "Onaylandı" },
  { userId: "AGX-12484", name: "Okan Bayram", amount: 83500.20, date: "02.06.2026 05:45", status: "Onaylandı" },
  { userId: "AGX-12663", name: "Recep Uğur", amount: 4950, date: "02.06.2026 05:37", status: "Onaylandı" },
  { userId: "AGX-12631", name: "Cenk Soylu", amount: 4550.65, date: "02.06.2026 05:12", status: "Onaylandı" },
  { userId: "AGX-12526", name: "Sinan Yüce", amount: 2650.65, date: "02.06.2026 05:06", status: "Onaylandı" },
  { userId: "AGX-12468", name: "Levent Sarı", amount: 105500, date: "02.06.2026 04:58", status: "Reddedildi" },
  { userId: "AGX-12527", name: "Koray Avcı", amount: 2700, date: "02.06.2026 04:42", status: "Onaylandı" },
  { userId: "AGX-12372", name: "Alperen Doğan", amount: 48000.20, date: "02.06.2026 04:38", status: "Onaylandı" },
  { userId: "AGX-12791", name: "Gökhan Duman", amount: 4700, date: "02.06.2026 04:27", status: "Onaylandı" },
  { userId: "AGX-12793", name: "Tolga Yalçın", amount: 15900.15, date: "02.06.2026 03:56", status: "Onaylandı" },
  { userId: "AGX-12747", name: "Furkan Özdemir", amount: 3850, date: "02.06.2026 03:44", status: "Onaylandı" },
  { userId: "AGX-12636", name: "Koray Avcı", amount: 118500, date: "02.06.2026 03:31", status: "Onaylandı" },
  { userId: "AGX-12375", name: "Cem Arıkan", amount: 4850, date: "02.06.2026 03:03", status: "Reddedildi" },
  { userId: "AGX-12557", name: "Rüzgar Çetin", amount: 3750.40, date: "02.06.2026 01:55", status: "Onaylandı" },
  { userId: "AGX-12513", name: "Serkan Polat", amount: 4600, date: "02.06.2026 01:43", status: "Onaylandı" },
  { userId: "AGX-12676", name: "Alihan Uslu", amount: 2250, date: "02.06.2026 01:29", status: "Onaylandı" },
  { userId: "AGX-12494", name: "Utku Karaca", amount: 4150.70, date: "02.06.2026 01:20", status: "Onaylandı" },
  { userId: "AGX-12586", name: "Fatih Kaplan", amount: 2000, date: "02.06.2026 00:37", status: "Onaylandı" },
  { userId: "AGX-12430", name: "Batuhan Acar", amount: 3750.80, date: "02.06.2026 00:30", status: "Reddedildi" },
  { userId: "AGX-12464", name: "Anıl Korkmaz", amount: 4350.65, date: "01.06.2026 22:55", status: "Onaylandı" },
  { userId: "AGX-12536", name: "Taylan Bozkurt", amount: 4100.70, date: "01.06.2026 22:34", status: "Reddedildi" },
  { userId: "AGX-12716", name: "Ahmet Alp", amount: 62000, date: "01.06.2026 22:19", status: "Reddedildi" },
  { userId: "AGX-12404", name: "Yusuf Çelik", amount: 4150.20, date: "01.06.2026 22:17", status: "Onaylandı" },
  { userId: "AGX-12387", name: "İlker Taş", amount: 8500, date: "01.06.2026 20:11", status: "Reddedildi" },
  { userId: "AGX-12598", name: "Mehmet Ali", amount: 80500, date: "01.06.2026 20:09", status: "Onaylandı" },
  { userId: "AGX-12489", name: "Yusuf Çelik", amount: 4800, date: "01.06.2026 20:08", status: "Onaylandı" },
  { userId: "AGX-12376", name: "Okan Bayram", amount: 115000, date: "01.06.2026 20:07", status: "Reddedildi" },
  { userId: "AGX-12488", name: "İsmail Çelik", amount: 21800, date: "01.06.2026 19:47", status: "Onaylandı" },
  { userId: "AGX-12587", name: "Serkan Polat", amount: 3250, date: "01.06.2026 19:39", status: "Reddedildi" },
  { userId: "AGX-12695", name: "Gökhan Duman", amount: 10200.45, date: "01.06.2026 19:29", status: "Onaylandı" },
  { userId: "AGX-12677", name: "Sinan Yüce", amount: 2300.70, date: "01.06.2026 18:47", status: "Onaylandı" },
  { userId: "AGX-12473", name: "Emirhan Kaya", amount: 71000, date: "01.06.2026 18:45", status: "Onaylandı" },
  { userId: "AGX-12369", name: "Mustafa Can", amount: 3750.15, date: "01.06.2026 18:04", status: "Onaylandı" },
  { userId: "AGX-12604", name: "Erhan Tekin", amount: 118000.95, date: "01.06.2026 18:04", status: "Onaylandı" },
  { userId: "AGX-12739", name: "Alperen Doğan", amount: 4700.80, date: "01.06.2026 17:41", status: "Onaylandı" },
  { userId: "AGX-12750", name: "Gökhan Duman", amount: 3050, date: "01.06.2026 16:29", status: "Onaylandı" },
  { userId: "AGX-12556", name: "Kıvanç Demir", amount: 9300, date: "01.06.2026 16:23", status: "Onaylandı" },
  { userId: "AGX-12582", name: "Recep Uğur", amount: 3800, date: "01.06.2026 16:18", status: "Onaylandı" },
  { userId: "AGX-12601", name: "Yasin Eren", amount: 3600.70, date: "01.06.2026 16:11", status: "Reddedildi" },
  { userId: "AGX-12406", name: "Berat Şahin", amount: 3650.99, date: "01.06.2026 16:10", status: "Onaylandı" },
  { userId: "AGX-12638", name: "Talha Arslan", amount: 4250, date: "01.06.2026 16:10", status: "Onaylandı" },
  { userId: "AGX-12559", name: "Harun Ergin", amount: 11100, date: "01.06.2026 15:56", status: "Onaylandı" },
  { userId: "AGX-12610", name: "Ercan Durmaz", amount: 2850.15, date: "01.06.2026 15:53", status: "Reddedildi" },
  { userId: "AGX-12373", name: "Volkan Ateş", amount: 4800.95, date: "01.06.2026 15:40", status: "Onaylandı" },
  { userId: "AGX-12560", name: "Kamil Aksu", amount: 4150.70, date: "01.06.2026 15:33", status: "Onaylandı" },
  { userId: "AGX-12792", name: "Melih Şimşek", amount: 22200, date: "01.06.2026 15:07", status: "Onaylandı" },
  { userId: "AGX-12414", name: "Orkun Aydın", amount: 23500, date: "01.06.2026 15:03", status: "Onaylandı" },
  { userId: "AGX-12589", name: "Levent Sarı", amount: 14000, date: "01.06.2026 15:02", status: "Reddedildi" },
  { userId: "AGX-12399", name: "Kadir Bulut", amount: 3050, date: "01.06.2026 14:56", status: "Onaylandı" },
  { userId: "AGX-12540", name: "Talha Arslan", amount: 19300.95, date: "01.06.2026 14:32", status: "Onaylandı" },
  { userId: "AGX-12725", name: "Recep Uğur", amount: 4950.95, date: "01.06.2026 14:17", status: "Onaylandı" },
  { userId: "AGX-12550", name: "Recep Uğur", amount: 2450, date: "01.06.2026 14:04", status: "Onaylandı" },
  { userId: "AGX-12635", name: "Onur Koç", amount: 4800, date: "01.06.2026 13:40", status: "Onaylandı" },
  { userId: "AGX-12502", name: "Kuzey Yıldırım", amount: 7900, date: "01.06.2026 13:34", status: "Onaylandı" },
  { userId: "AGX-12469", name: "Batuhan Acar", amount: 9500, date: "01.06.2026 12:48", status: "Reddedildi" },
  { userId: "AGX-12504", name: "Orkun Aydın", amount: 3050, date: "01.06.2026 12:43", status: "Reddedildi" },
  { userId: "AGX-12545", name: "Arda Kaplan", amount: 3950, date: "01.06.2026 12:25", status: "Onaylandı" },
  { userId: "AGX-12757", name: "Cem Arıkan", amount: 3250, date: "01.06.2026 12:23", status: "Onaylandı" },
  { userId: "AGX-12717", name: "Taha Kuru", amount: 3900, date: "01.06.2026 12:22", status: "Reddedildi" },
  { userId: "AGX-12651", name: "Talha Arslan", amount: 15000, date: "01.06.2026 11:38", status: "Reddedildi" },
  { userId: "AGX-12547", name: "Bora Keskin", amount: 4400, date: "01.06.2026 11:29", status: "Onaylandı" },
  { userId: "AGX-12528", name: "Sarp Yalçın", amount: 7000, date: "01.06.2026 10:39", status: "Onaylandı" },
  { userId: "AGX-12634", name: "Hüseyin Ekin", amount: 9700, date: "01.06.2026 10:07", status: "Onaylandı" },
  { userId: "AGX-12574", name: "Sinan Yüce", amount: 2050, date: "01.06.2026 09:54", status: "Onaylandı" },
  { userId: "AGX-12626", name: "Hüseyin Ekin", amount: 13600, date: "01.06.2026 09:53", status: "Onaylandı" },
  { userId: "AGX-12554", name: "Kıvanç Demir", amount: 4950, date: "01.06.2026 08:33", status: "Reddedildi" }
];

let withdrawals = [
  { userId: "AGX-42000", name: "Murat Efe", amount: 15400, date: "10.06.2026 23:43", status: "Onaylandı" },
  { userId: "AGX-42002", name: "Yasin Eren", amount: 2600, date: "10.06.2026 23:19", status: "Onaylandı" },
  { userId: "AGX-42001", name: "Cenk Soylu", amount: 79500, date: "10.06.2026 23:15", status: "Onaylandı" },
  { userId: "AGX-42004", name: "Tarık Aydın", amount: 3350, date: "10.06.2026 22:28", status: "Onaylandı" },
  { userId: "AGX-42003", name: "Doruk Can", amount: 21400, date: "10.06.2026 22:19", status: "Onaylandı" },
  { userId: "AGX-42007", name: "Doğukan Şen", amount: 7500, date: "10.06.2026 22:12", status: "Onaylandı" },
  { userId: "AGX-42008", name: "Oğuzhan Tekin", amount: 4900, date: "10.06.2026 21:49", status: "Onaylandı" },
  { userId: "AGX-42006", name: "Onur Koç", amount: 88000.35, date: "10.06.2026 21:36", status: "Onaylandı" },
  { userId: "AGX-42005", name: "Harun Ergin", amount: 2750, date: "10.06.2026 21:14", status: "Bekliyor" },
  { userId: "AGX-42009", name: "Murat Efe", amount: 113000, date: "10.06.2026 21:05", status: "Reddedildi" },
  { userId: "AGX-42011", name: "Volkan Ateş", amount: 3450, date: "10.06.2026 20:49", status: "Reddedildi" },
  { userId: "AGX-42010", name: "Doruk Can", amount: 4050, date: "10.06.2026 20:26", status: "Onaylandı" },
  { userId: "AGX-42014", name: "Murat Efe", amount: 69000, date: "10.06.2026 20:25", status: "Onaylandı" },
  { userId: "AGX-42024", name: "Harun Ergin", amount: 2100, date: "10.06.2026 20:10", status: "Onaylandı" },
  { userId: "AGX-42012", name: "Taha Kuru", amount: 2600, date: "10.06.2026 20:01", status: "Onaylandı" },
  { userId: "AGX-42021", name: "Hakan Yılmaz", amount: 2600, date: "10.06.2026 19:58", status: "Onaylandı" },
  { userId: "AGX-42020", name: "Selim Akın", amount: 16300, date: "10.06.2026 19:44", status: "Onaylandı" },
  { userId: "AGX-42017", name: "Alihan Uslu", amount: 3550.15, date: "10.06.2026 19:21", status: "Reddedildi" },
  { userId: "AGX-42043", name: "Yunus Baş", amount: 4450.45, date: "10.06.2026 18:48", status: "Reddedildi" },
  { userId: "AGX-42013", name: "Hakan Yılmaz", amount: 3100.65, date: "10.06.2026 18:38", status: "Onaylandı" },
  { userId: "AGX-42028", name: "Alp Eren", amount: 5000.90, date: "10.06.2026 17:45", status: "Onaylandı" },
  { userId: "AGX-42015", name: "Okan Bayram", amount: 4100, date: "10.06.2026 17:29", status: "Onaylandı" },
  { userId: "AGX-42016", name: "Samet Öztürk", amount: 4900, date: "10.06.2026 17:04", status: "Reddedildi" },
  { userId: "AGX-42023", name: "Ulaş Demirci", amount: 3650, date: "10.06.2026 16:32", status: "Reddedildi" },
  { userId: "AGX-42042", name: "Mert Demir", amount: 4700, date: "10.06.2026 15:53", status: "Onaylandı" },
  { userId: "AGX-42037", name: "Kuzey Yıldırım", amount: 3050, date: "10.06.2026 15:36", status: "Onaylandı" },
  { userId: "AGX-42040", name: "Onur Koç", amount: 27500, date: "10.06.2026 15:35", status: "Reddedildi" },
  { userId: "AGX-42018", name: "Anıl Korkmaz", amount: 41000, date: "10.06.2026 15:33", status: "Onaylandı" },
  { userId: "AGX-42062", name: "Murat Efe", amount: 3350, date: "10.06.2026 15:30", status: "Onaylandı" },
  { userId: "AGX-42029", name: "Kıvanç Demir", amount: 22700, date: "10.06.2026 15:28", status: "Onaylandı" },
  { userId: "AGX-42019", name: "Mert Demir", amount: 3400, date: "10.06.2026 14:49", status: "Onaylandı" },
  { userId: "AGX-42034", name: "Recep Uğur", amount: 4650, date: "10.06.2026 14:35", status: "Onaylandı" },
  { userId: "AGX-42069", name: "Ahmet Alp", amount: 92000, date: "10.06.2026 14:29", status: "Onaylandı" },
  { userId: "AGX-42031", name: "Selim Akın", amount: 2600, date: "10.06.2026 14:27", status: "Onaylandı" },
  { userId: "AGX-42027", name: "İsmail Çelik", amount: 10900.20, date: "10.06.2026 14:15", status: "Onaylandı" },
  { userId: "AGX-42022", name: "Yasin Eren", amount: 108000, date: "10.06.2026 13:55", status: "Onaylandı" },
  { userId: "AGX-42039", name: "Murat Efe", amount: 50000, date: "10.06.2026 13:54", status: "Onaylandı" },
  { userId: "AGX-42087", name: "Hüseyin Ekin", amount: 4600, date: "10.06.2026 13:40", status: "Onaylandı" },
  { userId: "AGX-42033", name: "Cemil Kılıç", amount: 2800, date: "10.06.2026 13:14", status: "Onaylandı" },
  { userId: "AGX-42072", name: "Batuhan Acar", amount: 2200.95, date: "10.06.2026 12:57", status: "Onaylandı" },
  { userId: "AGX-42093", name: "Rıza Arslan", amount: 9700.95, date: "10.06.2026 12:53", status: "Onaylandı" },
  { userId: "AGX-42049", name: "Aras Kaya", amount: 2050, date: "10.06.2026 12:19", status: "Onaylandı" },
  { userId: "AGX-42046", name: "Doruk Can", amount: 2550, date: "10.06.2026 12:11", status: "Reddedildi" },
  { userId: "AGX-42047", name: "Metehan Oral", amount: 21900, date: "10.06.2026 11:52", status: "Onaylandı" },
  { userId: "AGX-42065", name: "Yasin Eren", amount: 55000.35, date: "10.06.2026 11:45", status: "Onaylandı" },
  { userId: "AGX-42036", name: "İsmail Çelik", amount: 2150, date: "10.06.2026 11:40", status: "Onaylandı" },
  { userId: "AGX-42026", name: "Egehan Sezer", amount: 47000, date: "10.06.2026 11:34", status: "Onaylandı" },
  { userId: "AGX-42044", name: "Serhat Tan", amount: 3200.65, date: "10.06.2026 11:19", status: "Onaylandı" },
  { userId: "AGX-42032", name: "Yasin Eren", amount: 19300, date: "10.06.2026 10:53", status: "Onaylandı" },
  { userId: "AGX-42025", name: "Kadir Bulut", amount: 4500.40, date: "10.06.2026 10:48", status: "Onaylandı" },
  { userId: "AGX-42071", name: "Ercan Durmaz", amount: 69500.70, date: "10.06.2026 10:40", status: "Onaylandı" },
  { userId: "AGX-42030", name: "Mehmet Ali", amount: 75000, date: "10.06.2026 10:13", status: "Onaylandı" },
  { userId: "AGX-42055", name: "Tolga Yalçın", amount: 2200, date: "10.06.2026 09:56", status: "Reddedildi" },
  { userId: "AGX-42119", name: "Levent Sarı", amount: 4300, date: "10.06.2026 09:52", status: "Reddedildi" },
  { userId: "AGX-42073", name: "Furkan Özdemir", amount: 4250, date: "10.06.2026 09:10", status: "Onaylandı" },
  { userId: "AGX-42051", name: "Kamil Aksu", amount: 6600, date: "10.06.2026 08:26", status: "Onaylandı" },
  { userId: "AGX-42053", name: "Ayhan Korkmaz", amount: 4500, date: "10.06.2026 07:46", status: "Onaylandı" },
  { userId: "AGX-42088", name: "Mustafa Can", amount: 2950, date: "10.06.2026 07:37", status: "Onaylandı" },
  { userId: "AGX-42038", name: "Tuncay Yaman", amount: 2250, date: "10.06.2026 07:12", status: "Onaylandı" },
  { userId: "AGX-42056", name: "Kamil Aksu", amount: 23000, date: "10.06.2026 06:58", status: "Onaylandı" },
  { userId: "AGX-42035", name: "Selim Akın", amount: 2700, date: "10.06.2026 06:40", status: "Onaylandı" },
  { userId: "AGX-42104", name: "Erhan Tekin", amount: 21300.90, date: "10.06.2026 06:20", status: "Onaylandı" },
  { userId: "AGX-42050", name: "Caner Yıldız", amount: 2650, date: "10.06.2026 06:08", status: "Onaylandı" },
  { userId: "AGX-42153", name: "Kamil Aksu", amount: 4450.35, date: "10.06.2026 05:50", status: "Onaylandı" },
  { userId: "AGX-42045", name: "Eray Özkan", amount: 4150, date: "10.06.2026 04:57", status: "Onaylandı" },
  { userId: "AGX-42060", name: "Caner Yıldız", amount: 2650, date: "10.06.2026 04:44", status: "Onaylandı" },
  { userId: "AGX-42169", name: "Çağrı Er", amount: 2850.40, date: "10.06.2026 04:00", status: "Onaylandı" },
  { userId: "AGX-42041", name: "Murat Efe", amount: 12300, date: "10.06.2026 03:55", status: "Onaylandı" },
  { userId: "AGX-42133", name: "Orkun Aydın", amount: 3750.15, date: "10.06.2026 03:38", status: "Onaylandı" },
  { userId: "AGX-42077", name: "İlker Taş", amount: 4550, date: "10.06.2026 03:17", status: "Onaylandı" },
  { userId: "AGX-42096", name: "Egehan Sezer", amount: 97500.45, date: "10.06.2026 02:56", status: "Onaylandı" },
  { userId: "AGX-42126", name: "Mert Demir", amount: 7600, date: "10.06.2026 02:48", status: "Onaylandı" },
  { userId: "AGX-42183", name: "Çağrı Er", amount: 3550.65, date: "10.06.2026 02:26", status: "Onaylandı" },
  { userId: "AGX-42081", name: "Bartu Sönmez", amount: 2050.35, date: "10.06.2026 02:11", status: "Onaylandı" },
  { userId: "AGX-42059", name: "Efe Güney", amount: 24200, date: "10.06.2026 02:10", status: "Reddedildi" },
  { userId: "AGX-42111", name: "Selim Akın", amount: 3950, date: "10.06.2026 01:27", status: "Onaylandı" },
  { userId: "AGX-42074", name: "Kaan Aksoy", amount: 4650, date: "10.06.2026 01:24", status: "Onaylandı" },
  { userId: "AGX-42048", name: "Kuzey Yıldırım", amount: 82500, date: "10.06.2026 01:14", status: "Onaylandı" },
  { userId: "AGX-42115", name: "Fırat Özer", amount: 107000, date: "10.06.2026 00:39", status: "Reddedildi" },
  { userId: "AGX-42118", name: "Çağrı Er", amount: 2600, date: "10.06.2026 00:02", status: "Onaylandı" },
  { userId: "AGX-42058", name: "Tolga Yalçın", amount: 2000.65, date: "09.06.2026 23:35", status: "Onaylandı" },
  { userId: "AGX-42063", name: "Cemil Kılıç", amount: 10000.75, date: "09.06.2026 23:35", status: "Onaylandı" },
  { userId: "AGX-42078", name: "Emirhan Kaya", amount: 3900, date: "09.06.2026 23:04", status: "Onaylandı" },
  { userId: "AGX-42167", name: "Miraç Kaplan", amount: 46500, date: "09.06.2026 22:37", status: "Onaylandı" },
  { userId: "AGX-42168", name: "Sinan Yüce", amount: 20900, date: "09.06.2026 22:29", status: "Onaylandı" },
  { userId: "AGX-42052", name: "Murat Efe", amount: 13500.20, date: "09.06.2026 22:27", status: "Onaylandı" },
  { userId: "AGX-42108", name: "Sarp Yalçın", amount: 3750.99, date: "09.06.2026 22:24", status: "Onaylandı" },
  { userId: "AGX-42101", name: "Caner Yıldız", amount: 3750, date: "09.06.2026 22:22", status: "Onaylandı" },
  { userId: "AGX-42080", name: "Melih Şimşek", amount: 2750.35, date: "09.06.2026 22:17", status: "Onaylandı" },
  { userId: "AGX-42219", name: "Metin Güler", amount: 4800.40, date: "09.06.2026 22:16", status: "Onaylandı" },
  { userId: "AGX-42070", name: "Gökhan Duman", amount: 8200.75, date: "09.06.2026 22:07", status: "Onaylandı" },
  { userId: "AGX-42220", name: "Ulaş Demirci", amount: 2650, date: "09.06.2026 22:02", status: "Onaylandı" },
  { userId: "AGX-42098", name: "Ozan Çetin", amount: 3900.70, date: "09.06.2026 21:38", status: "Onaylandı" },
  { userId: "AGX-42066", name: "Alihan Uslu", amount: 21900, date: "09.06.2026 21:16", status: "Onaylandı" },
  { userId: "AGX-42085", name: "Koray Avcı", amount: 81000, date: "09.06.2026 20:47", status: "Onaylandı" },
  { userId: "AGX-42162", name: "Doğukan Şen", amount: 3200.15, date: "09.06.2026 20:46", status: "Onaylandı" },
  { userId: "AGX-42202", name: "Rıza Arslan", amount: 2250, date: "09.06.2026 20:46", status: "Onaylandı" },
  { userId: "AGX-42110", name: "Çağrı Er", amount: 2500, date: "09.06.2026 20:16", status: "Onaylandı" },
  { userId: "AGX-42057", name: "Çağrı Er", amount: 24100, date: "09.06.2026 20:14", status: "Onaylandı" },
  { userId: "AGX-42151", name: "Çağrı Er", amount: 2250, date: "09.06.2026 19:55", status: "Onaylandı" },
  { userId: "AGX-42054", name: "Ayhan Korkmaz", amount: 3350, date: "09.06.2026 19:43", status: "Onaylandı" },
  { userId: "AGX-42068", name: "Fatih Kaplan", amount: 4650.95, date: "09.06.2026 19:26", status: "Onaylandı" },
  { userId: "AGX-42243", name: "Furkan Özdemir", amount: 4800, date: "09.06.2026 19:14", status: "Onaylandı" },
  { userId: "AGX-42215", name: "Serkan Polat", amount: 21400, date: "09.06.2026 19:09", status: "Onaylandı" },
  { userId: "AGX-42216", name: "Okan Bayram", amount: 25500.35, date: "09.06.2026 18:59", status: "Onaylandı" },
  { userId: "AGX-42064", name: "Oğuzhan Tekin", amount: 2450, date: "09.06.2026 18:54", status: "Onaylandı" },
  { userId: "AGX-42091", name: "Batuhan Acar", amount: 3850.15, date: "09.06.2026 18:53", status: "Onaylandı" },
  { userId: "AGX-42076", name: "Alp Eren", amount: 33000, date: "09.06.2026 18:38", status: "Onaylandı" },
  { userId: "AGX-42177", name: "Mert Demir", amount: 71000, date: "09.06.2026 18:10", status: "Onaylandı" },
  { userId: "AGX-42089", name: "Eren Arslan", amount: 3600, date: "09.06.2026 18:00", status: "Onaylandı" },
  { userId: "AGX-42090", name: "Utku Karaca", amount: 59500, date: "09.06.2026 17:48", status: "Onaylandı" },
  { userId: "AGX-42075", name: "Çağrı Er", amount: 23100.95, date: "09.06.2026 17:45", status: "Onaylandı" },
  { userId: "AGX-42259", name: "Halil Kurt", amount: 3700, date: "09.06.2026 17:36", status: "Reddedildi" },
  { userId: "AGX-42129", name: "Fatih Kaplan", amount: 21300.70, date: "09.06.2026 17:31", status: "Onaylandı" },
  { userId: "AGX-42079", name: "Cihan Polat", amount: 2500, date: "09.06.2026 17:27", status: "Onaylandı" },
  { userId: "AGX-42061", name: "İlker Taş", amount: 116000, date: "09.06.2026 17:14", status: "Reddedildi" },
  { userId: "AGX-42067", name: "Utku Karaca", amount: 2050.50, date: "09.06.2026 16:26", status: "Onaylandı" },
  { userId: "AGX-42135", name: "Yusuf Çelik", amount: 3650.20, date: "09.06.2026 16:12", status: "Onaylandı" },
  { userId: "AGX-42173", name: "Ozan Çetin", amount: 3650, date: "09.06.2026 15:52", status: "Reddedildi" },
  { userId: "AGX-42128", name: "Baran Kurt", amount: 34500, date: "09.06.2026 15:46", status: "Reddedildi" },
  { userId: "AGX-42193", name: "Efe Güney", amount: 3950, date: "09.06.2026 15:36", status: "Onaylandı" },
  { userId: "AGX-42082", name: "Tarık Aydın", amount: 3100.70, date: "09.06.2026 15:00", status: "Onaylandı" },
  { userId: "AGX-42123", name: "Alihan Uslu", amount: 19200.15, date: "09.06.2026 14:49", status: "Reddedildi" },
  { userId: "AGX-42283", name: "Mert Demir", amount: 3300, date: "09.06.2026 14:38", status: "Reddedildi" },
  { userId: "AGX-42100", name: "Eren Arslan", amount: 4500, date: "09.06.2026 14:22", status: "Reddedildi" },
  { userId: "AGX-42285", name: "Mustafa Can", amount: 2450.80, date: "09.06.2026 14:20", status: "Onaylandı" },
  { userId: "AGX-42227", name: "Alperen Doğan", amount: 33500.40, date: "09.06.2026 13:43", status: "Onaylandı" },
  { userId: "AGX-42185", name: "Tolga Yalçın", amount: 4200, date: "09.06.2026 13:41", status: "Onaylandı" },
  { userId: "AGX-42188", name: "Gökhan Duman", amount: 3950, date: "09.06.2026 13:15", status: "Onaylandı" },
  { userId: "AGX-42295", name: "Efe Güney", amount: 15400, date: "09.06.2026 13:11", status: "Onaylandı" },
  { userId: "AGX-42083", name: "Bartu Sönmez", amount: 9800, date: "09.06.2026 13:00", status: "Onaylandı" },
  { userId: "AGX-42095", name: "Alp Eren", amount: 4450, date: "09.06.2026 12:56", status: "Reddedildi" },
  { userId: "AGX-42233", name: "Burak Aydın", amount: 10100, date: "09.06.2026 12:49", status: "Onaylandı" },
  { userId: "AGX-42112", name: "Kadir Bulut", amount: 71500, date: "09.06.2026 12:20", status: "Reddedildi" },
  { userId: "AGX-42305", name: "Burak Aydın", amount: 2250, date: "09.06.2026 12:03", status: "Onaylandı" },
  { userId: "AGX-42245", name: "İlker Taş", amount: 2400, date: "09.06.2026 10:59", status: "Reddedildi" },
  { userId: "AGX-42158", name: "Selim Akın", amount: 13900, date: "09.06.2026 10:51", status: "Onaylandı" },
  { userId: "AGX-42138", name: "Yusuf Çelik", amount: 17400.40, date: "09.06.2026 10:47", status: "Onaylandı" },
  { userId: "AGX-42161", name: "Talha Arslan", amount: 2950, date: "09.06.2026 10:07", status: "Onaylandı" },
  { userId: "AGX-42141", name: "Harun Ergin", amount: 4900.65, date: "09.06.2026 10:06", status: "Onaylandı" },
  { userId: "AGX-42255", name: "Atakan Ersoy", amount: 13100, date: "09.06.2026 09:30", status: "Onaylandı" },
  { userId: "AGX-42178", name: "Ramazan Aksoy", amount: 5000, date: "09.06.2026 09:01", status: "Onaylandı" },
  { userId: "AGX-42258", name: "Eymen Koç", amount: 5500, date: "09.06.2026 08:57", status: "Onaylandı" },
  { userId: "AGX-42094", name: "Ayhan Korkmaz", amount: 7300.45, date: "09.06.2026 08:38", status: "Onaylandı" },
  { userId: "AGX-42084", name: "İsmail Çelik", amount: 7300, date: "09.06.2026 08:35", status: "Onaylandı" },
  { userId: "AGX-42102", name: "Tolga Yalçın", amount: 14900, date: "09.06.2026 08:34", status: "Onaylandı" },
  { userId: "AGX-42131", name: "Ayhan Korkmaz", amount: 4750, date: "09.06.2026 08:30", status: "Onaylandı" },
  { userId: "AGX-42196", name: "Furkan Özdemir", amount: 2850, date: "09.06.2026 08:23", status: "Onaylandı" },
  { userId: "AGX-42214", name: "Berkay Aslan", amount: 5100, date: "09.06.2026 08:21", status: "Onaylandı" },
  { userId: "AGX-42154", name: "Onur Koç", amount: 3000, date: "09.06.2026 06:34", status: "Onaylandı" },
  { userId: "AGX-42146", name: "Talha Arslan", amount: 8800, date: "09.06.2026 06:17", status: "Onaylandı" },
  { userId: "AGX-42355", name: "Melih Şimşek", amount: 77000, date: "09.06.2026 06:15", status: "Onaylandı" },
  { userId: "AGX-42226", name: "Emirhan Kaya", amount: 92500, date: "09.06.2026 06:10", status: "Onaylandı" },
  { userId: "AGX-42250", name: "Egehan Sezer", amount: 40000.20, date: "09.06.2026 06:00", status: "Onaylandı" },
  { userId: "AGX-42364", name: "Ozan Çetin", amount: 14500, date: "09.06.2026 05:15", status: "Onaylandı" },
  { userId: "AGX-42212", name: "Yunus Baş", amount: 12400, date: "09.06.2026 05:14", status: "Onaylandı" },
  { userId: "AGX-42134", name: "Eymen Koç", amount: 14600.50, date: "09.06.2026 05:11", status: "Onaylandı" },
  { userId: "AGX-42122", name: "Cihan Ergin", amount: 2150.40, date: "09.06.2026 05:03", status: "Onaylandı" },
  { userId: "AGX-42086", name: "Ulaş Demirci", amount: 6200, date: "09.06.2026 04:46", status: "Onaylandı" },
  { userId: "AGX-42099", name: "Eymen Koç", amount: 4750, date: "09.06.2026 04:46", status: "Onaylandı" },
  { userId: "AGX-42155", name: "Bora Keskin", amount: 3450, date: "09.06.2026 03:52", status: "Onaylandı" },
  { userId: "AGX-42384", name: "Hakan Yılmaz", amount: 2200, date: "09.06.2026 02:51", status: "Reddedildi" },
  { userId: "AGX-42225", name: "Yunus Baş", amount: 2000.95, date: "09.06.2026 02:44", status: "Onaylandı" },
  { userId: "AGX-42180", name: "Utku Karaca", amount: 2700, date: "09.06.2026 02:41", status: "Onaylandı" },
  { userId: "AGX-42181", name: "Serhat Tan", amount: 2600, date: "09.06.2026 02:31", status: "Reddedildi" },
  { userId: "AGX-42105", name: "Kıvanç Demir", amount: 3550, date: "09.06.2026 02:10", status: "Reddedildi" },
  { userId: "AGX-42277", name: "Cihan Ergin", amount: 3000.40, date: "09.06.2026 01:32", status: "Onaylandı" },
  { userId: "AGX-42347", name: "Yiğit Kara", amount: 3250, date: "09.06.2026 01:26", status: "Onaylandı" },
  { userId: "AGX-42256", name: "Süleyman Yıldız", amount: 4200, date: "09.06.2026 00:50", status: "Onaylandı" },
  { userId: "AGX-42404", name: "İsmail Çelik", amount: 15400.95, date: "09.06.2026 00:40", status: "Onaylandı" },
  { userId: "AGX-42142", name: "Ahmet Alp", amount: 3350, date: "09.06.2026 00:22", status: "Onaylandı" },
  { userId: "AGX-42092", name: "Çağrı Er", amount: 22000.20, date: "09.06.2026 00:04", status: "Reddedildi" },
  { userId: "AGX-42125", name: "Kerem Şahin", amount: 19200.75, date: "08.06.2026 23:44", status: "Onaylandı" },
  { userId: "AGX-42120", name: "Doğukan Şen", amount: 6300.15, date: "08.06.2026 23:42", status: "Onaylandı" },
  { userId: "AGX-42413", name: "Miraç Kaplan", amount: 20600, date: "08.06.2026 23:29", status: "Onaylandı" },
  { userId: "AGX-42322", name: "Bartu Sönmez", amount: 9700, date: "08.06.2026 23:18", status: "Onaylandı" },
  { userId: "AGX-42365", name: "Talha Arslan", amount: 4500, date: "08.06.2026 22:55", status: "Onaylandı" },
  { userId: "AGX-42109", name: "Doruk Can", amount: 11800.90, date: "08.06.2026 22:41", status: "Onaylandı" },
  { userId: "AGX-42165", name: "Fırat Özer", amount: 8400, date: "08.06.2026 22:12", status: "Onaylandı" },
  { userId: "AGX-42199", name: "Kıvanç Demir", amount: 4850, date: "08.06.2026 22:00", status: "Onaylandı" },
  { userId: "AGX-42136", name: "Eren Arslan", amount: 2050, date: "08.06.2026 21:52", status: "Onaylandı" },
  { userId: "AGX-42272", name: "Hüseyin Ekin", amount: 2750.90, date: "08.06.2026 21:43", status: "Onaylandı" },
  { userId: "AGX-42097", name: "Talha Arslan", amount: 2500.35, date: "08.06.2026 21:32", status: "Onaylandı" },
  { userId: "AGX-42274", name: "Batuhan Acar", amount: 114500, date: "08.06.2026 21:21", status: "Onaylandı" },
  { userId: "AGX-42380", name: "Burak Aydın", amount: 80000.50, date: "08.06.2026 21:00", status: "Onaylandı" },
  { userId: "AGX-42381", name: "Metin Güler", amount: 4400, date: "08.06.2026 20:53", status: "Reddedildi" },
  { userId: "AGX-42139", name: "Volkan Ateş", amount: 5300, date: "08.06.2026 20:38", status: "Onaylandı" },
  { userId: "AGX-42103", name: "Kamil Aksu", amount: 22700, date: "08.06.2026 20:13", status: "Onaylandı" },
  { userId: "AGX-42107", name: "Onur Koç", amount: 7500, date: "08.06.2026 20:05", status: "Onaylandı" },
  { userId: "AGX-42195", name: "Halil Kurt", amount: 20700, date: "08.06.2026 19:41", status: "Onaylandı" },
  { userId: "AGX-42348", name: "Metehan Oral", amount: 56500, date: "08.06.2026 19:35", status: "Onaylandı" },
  { userId: "AGX-42242", name: "Ahmet Alp", amount: 3950, date: "08.06.2026 19:21", status: "Onaylandı" },
  { userId: "AGX-42137", name: "Serkan Polat", amount: 79000, date: "08.06.2026 19:13", status: "Reddedildi" },
  { userId: "AGX-42127", name: "Ozan Çetin", amount: 2600, date: "08.06.2026 18:47", status: "Reddedildi" },
  { userId: "AGX-42318", name: "Rüzgar Çetin", amount: 3200, date: "08.06.2026 18:39", status: "Onaylandı" },
  { userId: "AGX-42152", name: "Fırat Özer", amount: 4150.75, date: "08.06.2026 18:30", status: "Reddedildi" },
  { userId: "AGX-42246", name: "Efe Güney", amount: 3200.90, date: "08.06.2026 18:24", status: "Onaylandı" },
  { userId: "AGX-42267", name: "Atakan Ersoy", amount: 61500, date: "08.06.2026 18:18", status: "Onaylandı" },
  { userId: "AGX-42270", name: "Kaan Aksoy", amount: 2750, date: "08.06.2026 17:39", status: "Onaylandı" },
  { userId: "AGX-42163", name: "Okan Bayram", amount: 3750, date: "08.06.2026 17:23", status: "Onaylandı" },
  { userId: "AGX-42408", name: "Oğuzhan Tekin", amount: 3700, date: "08.06.2026 17:16", status: "Onaylandı" },
  { userId: "AGX-42106", name: "Miraç Kaplan", amount: 2550, date: "08.06.2026 16:54", status: "Onaylandı" },
  { userId: "AGX-42414", name: "Caner Yıldız", amount: 10600.80, date: "08.06.2026 16:31", status: "Onaylandı" },
  { userId: "AGX-42369", name: "Yusuf Çelik", amount: 31500, date: "08.06.2026 16:27", status: "Onaylandı" },
  { userId: "AGX-42184", name: "Savaş Koç", amount: 2900, date: "08.06.2026 16:24", status: "Onaylandı" },
  { userId: "AGX-42187", name: "Cem Arıkan", amount: 2750, date: "08.06.2026 15:41", status: "Onaylandı" },
  { userId: "AGX-42116", name: "Ercan Durmaz", amount: 3800, date: "08.06.2026 15:34", status: "Onaylandı" },
  { userId: "AGX-42337", name: "Berat Şahin", amount: 8900, date: "08.06.2026 15:27", status: "Onaylandı" },
  { userId: "AGX-42375", name: "Egehan Sezer", amount: 10100, date: "08.06.2026 15:25", status: "Onaylandı" },
  { userId: "AGX-42114", name: "Cem Arıkan", amount: 3600, date: "08.06.2026 14:44", status: "Reddedildi" },
  { userId: "AGX-42124", name: "Rıza Arslan", amount: 4400, date: "08.06.2026 13:54", status: "Onaylandı" },
  { userId: "AGX-42269", name: "Denizhan Kılıç", amount: 22300, date: "08.06.2026 13:29", status: "Onaylandı" },
  { userId: "AGX-42113", name: "Melih Şimşek", amount: 37000, date: "08.06.2026 13:20", status: "Onaylandı" },
  { userId: "AGX-42176", name: "Taha Kuru", amount: 18600, date: "08.06.2026 13:02", status: "Onaylandı" },
  { userId: "AGX-42170", name: "Yusuf Çelik", amount: 3100, date: "08.06.2026 12:17", status: "Onaylandı" },
  { userId: "AGX-42149", name: "Umut Eren", amount: 4150.20, date: "08.06.2026 12:04", status: "Reddedildi" },
  { userId: "AGX-42298", name: "Berkay Aslan", amount: 4450, date: "08.06.2026 12:03", status: "Onaylandı" },
  { userId: "AGX-42326", name: "Alp Eren", amount: 2200, date: "08.06.2026 11:52", status: "Reddedildi" },
  { userId: "AGX-42399", name: "Okan Bayram", amount: 4000, date: "08.06.2026 11:48", status: "Reddedildi" },
  { userId: "AGX-42150", name: "Metin Güler", amount: 98000, date: "08.06.2026 11:46", status: "Onaylandı" },
  { userId: "AGX-42117", name: "Kıvanç Demir", amount: 29500.65, date: "08.06.2026 11:18", status: "Onaylandı" },
  { userId: "AGX-42145", name: "Denizhan Kılıç", amount: 2350, date: "08.06.2026 11:13", status: "Onaylandı" },
  { userId: "AGX-42281", name: "Arda Kaplan", amount: 58000, date: "08.06.2026 10:51", status: "Onaylandı" },
  { userId: "AGX-42194", name: "Talha Arslan", amount: 4750, date: "08.06.2026 10:14", status: "Reddedildi" },
  { userId: "AGX-42144", name: "Batuhan Acar", amount: 3700.20, date: "08.06.2026 09:23", status: "Onaylandı" },
  { userId: "AGX-42121", name: "Ercan Durmaz", amount: 3850.45, date: "08.06.2026 09:10", status: "Onaylandı" },
  { userId: "AGX-42147", name: "Taylan Bozkurt", amount: 2850, date: "08.06.2026 08:03", status: "Onaylandı" },
  { userId: "AGX-42182", name: "Ozan Çetin", amount: 2450, date: "08.06.2026 07:58", status: "Onaylandı" },
  { userId: "AGX-42321", name: "Sinan Yüce", amount: 4150, date: "08.06.2026 07:34", status: "Onaylandı" },
  { userId: "AGX-42130", name: "Burak Aydın", amount: 85500, date: "08.06.2026 06:46", status: "Onaylandı" },
  { userId: "AGX-42205", name: "Arda Kaplan", amount: 4400.50, date: "08.06.2026 06:46", status: "Onaylandı" },
  { userId: "AGX-42140", name: "Bartu Sönmez", amount: 37500, date: "08.06.2026 06:29", status: "Onaylandı" },
  { userId: "AGX-42159", name: "Sarp Yalçın", amount: 41500.75, date: "08.06.2026 05:30", status: "Reddedildi" },
  { userId: "AGX-42235", name: "Ozan Çetin", amount: 4650.65, date: "08.06.2026 05:11", status: "Onaylandı" },
  { userId: "AGX-42148", name: "Taylan Bozkurt", amount: 111000, date: "08.06.2026 05:10", status: "Onaylandı" },
  { userId: "AGX-42192", name: "Serhat Tan", amount: 26000.80, date: "08.06.2026 04:33", status: "Onaylandı" },
  { userId: "AGX-42203", name: "Taha Kuru", amount: 2000, date: "08.06.2026 04:02", status: "Onaylandı" },
  { userId: "AGX-42157", name: "Fırat Özer", amount: 3400, date: "08.06.2026 03:43", status: "Onaylandı" },
  { userId: "AGX-42132", name: "Eren Arslan", amount: 2350, date: "08.06.2026 03:34", status: "Reddedildi" },
  { userId: "AGX-42346", name: "Utku Karaca", amount: 13500.35, date: "08.06.2026 02:23", status: "Onaylandı" },
  { userId: "AGX-42249", name: "Selim Akın", amount: 4150.45, date: "08.06.2026 01:09", status: "Onaylandı" },
  { userId: "AGX-42237", name: "Miraç Kaplan", amount: 3400, date: "08.06.2026 00:37", status: "Onaylandı" },
  { userId: "AGX-42186", name: "Baran Kurt", amount: 2750, date: "08.06.2026 00:30", status: "Onaylandı" },
  { userId: "AGX-42143", name: "Cenk Soylu", amount: 78000, date: "08.06.2026 00:07", status: "Onaylandı" },
  { userId: "AGX-42287", name: "Efe Güney", amount: 4200, date: "07.06.2026 23:51", status: "Reddedildi" },
  { userId: "AGX-42254", name: "Anıl Korkmaz", amount: 2850, date: "07.06.2026 23:40", status: "Onaylandı" },
  { userId: "AGX-42206", name: "Umut Eren", amount: 3250, date: "07.06.2026 23:35", status: "Onaylandı" },
  { userId: "AGX-42217", name: "Ahmet Alp", amount: 2100, date: "07.06.2026 23:25", status: "Onaylandı" },
  { userId: "AGX-42396", name: "Sarp Yalçın", amount: 3800.45, date: "07.06.2026 23:01", status: "Onaylandı" },
  { userId: "AGX-42218", name: "Sinan Yüce", amount: 10900.65, date: "07.06.2026 22:57", status: "Onaylandı" },
  { userId: "AGX-42156", name: "Caner Yıldız", amount: 10000.15, date: "07.06.2026 22:56", status: "Reddedildi" },
  { userId: "AGX-42273", name: "Emirhan Kaya", amount: 2100, date: "07.06.2026 22:54", status: "Onaylandı" },
  { userId: "AGX-42366", name: "Burak Aydın", amount: 2300, date: "07.06.2026 22:27", status: "Onaylandı" },
  { userId: "AGX-42210", name: "Mert Demir", amount: 7700, date: "07.06.2026 22:17", status: "Onaylandı" },
  { userId: "AGX-42407", name: "Süleyman Yıldız", amount: 98500, date: "07.06.2026 21:05", status: "Onaylandı" },
  { userId: "AGX-42174", name: "Furkan Özdemir", amount: 2800, date: "07.06.2026 20:21", status: "Onaylandı" },
  { userId: "AGX-42197", name: "Cemil Kılıç", amount: 3000, date: "07.06.2026 20:14", status: "Onaylandı" },
  { userId: "AGX-42284", name: "Eymen Koç", amount: 15200.40, date: "07.06.2026 19:57", status: "Reddedildi" },
  { userId: "AGX-42207", name: "Batuhan Acar", amount: 17800.90, date: "07.06.2026 19:51", status: "Onaylandı" },
  { userId: "AGX-42200", name: "Bartu Sönmez", amount: 16700, date: "07.06.2026 19:00", status: "Onaylandı" },
  { userId: "AGX-42354", name: "Eren Arslan", amount: 20300.90, date: "07.06.2026 18:55", status: "Reddedildi" },
  { userId: "AGX-42257", name: "Utku Karaca", amount: 3000.70, date: "07.06.2026 18:39", status: "Onaylandı" },
  { userId: "AGX-42309", name: "Miraç Kaplan", amount: 41500, date: "07.06.2026 18:29", status: "Onaylandı" },
  { userId: "AGX-42223", name: "Emirhan Kaya", amount: 70000, date: "07.06.2026 17:40", status: "Reddedildi" },
  { userId: "AGX-42204", name: "Mert Demir", amount: 4200, date: "07.06.2026 17:31", status: "Onaylandı" },
  { userId: "AGX-42394", name: "Ahmet Alp", amount: 5000.65, date: "07.06.2026 16:58", status: "Onaylandı" },
  { userId: "AGX-42279", name: "Eymen Koç", amount: 76500, date: "07.06.2026 16:41", status: "Onaylandı" },
  { userId: "AGX-42164", name: "Yunus Baş", amount: 2850.75, date: "07.06.2026 16:31", status: "Onaylandı" },
  { userId: "AGX-42251", name: "Harun Ergin", amount: 3750, date: "07.06.2026 16:10", status: "Onaylandı" },
  { userId: "AGX-42208", name: "Taylan Bozkurt", amount: 2500.90, date: "07.06.2026 16:00", status: "Onaylandı" },
  { userId: "AGX-42160", name: "Cem Arıkan", amount: 23200, date: "07.06.2026 15:37", status: "Onaylandı" },
  { userId: "AGX-42166", name: "Yunus Baş", amount: 15600, date: "07.06.2026 15:35", status: "Onaylandı" },
  { userId: "AGX-42172", name: "Eymen Koç", amount: 4700, date: "07.06.2026 15:27", status: "Onaylandı" },
  { userId: "AGX-42323", name: "Ömer Faruk", amount: 3600, date: "07.06.2026 15:00", status: "Onaylandı" },
  { userId: "AGX-42303", name: "Süleyman Yıldız", amount: 3150, date: "07.06.2026 14:58", status: "Onaylandı" },
  { userId: "AGX-42373", name: "Efe Güney", amount: 4750, date: "07.06.2026 14:49", status: "Onaylandı" },
  { userId: "AGX-42349", name: "Süleyman Yıldız", amount: 32500, date: "07.06.2026 14:15", status: "Onaylandı" },
  { userId: "AGX-42351", name: "Mustafa Can", amount: 4450, date: "07.06.2026 13:54", status: "Onaylandı" },
  { userId: "AGX-42278", name: "Çağrı Er", amount: 14200.50, date: "07.06.2026 12:20", status: "Onaylandı" },
  { userId: "AGX-42228", name: "Cemil Kılıç", amount: 23100.70, date: "07.06.2026 11:59", status: "Onaylandı" },
  { userId: "AGX-42231", name: "Recep Uğur", amount: 4750, date: "07.06.2026 10:59", status: "Onaylandı" },
  { userId: "AGX-42171", name: "Mustafa Can", amount: 8400.75, date: "07.06.2026 10:14", status: "Onaylandı" },
  { userId: "AGX-42395", name: "Rüzgar Çetin", amount: 6300, date: "07.06.2026 10:07", status: "Onaylandı" },
  { userId: "AGX-42247", name: "Cem Arıkan", amount: 4800.99, date: "07.06.2026 09:20", status: "Onaylandı" },
  { userId: "AGX-42179", name: "Kuzey Yıldırım", amount: 3300, date: "07.06.2026 09:17", status: "Reddedildi" },
  { userId: "AGX-42248", name: "Doruk Can", amount: 3500.40, date: "07.06.2026 08:50", status: "Onaylandı" },
  { userId: "AGX-42328", name: "Yunus Baş", amount: 3500, date: "07.06.2026 08:07", status: "Onaylandı" },
  { userId: "AGX-42211", name: "Okan Bayram", amount: 3350.50, date: "07.06.2026 07:53", status: "Onaylandı" },
  { userId: "AGX-42264", name: "Umut Eren", amount: 18200.20, date: "07.06.2026 07:37", status: "Onaylandı" },
  { userId: "AGX-42312", name: "Oğuzhan Tekin", amount: 3200, date: "07.06.2026 07:22", status: "Onaylandı" },
  { userId: "AGX-42191", name: "Furkan Özdemir", amount: 3250.20, date: "07.06.2026 06:39", status: "Onaylandı" },
  { userId: "AGX-42315", name: "Doğukan Şen", amount: 9100, date: "07.06.2026 06:27", status: "Reddedildi" },
  { userId: "AGX-42175", name: "Cihan Polat", amount: 72500.90, date: "07.06.2026 05:14", status: "Reddedildi" },
  { userId: "AGX-42209", name: "Metehan Oral", amount: 5000, date: "07.06.2026 05:13", status: "Onaylandı" },
  { userId: "AGX-42201", name: "Recep Uğur", amount: 4000.95, date: "07.06.2026 05:09", status: "Onaylandı" },
  { userId: "AGX-42391", name: "Taylan Bozkurt", amount: 4200, date: "07.06.2026 04:34", status: "Onaylandı" },
  { userId: "AGX-42343", name: "Furkan Özdemir", amount: 13300, date: "07.06.2026 04:10", status: "Onaylandı" },
  { userId: "AGX-42275", name: "Yiğit Kara", amount: 2250, date: "07.06.2026 03:56", status: "Reddedildi" },
  { userId: "AGX-42252", name: "Denizhan Kılıç", amount: 9000, date: "07.06.2026 03:24", status: "Onaylandı" },
  { userId: "AGX-42222", name: "Onur Koç", amount: 4050, date: "07.06.2026 03:12", status: "Onaylandı" },
  { userId: "AGX-42293", name: "Emirhan Kaya", amount: 4750, date: "07.06.2026 02:57", status: "Onaylandı" },
  { userId: "AGX-42329", name: "Yasin Eren", amount: 9100, date: "07.06.2026 02:36", status: "Onaylandı" },
  { userId: "AGX-42294", name: "Halil Kurt", amount: 19200, date: "07.06.2026 02:29", status: "Onaylandı" },
  { userId: "AGX-42297", name: "Serhat Tan", amount: 3100, date: "07.06.2026 01:42", status: "Onaylandı" },
  { userId: "AGX-42189", name: "Serhat Tan", amount: 69500, date: "07.06.2026 01:05", status: "Onaylandı" },
  { userId: "AGX-42190", name: "Bartu Sönmez", amount: 4100, date: "07.06.2026 00:42", status: "Onaylandı" },
  { userId: "AGX-42238", name: "Caner Yıldız", amount: 79000, date: "07.06.2026 00:29", status: "Onaylandı" },
  { userId: "AGX-42239", name: "Süleyman Yıldız", amount: 3600, date: "07.06.2026 00:04", status: "Onaylandı" },
  { userId: "AGX-42221", name: "Mert Demir", amount: 4000, date: "07.06.2026 00:00", status: "Reddedildi" },
  { userId: "AGX-42288", name: "Kadir Bulut", amount: 9100.65, date: "06.06.2026 23:47", status: "Onaylandı" },
  { userId: "AGX-42232", name: "Emirhan Kaya", amount: 5800, date: "06.06.2026 23:08", status: "Onaylandı" },
  { userId: "AGX-42344", name: "Levent Sarı", amount: 99500.45, date: "06.06.2026 22:14", status: "Onaylandı" },
  { userId: "AGX-42234", name: "Emirhan Kaya", amount: 3300.75, date: "06.06.2026 22:08", status: "Onaylandı" },
  { userId: "AGX-42374", name: "Kürşat Uçar", amount: 2650, date: "06.06.2026 20:00", status: "Onaylandı" },
  { userId: "AGX-42316", name: "Doruk Can", amount: 12100, date: "06.06.2026 19:43", status: "Onaylandı" },
  { userId: "AGX-42334", name: "İsmail Çelik", amount: 2600.35, date: "06.06.2026 19:33", status: "Reddedildi" },
  { userId: "AGX-42224", name: "Miraç Kaplan", amount: 2350.35, date: "06.06.2026 18:48", status: "Onaylandı" },
  { userId: "AGX-42276", name: "Mustafa Can", amount: 3150.90, date: "06.06.2026 18:29", status: "Onaylandı" },
  { userId: "AGX-42198", name: "Kerem Şahin", amount: 4000, date: "06.06.2026 17:26", status: "Onaylandı" },
  { userId: "AGX-42280", name: "Yunus Baş", amount: 4450, date: "06.06.2026 17:05", status: "Onaylandı" },
  { userId: "AGX-42213", name: "Sinan Yüce", amount: 3050.75, date: "06.06.2026 16:48", status: "Onaylandı" },
  { userId: "AGX-42386", name: "Kürşat Uçar", amount: 10800, date: "06.06.2026 16:43", status: "Onaylandı" },
  { userId: "AGX-42260", name: "Eray Özkan", amount: 23000.80, date: "06.06.2026 15:42", status: "Onaylandı" },
  { userId: "AGX-42261", name: "Aras Kaya", amount: 2050.99, date: "06.06.2026 15:15", status: "Onaylandı" },
  { userId: "AGX-42330", name: "Tolga Yalçın", amount: 3550, date: "06.06.2026 15:07", status: "Onaylandı" },
  { userId: "AGX-42336", name: "Koray Avcı", amount: 55500, date: "06.06.2026 13:12", status: "Onaylandı" },
  { userId: "AGX-42291", name: "Kadir Bulut", amount: 4300.90, date: "06.06.2026 13:05", status: "Onaylandı" },
  { userId: "AGX-42400", name: "Cenk Soylu", amount: 3400, date: "06.06.2026 13:05", status: "Onaylandı" },
  { userId: "AGX-42307", name: "Mert Demir", amount: 3350, date: "06.06.2026 12:09", status: "Onaylandı" },
  { userId: "AGX-42282", name: "Oğuzhan Tekin", amount: 109000, date: "06.06.2026 11:32", status: "Onaylandı" },
  { userId: "AGX-42325", name: "Metehan Oral", amount: 2700, date: "06.06.2026 11:24", status: "Onaylandı" },
  { userId: "AGX-42410", name: "Savaş Koç", amount: 113000.70, date: "06.06.2026 10:24", status: "Onaylandı" },
  { userId: "AGX-42263", name: "İsmail Çelik", amount: 2700, date: "06.06.2026 10:08", status: "Onaylandı" },
  { userId: "AGX-42236", name: "Sinan Yüce", amount: 41000, date: "06.06.2026 09:32", status: "Onaylandı" },
  { userId: "AGX-42301", name: "Ramazan Aksoy", amount: 7500, date: "06.06.2026 09:22", status: "Onaylandı" },
  { userId: "AGX-42268", name: "Sinan Yüce", amount: 2300, date: "06.06.2026 08:06", status: "Onaylandı" },
  { userId: "AGX-42419", name: "Samet Öztürk", amount: 2750, date: "06.06.2026 08:02", status: "Onaylandı" },
  { userId: "AGX-42397", name: "Denizhan Kılıç", amount: 22400.35, date: "06.06.2026 07:13", status: "Onaylandı" },
  { userId: "AGX-42262", name: "Bartu Sönmez", amount: 4900, date: "06.06.2026 06:09", status: "Onaylandı" },
  { userId: "AGX-42253", name: "Kadir Bulut", amount: 2700.50, date: "06.06.2026 05:49", status: "Onaylandı" },
  { userId: "AGX-42403", name: "Eren Arslan", amount: 4700, date: "06.06.2026 05:32", status: "Reddedildi" },
  { userId: "AGX-42241", name: "Mert Demir", amount: 3450.15, date: "06.06.2026 03:20", status: "Onaylandı" },
  { userId: "AGX-42244", name: "Miraç Kaplan", amount: 4800, date: "06.06.2026 01:44", status: "Onaylandı" },
  { userId: "AGX-42338", name: "Aras Kaya", amount: 2200.65, date: "06.06.2026 01:29", status: "Onaylandı" },
  { userId: "AGX-42229", name: "Melih Şimşek", amount: 81500, date: "06.06.2026 01:28", status: "Onaylandı" },
  { userId: "AGX-42230", name: "Ahmet Alp", amount: 3200, date: "06.06.2026 00:47", status: "Onaylandı" },
  { userId: "AGX-42357", name: "Çağrı Er", amount: 2800.40, date: "06.06.2026 00:39", status: "Onaylandı" },
  { userId: "AGX-42286", name: "Kadir Bulut", amount: 4050, date: "06.06.2026 00:30", status: "Onaylandı" },
  { userId: "AGX-42300", name: "Yusuf Çelik", amount: 5000, date: "05.06.2026 23:47", status: "Onaylandı" },
  { userId: "AGX-42240", name: "Cihan Ergin", amount: 2800, date: "05.06.2026 23:46", status: "Reddedildi" },
  { userId: "AGX-42302", name: "Metin Güler", amount: 15700, date: "05.06.2026 22:47", status: "Onaylandı" },
  { userId: "AGX-42405", name: "Eren Arslan", amount: 28000.70, date: "05.06.2026 22:14", status: "Reddedildi" },
  { userId: "AGX-42333", name: "Kadir Bulut", amount: 23200, date: "05.06.2026 21:34", status: "Onaylandı" },
  { userId: "AGX-42308", name: "Kamil Aksu", amount: 7400, date: "05.06.2026 20:24", status: "Onaylandı" },
  { userId: "AGX-42313", name: "Onur Koç", amount: 4600, date: "05.06.2026 18:23", status: "Onaylandı" },
  { userId: "AGX-42359", name: "Bora Ekinci", amount: 13800, date: "05.06.2026 17:57", status: "Onaylandı" },
  { userId: "AGX-42371", name: "Ömer Faruk", amount: 4650, date: "05.06.2026 13:51", status: "Reddedildi" },
  { userId: "AGX-42289", name: "Çağrı Er", amount: 2750.50, date: "05.06.2026 13:41", status: "Onaylandı" },
  { userId: "AGX-42290", name: "Mustafa Can", amount: 4500, date: "05.06.2026 13:10", status: "Onaylandı" },
  { userId: "AGX-42393", name: "Kerem Şahin", amount: 18200, date: "05.06.2026 12:39", status: "Onaylandı" },
  { userId: "AGX-42292", name: "Doruk Can", amount: 9200, date: "05.06.2026 12:14", status: "Onaylandı" },
  { userId: "AGX-42418", name: "Alihan Uslu", amount: 2000.65, date: "05.06.2026 11:19", status: "Reddedildi" },
  { userId: "AGX-42398", name: "Selim Akın", amount: 26500.90, date: "05.06.2026 11:07", status: "Onaylandı" },
  { userId: "AGX-42332", name: "Denizhan Kılıç", amount: 21000, date: "05.06.2026 11:00", status: "Onaylandı" },
  { userId: "AGX-42266", name: "Savaş Koç", amount: 64000, date: "05.06.2026 10:49", status: "Onaylandı" },
  { userId: "AGX-42296", name: "Serkan Polat", amount: 81000, date: "05.06.2026 10:23", status: "Onaylandı" },
  { userId: "AGX-42387", name: "Eray Özkan", amount: 2400, date: "05.06.2026 08:19", status: "Onaylandı" },
  { userId: "AGX-42406", name: "Batuhan Acar", amount: 3250, date: "05.06.2026 08:18", status: "Onaylandı" },
  { userId: "AGX-42271", name: "Bartu Sönmez", amount: 82500.70, date: "05.06.2026 08:14", status: "Onaylandı" },
  { userId: "AGX-42327", name: "Gökhan Duman", amount: 2400.65, date: "05.06.2026 07:31", status: "Onaylandı" },
  { userId: "AGX-42409", name: "Kamil Aksu", amount: 3550, date: "05.06.2026 07:22", status: "Reddedildi" },
  { userId: "AGX-42341", name: "Hakan Yılmaz", amount: 15800, date: "05.06.2026 07:13", status: "Onaylandı" },
  { userId: "AGX-42265", name: "Kerem Şahin", amount: 103500, date: "05.06.2026 06:49", status: "Onaylandı" },
  { userId: "AGX-42317", name: "Cenk Soylu", amount: 3900.99, date: "05.06.2026 06:17", status: "Onaylandı" },
  { userId: "AGX-42416", name: "Metin Güler", amount: 14700, date: "05.06.2026 05:03", status: "Onaylandı" },
  { userId: "AGX-42402", name: "Fatih Kaplan", amount: 10300, date: "05.06.2026 02:57", status: "Onaylandı" },
  { userId: "AGX-42314", name: "Taylan Bozkurt", amount: 5000.45, date: "05.06.2026 02:25", status: "Reddedildi" },
  { userId: "AGX-42345", name: "Kaan Aksoy", amount: 20400, date: "04.06.2026 23:57", status: "Onaylandı" },
  { userId: "AGX-42320", name: "Taha Kuru", amount: 79500, date: "04.06.2026 23:37", status: "Onaylandı" },
  { userId: "AGX-42412", name: "Melih Şimşek", amount: 4950, date: "04.06.2026 23:30", status: "Onaylandı" },
  { userId: "AGX-42311", name: "Efe Güney", amount: 4600.20, date: "04.06.2026 22:39", status: "Onaylandı" },
  { userId: "AGX-42363", name: "Sinan Yüce", amount: 14300, date: "04.06.2026 22:27", status: "Onaylandı" },
  { userId: "AGX-42367", name: "Ayhan Korkmaz", amount: 2250.99, date: "04.06.2026 20:52", status: "Onaylandı" },
  { userId: "AGX-42340", name: "Murat Efe", amount: 2650, date: "04.06.2026 20:27", status: "Reddedildi" },
  { userId: "AGX-42299", name: "Kürşat Uçar", amount: 3050.80, date: "04.06.2026 18:08", status: "Onaylandı" },
  { userId: "AGX-42360", name: "Batuhan Acar", amount: 2600.95, date: "04.06.2026 17:43", status: "Onaylandı" },
  { userId: "AGX-42304", name: "Bartu Sönmez", amount: 2200, date: "04.06.2026 15:36", status: "Onaylandı" },
  { userId: "AGX-42306", name: "Umut Eren", amount: 20400.70, date: "04.06.2026 14:49", status: "Reddedildi" },
  { userId: "AGX-42319", name: "Serkan Polat", amount: 32500.80, date: "04.06.2026 13:29", status: "Reddedildi" },
  { userId: "AGX-42389", name: "Sarp Yalçın", amount: 2550, date: "04.06.2026 12:07", status: "Onaylandı" },
  { userId: "AGX-42324", name: "Ahmet Alp", amount: 2500, date: "04.06.2026 11:03", status: "Onaylandı" },
  { userId: "AGX-42362", name: "Kadir Bulut", amount: 2600, date: "04.06.2026 10:52", status: "Onaylandı" },
  { userId: "AGX-42350", name: "Sinan Yüce", amount: 110500, date: "04.06.2026 10:12", status: "Onaylandı" },
  { userId: "AGX-42339", name: "Kadir Bulut", amount: 4550, date: "04.06.2026 09:32", status: "Onaylandı" },
  { userId: "AGX-42382", name: "Cenk Soylu", amount: 3450, date: "04.06.2026 08:39", status: "Onaylandı" },
  { userId: "AGX-42368", name: "Orkun Aydın", amount: 2000, date: "04.06.2026 08:12", status: "Onaylandı" },
  { userId: "AGX-42310", name: "Utku Karaca", amount: 49500, date: "04.06.2026 07:29", status: "Onaylandı" },
  { userId: "AGX-42401", name: "Yunus Baş", amount: 3750.40, date: "04.06.2026 07:19", status: "Onaylandı" },
  { userId: "AGX-42335", name: "Mehmet Ali", amount: 22300, date: "04.06.2026 05:52", status: "Onaylandı" },
  { userId: "AGX-42342", name: "Doruk Can", amount: 3200, date: "04.06.2026 02:24", status: "Reddedildi" },
  { userId: "AGX-42331", name: "İsmail Çelik", amount: 23400.65, date: "04.06.2026 02:08", status: "Reddedildi" },
  { userId: "AGX-42415", name: "Rüzgar Çetin", amount: 64500, date: "04.06.2026 01:44", status: "Onaylandı" },
  { userId: "AGX-42361", name: "Serhat Tan", amount: 3500, date: "03.06.2026 23:09", status: "Onaylandı" },
  { userId: "AGX-42390", name: "Ercan Durmaz", amount: 3850.65, date: "03.06.2026 22:35", status: "Reddedildi" },
  { userId: "AGX-42352", name: "Halil Kurt", amount: 3950.20, date: "03.06.2026 21:27", status: "Onaylandı" },
  { userId: "AGX-42411", name: "Anıl Korkmaz", amount: 12200, date: "03.06.2026 20:20", status: "Onaylandı" },
  { userId: "AGX-42356", name: "Sarp Yalçın", amount: 29000, date: "03.06.2026 19:31", status: "Onaylandı" },
  { userId: "AGX-42383", name: "Doğukan Şen", amount: 4850, date: "03.06.2026 19:23", status: "Onaylandı" },
  { userId: "AGX-42370", name: "Hakan Yılmaz", amount: 4650, date: "03.06.2026 18:58", status: "Onaylandı" },
  { userId: "AGX-42385", name: "Ramazan Aksoy", amount: 16700, date: "03.06.2026 18:34", status: "Onaylandı" },
  { userId: "AGX-42377", name: "Yiğit Kara", amount: 14700.35, date: "03.06.2026 15:51", status: "Onaylandı" },
  { userId: "AGX-42353", name: "Okan Bayram", amount: 10000.90, date: "03.06.2026 15:05", status: "Onaylandı" },
  { userId: "AGX-42358", name: "Çağrı Er", amount: 2300, date: "03.06.2026 06:44", status: "Onaylandı" },
  { userId: "AGX-42372", name: "Tolga Yalçın", amount: 22100, date: "03.06.2026 05:46", status: "Onaylandı" },
  { userId: "AGX-42376", name: "Tarık Aydın", amount: 3500, date: "03.06.2026 03:39", status: "Onaylandı" },
  { userId: "AGX-42378", name: "Mert Demir", amount: 15700, date: "03.06.2026 02:35", status: "Onaylandı" },
  { userId: "AGX-42388", name: "Utku Karaca", amount: 2200, date: "02.06.2026 21:45", status: "Onaylandı" },
  { userId: "AGX-42379", name: "Çağrı Er", amount: 3750.45, date: "02.06.2026 19:53", status: "Onaylandı" },
  { userId: "AGX-42392", name: "Taha Kuru", amount: 18200, date: "02.06.2026 19:38", status: "Onaylandı" },
  { userId: "AGX-42417", name: "Çağrı Er", amount: 105000.95, date: "02.06.2026 00:09", status: "Onaylandı" }
];

let staff = [
  { name: "Elif", action: "Hesap doğrulama durumunu inceledi", date: "10.06.2026 23:46" },
  { name: "Elif", action: "Bekleyen çekimi incelemeye aldı", date: "10.06.2026 23:23" },
  { name: "Elif", action: "İşlem geçmişini kontrol etti", date: "10.06.2026 22:37" },
  { name: "Elif", action: "Hesap doğrulama durumunu inceledi", date: "10.06.2026 22:18" },
  { name: "Elif", action: "Manuel yatırım ekledi", date: "10.06.2026 21:49" },
  { name: "Elif", action: "Manuel yatırım ekledi", date: "10.06.2026 21:38" },
  { name: "Elif", action: "Yatırım kaydını doğruladı", date: "10.06.2026 21:35" },
  { name: "Elif", action: "Yatırım dekontunu kontrol etti", date: "10.06.2026 21:18" },
  { name: "Elif", action: "Kullanıcı notu ekledi", date: "10.06.2026 21:07" },
  { name: "Ayaz", action: "Çekim talebini onayladı", date: "10.06.2026 21:06" },
  { name: "Ayaz", action: "İşlem geçmişini kontrol etti", date: "10.06.2026 20:55" },
  { name: "Elif", action: "Çekim talebini reddetti", date: "10.06.2026 20:50" },
  { name: "Elif", action: "Yatırım kaydını doğruladı", date: "10.06.2026 20:48" },
  { name: "Elif", action: "Para çekim kaydını güncelledi", date: "10.06.2026 20:41" },
  { name: "Elif", action: "Çekim talebini onayladı", date: "10.06.2026 20:07" },
  { name: "Elif", action: "Yatırım kaydını doğruladı", date: "10.06.2026 20:02" },
  { name: "Elif", action: "Risk kontrolü yaptı", date: "10.06.2026 19:23" },
  { name: "Burak", action: "Yatırım dekontunu kontrol etti", date: "10.06.2026 19:13" },
  { name: "Elif", action: "Hesap doğrulama durumunu inceledi", date: "10.06.2026 19:09" },
  { name: "Elif", action: "Bekleyen çekimi incelemeye aldı", date: "10.06.2026 18:48" },
  { name: "Elif", action: "Yatırım dekontunu kontrol etti", date: "10.06.2026 18:28" },
  { name: "Elif", action: "İşlem geçmişini kontrol etti", date: "10.06.2026 18:27" },
  { name: "Elif", action: "Çekim talebini reddetti", date: "10.06.2026 17:57" },
  { name: "Ayaz", action: "Kullanıcı notu ekledi", date: "10.06.2026 17:53" },
  { name: "Ece", action: "Yatırım dekontunu kontrol etti", date: "10.06.2026 17:51" },
  { name: "Ayaz", action: "Hesap doğrulama durumunu inceledi", date: "10.06.2026 17:40" },
  { name: "Ayaz", action: "Hesap doğrulama durumunu inceledi", date: "10.06.2026 17:17" },
  { name: "Arda", action: "Kullanıcı notu ekledi", date: "10.06.2026 17:15" },
  { name: "Elif", action: "Hesap doğrulama durumunu inceledi", date: "10.06.2026 16:36" },
  { name: "Elif", action: "Risk kontrolü yaptı", date: "10.06.2026 16:05" },
  { name: "Ayaz", action: "Kullanıcı limitini güncelledi", date: "10.06.2026 15:59" },
  { name: "Elif", action: "Bekleyen çekimi incelemeye aldı", date: "10.06.2026 15:26" },
  { name: "Elif", action: "Kullanıcı limitini güncelledi", date: "10.06.2026 14:50" },
  { name: "Burak", action: "Hesap doğrulama durumunu inceledi", date: "10.06.2026 14:48" },
  { name: "Mert", action: "Para çekim kaydını güncelledi", date: "10.06.2026 14:39" },
  { name: "Seda", action: "İşlem geçmişini kontrol etti", date: "10.06.2026 12:44" },
  { name: "Cem", action: "Risk kontrolü yaptı", date: "10.06.2026 12:35" },
  { name: "Ayaz", action: "Yatırım kaydını doğruladı", date: "10.06.2026 12:25" },
  { name: "Ayaz", action: "Risk kontrolü yaptı", date: "10.06.2026 12:07" },
  { name: "Elif", action: "Kullanıcı limitini güncelledi", date: "10.06.2026 12:04" },
  { name: "Seda", action: "Risk kontrolü yaptı", date: "10.06.2026 11:54" },
  { name: "Deniz", action: "Hesap doğrulama durumunu inceledi", date: "10.06.2026 11:35" },
  { name: "Burak", action: "Hesap doğrulama durumunu inceledi", date: "10.06.2026 11:33" },
  { name: "Mert", action: "Manuel yatırım ekledi", date: "10.06.2026 11:24" },
  { name: "Deniz", action: "Yatırım dekontunu kontrol etti", date: "10.06.2026 11:08" },
  { name: "Ece", action: "Kullanıcı notu ekledi", date: "10.06.2026 09:58" },
  { name: "Ayaz", action: "Yatırım dekontunu kontrol etti", date: "10.06.2026 09:54" },
  { name: "Elif", action: "Çekim talebini onayladı", date: "10.06.2026 09:48" },
  { name: "Elif", action: "İşlem geçmişini kontrol etti", date: "10.06.2026 09:03" },
  { name: "Elif", action: "Çekim talebini onayladı", date: "10.06.2026 08:52" },
  { name: "Cem", action: "Çekim talebini reddetti", date: "10.06.2026 08:41" },
  { name: "Elif", action: "Yatırım dekontunu kontrol etti", date: "10.06.2026 07:18" },
  { name: "Elif", action: "Risk kontrolü yaptı", date: "10.06.2026 06:44" },
  { name: "Seda", action: "IBAN durumunu değiştirdi", date: "10.06.2026 04:46" },
  { name: "Ayaz", action: "Kullanıcı notu ekledi", date: "10.06.2026 04:37" },
  { name: "Seda", action: "Yatırım dekontunu kontrol etti", date: "10.06.2026 04:33" },
  { name: "Cem", action: "Kullanıcı hesabını görüntüledi", date: "10.06.2026 04:15" },
  { name: "Ayaz", action: "Çekim talebini onayladı", date: "10.06.2026 03:58" },
  { name: "Seda", action: "Bekleyen çekimi incelemeye aldı", date: "10.06.2026 03:31" },
  { name: "Mert", action: "Bekleyen çekimi incelemeye aldı", date: "10.06.2026 03:26" },
  { name: "Ayaz", action: "Manuel yatırım ekledi", date: "10.06.2026 02:12" },
  { name: "Cem", action: "Hesap doğrulama durumunu inceledi", date: "10.06.2026 02:09" },
  { name: "Ayaz", action: "Çekim talebini reddetti", date: "10.06.2026 01:32" },
  { name: "Seda", action: "Çekim talebini onayladı", date: "10.06.2026 01:27" },
  { name: "Seda", action: "Kullanıcı hesabını görüntüledi", date: "10.06.2026 01:26" },
  { name: "Seda", action: "Manuel yatırım ekledi", date: "10.06.2026 01:05" },
  { name: "Ayaz", action: "Manuel yatırım ekledi", date: "10.06.2026 00:57" },
  { name: "Ayaz", action: "Çekim talebini reddetti", date: "10.06.2026 00:52" },
  { name: "Burak", action: "Kullanıcı notu ekledi", date: "10.06.2026 00:34" },
  { name: "Seda", action: "Para çekim kaydını güncelledi", date: "10.06.2026 00:27" },
  { name: "Ece", action: "Kullanıcı hesabını görüntüledi", date: "10.06.2026 00:11" },
  { name: "Mert", action: "Çekim talebini onayladı", date: "09.06.2026 21:31" },
  { name: "Deniz", action: "Kullanıcı limitini güncelledi", date: "09.06.2026 21:23" },
  { name: "Deniz", action: "Yatırım dekontunu kontrol etti", date: "09.06.2026 21:12" },
  { name: "Mert", action: "Çekim talebini reddetti", date: "09.06.2026 19:51" },
  { name: "Burak", action: "Bekleyen çekimi incelemeye aldı", date: "09.06.2026 18:34" },
  { name: "Burak", action: "Çekim talebini onayladı", date: "09.06.2026 17:21" },
  { name: "Cem", action: "Kullanıcı notu ekledi", date: "09.06.2026 16:40" },
  { name: "Mert", action: "Yatırım kaydını doğruladı", date: "09.06.2026 16:26" },
  { name: "Burak", action: "Yatırım kaydını doğruladı", date: "09.06.2026 14:57" },
  { name: "Ece", action: "IBAN durumunu değiştirdi", date: "09.06.2026 14:45" },
  { name: "Seda", action: "Çekim talebini reddetti", date: "09.06.2026 14:29" },
  { name: "Ece", action: "Bekleyen çekimi incelemeye aldı", date: "09.06.2026 12:11" },
  { name: "Deniz", action: "IBAN durumunu değiştirdi", date: "09.06.2026 10:54" },
  { name: "Arda", action: "Çekim talebini onayladı", date: "09.06.2026 10:03" },
  { name: "Seda", action: "Risk kontrolü yaptı", date: "09.06.2026 08:32" },
  { name: "Deniz", action: "Yatırım dekontunu kontrol etti", date: "09.06.2026 07:29" },
  { name: "Seda", action: "Çekim talebini onayladı", date: "09.06.2026 06:36" },
  { name: "Kaan", action: "Risk kontrolü yaptı", date: "09.06.2026 06:33" },
  { name: "Burak", action: "IBAN durumunu değiştirdi", date: "09.06.2026 06:31" },
  { name: "Burak", action: "İşlem geçmişini kontrol etti", date: "09.06.2026 06:25" },
  { name: "Ece", action: "Yatırım dekontunu kontrol etti", date: "09.06.2026 05:36" },
  { name: "Burak", action: "Para çekim kaydını güncelledi", date: "09.06.2026 04:25" },
  { name: "Kaan", action: "Kullanıcı limitini güncelledi", date: "09.06.2026 01:27" },
  { name: "Ece", action: "Çekim talebini onayladı", date: "09.06.2026 00:50" },
  { name: "Arda", action: "Yatırım dekontunu kontrol etti", date: "09.06.2026 00:47" },
  { name: "Deniz", action: "Çekim talebini reddetti", date: "08.06.2026 22:36" },
  { name: "Deniz", action: "Risk kontrolü yaptı", date: "08.06.2026 17:59" },
  { name: "Kaan", action: "Kullanıcı notu ekledi", date: "08.06.2026 12:41" },
  { name: "Kaan", action: "IBAN durumunu değiştirdi", date: "08.06.2026 12:17" }
];

function saveRuntimeData() {
  localStorage.setItem("agentixInvestments", JSON.stringify(investments));
  localStorage.setItem("agentixWithdrawals", JSON.stringify(withdrawals));
  localStorage.setItem("agentixStaff", JSON.stringify(staff));
}

function loadRuntimeData() {
  const savedInvestments = localStorage.getItem("agentixInvestments");
  const savedWithdrawals = localStorage.getItem("agentixWithdrawals");
  const savedStaff = localStorage.getItem("agentixStaff");

  if (savedInvestments) {
    investments = JSON.parse(savedInvestments);
  }

  if (savedWithdrawals) {
    withdrawals = JSON.parse(savedWithdrawals);
  }

  if (savedStaff) {
    staff = JSON.parse(savedStaff);
  }
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const loginError = document.getElementById("loginError");

  if (username !== "bozo" || password !== "bozo013455") {
    loginError.classList.remove("hidden");
    return;
  }

  loginError.classList.add("hidden");
  localStorage.setItem("agentixLoggedIn", "true");

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  setReadonlyMode();
  renderAll();


const liveNames = [
  "Emirhan Kaya", "Mert Demir", "Caner Yıldız", "Burak Aydın", "Kerem Şahin",
  "Onur Koç", "Eren Arslan", "Yusuf Çelik", "Furkan Özdemir", "Kaan Aksoy",
  "Alperen Doğan", "Tolga Yalçın", "Baran Kurt", "Serkan Polat", "Umut Eren",
  "Oğuzhan Tekin", "Arda Kaplan", "Bora Keskin", "Yiğit Kara", "Berkay Aslan",
  "Hakan Yılmaz", "Samet Öztürk", "Batuhan Acar", "Anıl Korkmaz", "Doruk Can",
  "Murat Efe", "Cem Arıkan", "Tuna Başar", "Egehan Sezer", "Kadir Bulut"
];

let liveUserIdCounter = 90000;

const liveStaffNames = ["Burak", "Seda", "Elif", "Ayaz", "Cem", "Mert", "Deniz", "Ece", "Kaan", "Arda"];

function createStaffLogForTransaction(type, status) {
  const staffName = randomItem(liveStaffNames);

  let action;

  if (type === "investment") {
    if (status === "Onaylandı") {
      action = randomItem([
        "Manuel yatırım ekledi",
        "Yatırım kaydını doğruladı",
        "Yatırım dekontunu kontrol etti"
      ]);
    } else if (status === "Reddedildi") {
      action = randomItem([
        "Yatırım işlemini reddetti",
        "Hatalı yatırım kaydını kontrol etti"
      ]);
    } else {
      action = randomItem([
        "Bekleyen yatırımı incelemeye aldı",
        "Yatırım kaydını kontrol ediyor"
      ]);
    }
  } else {
    if (status === "Onaylandı") {
      action = randomItem([
        "Çekim işlemini onayladı",
        "Çekim talebini tamamladı",
        "IBAN durumunu değiştirdi"
      ]);
    } else if (status === "Reddedildi") {
      action = randomItem([
        "Çekim işlemini reddetti",
        "IBAN uyuşmazlığı nedeniyle çekimi reddetti"
      ]);
    } else {
      action = randomItem([
        "Bekleyen çekimi incelemeye aldı",
        "Çekim talebini kontrol ediyor"
      ]);
    }
  }

  staff.unshift({
    name: staffName,
    action,
    date: nowDateText()
  });
}


function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomLiveAmount() {
  const r = Math.random();
  let amount;

  if (r < 0.60) {
    amount = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
  } else if (r < 0.85) {
    amount = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
  } else {
    amount = Math.floor(Math.random() * (120000 - 25000 + 1)) + 25000;
  }

  // Yaklaşık %30 işlem kuruşlu olsun
  if (Math.random() < 0.30) {
    const cents = randomItem([15, 20, 35, 40, 45, 50, 65, 70, 75, 80, 90, 95, 99]);
    amount = Number(`${amount}.${cents}`);
  }

  return amount;
}

function randomLiveStatus() {
  return "Bekliyor";
}

function randomFinalStatus() {
  // Bekleyen işlem sonradan çoğunlukla onaylanır, bazen reddedilir
  return Math.random() < 0.82 ? "Onaylandı" : "Reddedildi";
}

function nowDateText() {
  const now = new Date();

  const date = now.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  const time = now.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return `${date} ${time}`;
}

function createLiveTransaction() {
  const type = Math.random() < 0.58 ? "investment" : "withdrawal";

  const newItem = {
    userId: `AGX-${liveUserIdCounter++}`,
    name: randomItem(liveNames),
    amount: randomLiveAmount(),
    date: nowDateText(),
    status: "Bekliyor"
  };

  if (type === "investment") {
    investments.unshift(newItem);
  } else {
    withdrawals.unshift(newItem);
  }

  createStaffLogForTransaction(type, "Bekliyor");
  saveRuntimeData();
  renderAll();

  // İşlem önce beklemede görünür, sonra 20-60 saniye arasında onay/red alır
  const decisionDelay = Math.floor(Math.random() * (60000 - 20000 + 1)) + 20000;

  setTimeout(() => {
    newItem.status = randomFinalStatus();
    createStaffLogForTransaction(type, newItem.status);
    saveRuntimeData();
    renderAll();
  }, decisionDelay);
}

function scheduleNextLiveTransaction() {
  // 30 saniye ile 60 saniye arasında rastgele yeni işlem düşürür
  const delay = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;

  setTimeout(() => {
    const appVisible = !document.getElementById("app").classList.contains("hidden");

    if (appVisible) {
      createLiveTransaction();
    }

    scheduleNextLiveTransaction();
  }, delay);
}

scheduleNextLiveTransaction();

}

function logout() {
  localStorage.removeItem("agentixLoggedIn");
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
  return "₺" + Number(amount).toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
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
      <td>${item.action}</td>
      <td>${item.date}</td>
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
  const uniqueStaffCount = new Set(staff.map(item => item.name)).size;
  document.getElementById("staffCount").textContent = uniqueStaffCount;

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

loadRuntimeData();
renderAll();

function checkSavedSession() {
  const isLoggedIn = localStorage.getItem("agentixLoggedIn") === "true";

  if (isLoggedIn) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    loadRuntimeData();
    setReadonlyMode();
    renderAll();
  }
}

checkSavedSession();
