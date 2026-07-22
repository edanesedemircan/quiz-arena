export interface Question {
  id: string;
  question: string;
  category: string;
  difficulty: 'kolay' | 'orta' | 'zor';
  options: string[];
  correctAnswer: string;
}

export const QUESTIONS_DATABASE: Question[] = [
  // ==================== KOLAY SEVİYE ====================
  {
    id: 'k1',
    question: 'Hababam Sınıfı filminde "Güdük Necmi" karakterini canlandıran usta oyuncumuz kimdir?',
    category: 'Yeşilçam',
    difficulty: 'kolay',
    options: ['Halit Akçatepe', 'Kemal Sunal', 'Tarık Akan', 'Münir Özkul'],
    correctAnswer: 'Halit Akçatepe'
  },
  {
    id: 'k2',
    question: 'Türkiye\'nin başkenti neresidir?',
    category: 'Coğrafya',
    difficulty: 'kolay',
    options: ['İstanbul', 'Ankara', 'İzmir', 'Bursa'],
    correctAnswer: 'Ankara'
  },
  {
    id: 'k3',
    question: 'Mantısı ile ünlü olan ve 1 kaşığa 40 tane sığmasıyla bilinen ilimiz hangisidir?',
    category: 'Mutfak',
    difficulty: 'kolay',
    options: ['Kayseri', 'Adana', 'Gaziantep', 'Bursa'],
    correctAnswer: 'Kayseri'
  },
  {
    id: 'k4',
    question: 'İstiklal Marşı\'mızın yazarı kimdir?',
    category: 'Edebiyat',
    difficulty: 'kolay',
    options: ['Mehmet Akif Ersoy', 'Ziya Gökalp', 'Yahya Kemal', 'Nazım Hikmet'],
    correctAnswer: 'Mehmet Akif Ersoy'
  },
  {
    id: 'k5',
    question: 'Türkiye\'nin en yüksek dağı hangisidir?',
    category: 'Coğrafya',
    difficulty: 'kolay',
    options: ['Ağrı Dağı', 'Erciyes Dağı', 'Palandöken Dağı', 'Uludağ'],
    correctAnswer: 'Ağrı Dağı'
  },
  {
    id: 'k6',
    question: 'Güneş Sistemimizdeki en büyük gezegen hangisidir?',
    category: 'Bilim',
    difficulty: 'kolay',
    options: ['Mars', 'Jüpiter', 'Satürn', 'Dünya'],
    correctAnswer: 'Jüpiter'
  },
  {
    id: 'k7',
    question: 'Suyun kimyasal formülü nedir?',
    category: 'Bilim',
    difficulty: 'kolay',
    options: ['H2O', 'CO2', 'NaCl', 'O2'],
    correctAnswer: 'H2O'
  },
  {
    id: 'k8',
    question: 'Türkiye Cumhuriyeti hangi yılda kurulmuştur?',
    category: 'Tarih',
    difficulty: 'kolay',
    options: ['1920', '1921', '1922', '1923'],
    correctAnswer: '1923'
  },
  {
    "id": "k9",
    "question": "Dünyaca ünlü 'Mona Lisa' tablosu kime aittir?",
    "category": "Sanat",
    "difficulty": "kolay",
    "options": ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Salvador Dali"],
    "correctAnswer": "Leonardo da Vinci"
  },
  {
    "id": "k10",
    "question": "Bir futbol maçında sahada toplam kaç oyuncu bulunur?",
    "category": "Spor",
    "difficulty": "kolay",
    "options": ["18", "20", "22", "24"],
    "correctAnswer": "22"
  },
  {
    "id": "k11",
    "question": "Karadeniz bölgesine özgü meşhur halk dansı hangisidir?",
    "category": "Kültür",
    "difficulty": "kolay",
    "options": ["Zeybek", "Halay", "Horon", "Bar"],
    "correctAnswer": "Horon"
  },
  {
    "id": "k12",
    "question": "İnsan vücudundaki en büyük organ hangisidir?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["Karaciğer", "Cilt (Deri)", "Akciğer", "Kalp"],
    "correctAnswer": "Cilt (Deri)"
  },
  {
    "id": "k13",
    "question": "Hangisi kış mevsimi aylarından biridir?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["Eylül", "Kasım", "Ocak", "Nisan"],
    "correctAnswer": "Ocak"
  },
  {
    "id": "k14",
    "question": "Santigrat ölçeğinde su deniz seviyesinde kaç derecede kaynar?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["80", "100", "120", "150"],
    "correctAnswer": "100"
  },
  {
    "id": "k15",
    "question": "Hangisi ana renklerden biri değildir?",
    "category": "Sanat",
    "difficulty": "kolay",
    "options": ["Kırmızı", "Mavi", "Sarı", "Yeşil"],
    "correctAnswer": "Yeşil"
  },
  {
    "id": "k16",
    "question": "Türk bayrağında hangi iki sembol yer alır?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["Güneş ve Yıldız", "Hilal ve Yıldız", "Kartal ve Yıldız", "Başak ve Hilal"],
    "correctAnswer": "Hilal ve Yıldız"
  },
  {
    "id": "k17",
    "question": "Mıknatıs hangi maddeyi çeker?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["Demir", "Plastik", "Tahta", "Cam"],
    "correctAnswer": "Demir"
  },
  {
    "id": "k18",
    "question": "Türkiye'nin üç tarafı neyle çevrilidir?",
    "category": "Coğrafya",
    "difficulty": "kolay",
    "options": ["Dağlarla", "Denizlerle", "Ormanlarla", "Ovalarla"],
    "correctAnswer": "Denizlerle"
  },
  {
    "id": "k19",
    "question": "Tavşanın en sevdiği yiyecek olarak bilinen sebze hangisidir?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["Patates", "Havuç", "Salatalık", "Biber"],
    "correctAnswer": "Havuç"
  },
  {
    "id": "k20",
    "question": "Bir yıl kaç mevsimden oluşur?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["2", "4", "6", "12"],
    "correctAnswer": "4"
  },
  {
    "id": "k21",
    "question": "Hangisi bir sürüngen türüdür?",
    "category": "Doğa",
    "difficulty": "kolay",
    "options": ["Güvercin", "Yılan", "Balina", "Kedi"],
    "correctAnswer": "Yılan"
  },
  {
    "id": "k22",
    "question": "Telefonu icat eden bilim insanı kimdir?",
    "category": "Tarih",
    "difficulty": "kolay",
    "options": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Isaac Newton"],
    "correctAnswer": "Alexander Graham Bell"
  },
  {
    "id": "k23",
    "question": "Dünyamızın tek doğal uydusu hangisidir?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["Güneş", "Ay", "Mars", "Venüs"],
    "correctAnswer": "Ay"
  },
  {
    "id": "k24",
    "question": "Trafik lambasında 'dur' anlamına gelen renk hangisidir?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["Kırmızı", "Sarı", "Yeşil", "Mavi"],
    "correctAnswer": "Kırmızı"
  },
  {
    "id": "k25",
    "question": "Arıların ürettiği tatlı besin maddesi nedir?",
    "category": "Doğa",
    "difficulty": "kolay",
    "options": ["Reçel", "Bal", "Pekmez", "Çikolata"],
    "correctAnswer": "Bal"
  },
  {
    "id": "k26",
    "question": "Geometride üç köşesi ve üç kenarı olan şekle ne denir?",
    "category": "Matematik",
    "difficulty": "kolay",
    "options": ["Kare", "Dikdörtgen", "Üçgen", "Daire"],
    "correctAnswer": "Üçgen"
  },
  {
    "id": "k27",
    "question": "Türk Lirası'nın simgesi nedir?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["$", "€", "£", "₺"],
    "correctAnswer": "₺"
  },
  {
    "id": "k28",
    "question": "Pusulanın renkli ucu her zaman hangi yönü gösterir?",
    "category": "Coğrafya",
    "difficulty": "kolay",
    "options": ["Kuzey", "Güney", "Doğu", "Batı"],
    "correctAnswer": "Kuzey"
  },
  {
    "id": "k29",
    "question": "Hangisi uçabilen bir memeli hayvandır?",
    "category": "Doğa",
    "difficulty": "kolay",
    "options": ["Kartal", "Yarasa", "Leylek", "Sinekuşu"],
    "correctAnswer": "Yarasa"
  },
  {
    "id": "k30",
    "question": "Çanakkale Boğazı hangi iki denizi birbirine bağlar?",
    "category": "Coğrafya",
    "difficulty": "kolay",
    "options": ["Marmara - Ege", "Karadeniz - Marmara", "Akdeniz - Ege", "Kızıldeniz - Akdeniz"],
    "correctAnswer": "Marmara - Ege"
  },
  {
    "id": "k31",
    "question": "Satranç oyununda en önemli ve korunması gereken taş hangisidir?",
    "category": "Oyun",
    "difficulty": "kolay",
    "options": ["Vezir", "Kale", "Şah", "At"],
    "correctAnswer": "Şah"
  },
  {
    "id": "k32",
    "question": "Hangi organımız kanı tüm vücuda pompalar?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["Beyin", "Kalp", "Mide", "Böbrek"],
    "correctAnswer": "Kalp"
  },
  {
    "id": "k33",
    "question": "Basketbolda bir takım sahada kaç oyuncu ile mücadele eder?",
    "category": "Spor",
    "difficulty": "kolay",
    "options": ["4", "5", "6", "7"],
    "correctAnswer": "5"
  },
  {
    "id": "k34",
    "question": "Hangisi geleneksel bir Türk tatlısıdır?",
    "category": "Kültür",
    "difficulty": "kolay",
    "options": ["Tiramisu", "Baklava", "Cheesecake", "Kruvasan"],
    "correctAnswer": "Baklava"
  },
  {
    "id": "k35",
    "question": "Dünyanın en kalabalık ülkesi hangisidir?",
    "category": "Coğrafya",
    "difficulty": "kolay",
    "options": ["Hindistan", "ABD", "Brezilya", "Rusya"],
    "correctAnswer": "Hindistan"
  },
  {
    "id": "k36",
    "question": "İstiklal Marşı toplam kaç kıtadan oluşur?",
    "category": "Edebiyat",
    "difficulty": "kolay",
    "options": ["8", "10", "12", "14"],
    "correctAnswer": "10"
  },
  {
    "id": "k37",
    "question": "Gökyüzünün mavi görünmesinin temel sebebi nedir?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["Güneş ışığının atmosferde saçılması", "Denizlerin yansıması", "Bulutların rengi", "Ozon tabakası"],
    "correctAnswer": "Güneş ışığının atmosferde saçılması"
  },
  {
    "id": "k38",
    "question": "Türkiye'nin en büyük adası hangisidir?",
    "category": "Coğrafya",
    "difficulty": "kolay",
    "options": ["Gökçeada", "Bozcaada", "Büyükada", "Cunda"],
    "correctAnswer": "Gökçeada"
  },
  {
    "id": "k39",
    "question": "Hangi gezegen Güneş'e en yakındır?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["Merkür", "Venüs", "Dünya", "Mars"],
    "correctAnswer": "Merkür"
  },
  {
    "id": "k40",
    "question": "Futbolda kalecinin ceza sahası dışında elle oynamasının cezası nedir?",
    "category": "Spor",
    "difficulty": "kolay",
    "options": ["Korner", "Serbest Vuruş (Faul)", "Taç", "Penaltı"],
    "correctAnswer": "Serbest Vuruş (Faul)"
  },
  {
    "id": "k41",
    "question": "Hangisi botanik açıdan meyve kabul edilir?",
    "category": "Doğa",
    "difficulty": "kolay",
    "options": ["Ispanak", "Pırasa", "Domates", "Havuç"],
    "correctAnswer": "Domates"
  },
  {
    "id": "k42",
    "question": "Dünyanın en yüksek dağı hangisidir?",
    "category": "Coğrafya",
    "difficulty": "kolay",
    "options": ["Everest", "K2", "Kilimanjaro", "Mont Blanc"],
    "correctAnswer": "Everest"
  },
  {
    "id": "k43",
    "question": "Hangisi sıvı bir maddedir?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["Tahta", "Süt", "Buz", "Demir"],
    "correctAnswer": "Süt"
  },
  {
    "id": "k44",
    "question": "Trafik ışıklarında 'geç' anlamına gelen renk hangisidir?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["Kırmızı", "Sarı", "Yeşil", "Mavi"],
    "correctAnswer": "Yeşil"
  },
  {
    "id": "k45",
    "question": "Bitkilerin besin üretmek için güneş ışığını kullanması işlemine ne denir?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["Solunum", "Fotosentez", "Terleme", "Büyüme"],
    "correctAnswer": "Fotosentez"
  },
  {
    "id": "k46",
    "question": "Hangi hayvan kış uykusuna yatmasıyla bilinir?",
    "category": "Doğa",
    "difficulty": "kolay",
    "options": ["Ayı", "Kurt", "Tavşan", "Geyik"],
    "correctAnswer": "Ayı"
  },
  {
    "id": "k47",
    "question": "Bir gün kaç saatten oluşur?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["12", "24", "48", "60"],
    "correctAnswer": "24"
  },
  {
    "id": "k48",
    "question": "Bilgisayarda yazıları ve resimleri kağıda basan cihaz hangisidir?",
    "category": "Teknoloji",
    "difficulty": "kolay",
    "options": ["Tarayıcı", "Yazıcı (Printer)", "Monitör", "Klavye"],
    "correctAnswer": "Yazıcı (Printer)"
  },
  {
    "id": "k49",
    "question": "Türk mutfağının ünlü içeceği ayran neyden yapılır?",
    "category": "Kültür",
    "difficulty": "kolay",
    "options": ["Yoğurt ve Su", "Süt ve Şeker", "Peynir ve Su", "Maya ve Su"],
    "correctAnswer": "Yoğurt ve Su"
  },
  {
    "id": "k50",
    "question": "Geometride tüm kenarları eşit olan dörtgene ne denir?",
    "category": "Matematik",
    "difficulty": "kolay",
    "options": ["Dikdörtgen", "Kare", "Paralelkenar", "Yamuk"],
    "correctAnswer": "Kare"
  },
  {
    "id": "k51",
    "question": "İnsan kulağı ne işe yarar?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["Görmeye", "İşitmeye", "Koklamaya", "Tat almaya"],
    "correctAnswer": "İşitmeye"
  },
  {
    "id": "k52",
    "question": "'Pamuk Prenses' masalındaki cücelerin sayısı kaçtır?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["5", "7", "10", "12"],
    "correctAnswer": "7"
  },
  {
    "id": "k53",
    "question": "Türkiye'nin en uzun kıyısına sahip olduğu deniz hangisidir?",
    "category": "Coğrafya",
    "difficulty": "kolay",
    "options": ["Karadeniz", "Akdeniz", "Ege", "Marmara"],
    "correctAnswer": "Karadeniz"
  },
  {
    "id": "k54",
    "question": "Hangi mevsimde yapraklar sararır ve dökülür?",
    "category": "Doğa",
    "difficulty": "kolay",
    "options": ["İlkbahar", "Yaz", "Sonbahar", "Kış"],
    "correctAnswer": "Sonbahar"
  },
  {
    "id": "k55",
    "question": "Bir saat kaç dakikadır?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["30", "60", "90", "100"],
    "correctAnswer": "60"
  },
  {
    "id": "k56",
    "question": "Türkiye Cumhuriyeti'nin kurucusu kimdir?",
    "category": "Tarih",
    "difficulty": "kolay",
    "options": ["Mustafa Kemal Atatürk", "İsmet İnönü", "Fevzi Çakmak", "Kazım Karabekir"],
    "correctAnswer": "Mustafa Kemal Atatürk"
  },
  {
    "id": "k57",
    "question": "Üç büyük din için de kutsal kabul edilen şehir hangisidir?",
    "category": "Genel Kültür",
    "difficulty": "kolay",
    "options": ["Roma", "Atina", "Kudüs", "Kahire"],
    "correctAnswer": "Kudüs"
  },
  {
    "id": "k58",
    "question": "Gece gökyüzünü aydınlatan doğal ışık kaynağı hangisidir?",
    "category": "Bilim",
    "difficulty": "kolay",
    "options": ["Güneş", "Ay", "Fener", "Ampul"],
    "correctAnswer": "Ay"
  },
  {
    "id": "k59",
    "question": "Arıların yaşadığı ve bal depoladığı yapıya ne denir?",
    "category": "Doğa",
    "difficulty": "kolay",
    "options": ["Yuva", "Petek (Kovan)", "Mağara", "Ağaç"],
    "correctAnswer": "Petek (Kovan)"
  },
  {
    "id": "k60",
    "question": "Gökyüzünde yağmurdan sonra çıkan rengarenk kemere ne denir?",
    "category": "Doğa",
    "difficulty": "kolay",
    "options": ["Gökkuşağı", "Bulut", "Yıldız Kayması", "Şimşek"],
    "correctAnswer": "Gökkuşağı"
  },
  {
    "id": "k61",
    "question": "Türkiye'nin plaka kodu '01' olan ili hangisidir?",
    "category": "Coğrafya",
    "difficulty": "kolay",
    "options": ["Adana", "Adıyaman", "Ankara", "Antalya"],
    "correctAnswer": "Adana"
  },
  {
    "id": "k62",
    "question": "Hangisi nesli tükenmiş bir hayvandır?",
    "category": "Doğa",
    "difficulty": "kolay",
    "options": ["Fil", "Dinozor", "Zürafa", "Timsah"],
    "correctAnswer": "Dinozor"
  },
  {
    "id": "k63",
    "question": "Futbolda topun kale çizgisini tamamen geçmesiyle ne kazanılır?",
    "category": "Spor",
    "difficulty": "kolay",
    "options": ["Aut", "Gol", "Korner", "Taç"],
    "correctAnswer": "Gol"
  },
  {
    "id": "k64",
    "question": "Güneş nereden doğar?",
    "category": "Coğrafya",
    "difficulty": "kolay",
    "options": ["Doğu", "Batı", "Kuzey", "Güney"],
    "correctAnswer": "Doğu"
  },
  {
    "id": "k65",
    "question": "Fenerbahçe Spor Kulübü hangi yılda kurulmuştur?",
    "category": "Fenerbahçe",
    "difficulty": "kolay",
    "options": ["1903", "1905", "1907", "1908"],
    "correctAnswer": "1907"
  },

  // ==================== ORTA SEVİYE ====================
  {
    id: 'o1',
    question: 'Avrupa Yakası dizisinde "Burhan Altıntop" karakterini canlandıran oyuncu kimdir?',
    category: 'Dizi & TV',
    difficulty: 'orta',
    options: ['Engin Günaydın', 'Gülse Birsel', 'Gazafer Özcan', 'Ata Demirer'],
    correctAnswer: 'Engin Günaydın'
  },
  {
    id: 'o2',
    question: 'İstanbul hangi yılda fethedilmiştir?',
    category: 'Tarih',
    difficulty: 'orta',
    options: ['1453', '1071', '1299', '1923'],
    correctAnswer: '1453'
  },
  {
    id: 'o3',
    question: '"Cağ Kebabı" hangi ilimizin tescilli lezzetidir?',
    category: 'Mutfak',
    difficulty: 'orta',
    options: ['Erzurum', 'Kars', 'Erzincan', 'Trabzon'],
    correctAnswer: 'Erzurum'
  },
  {
    "id": "o4",
    "question": "Osmanlı Devleti'nde İstanbul'u fetheden padişah kimdir?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["Kanuni Sultan Süleyman", "II. Mehmed (Fatih)", "Yavuz Sultan Selim", "Osmangazi"],
    "correctAnswer": "II. Mehmed (Fatih)"
  },
  {
    "id": "o5",
    "question": "'Pamukkale Travertenleri' hangi ilimizdedir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Antalya", "Muğla", "Denizli", "Aydın"],
    "correctAnswer": "Denizli"
  },
  {
    "id": "o6",
    "question": "Edebiyatımızda 'Kürk Mantolu Madonna' eserinin yazarı kimdir?",
    "category": "Edebiyat",
    "difficulty": "orta",
    "options": ["Peyami Safa", "Sabahattin Ali", "Oğuz Atay", "Yaşar Kemal"],
    "correctAnswer": "Sabahattin Ali"
  },
  {
    "id": "o7",
    "question": "İnsan vücudunda oksijen taşıyan kırmızı kan hücrelerine ne ad verilir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Lökosit", "Alyuvar (Eritrosit)", "Trombosit", "Plazma"],
    "correctAnswer": "Alyuvar (Eritrosit)"
  },
  {
    "id": "o8",
    "question": "Güneş Sisteminde 'Kızıl Gezegen' olarak bilinen gezegen hangisidir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Venüs", "Mars", "Merkür", "Jüpiter"],
    "correctAnswer": "Mars"
  },
  {
    "id": "o9",
    "question": "Şanlıurfa'da bulunan dünyanın bilinen en eski tapınak kompleksi hangisidir?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["Çatalhöyük", "Göbeklitepe", "Efes", "Nemrut"],
    "correctAnswer": "Göbeklitepe"
  },
  {
    "id": "o10",
    "question": "Periyodik tabloda 'Fe' simgesiyle gösterilen element hangisidir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Flor", "Fosfor", "Demir", "Fesiyum"],
    "correctAnswer": "Demir"
  },
  {
    "id": "o11",
    "question": "Hangisi Ege Bölgesi'nde yer alan bir ilimizdir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Mersin", "Manisa", "Sinop", "Sivas"],
    "correctAnswer": "Manisa"
  },
  {
    "id": "o12",
    "question": "'Sinekli Bakkal' romanı kime aittir?",
    "category": "Edebiyat",
    "difficulty": "orta",
    "options": ["Halide Edib Adıvar", "Reşat Nuri Güntekin", "Yakup Kadri Karaosmanoğlu", "Tarık Buğra"],
    "correctAnswer": "Halide Edib Adıvar"
  },
  {
    "id": "o13",
    "question": "Fatih Sultan Mehmet'in babası olan Osmanlı padişahı kimdir?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["I. Bayezid", "II. Murad", "Çelebi Mehmed", "I. Murad"],
    "correctAnswer": "II. Murad"
  },
  {
    "id": "o14",
    "question": "Dünyanın en uzun nehri kabul edilen nehir hangisidir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Amazon", "Nil", "Tuna", "Mississippi"],
    "correctAnswer": "Nil"
  },
  {
    "id": "o15",
    "question": "Hangisi kan grubunu belirleyen faktörlerden biri değildir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["A", "B", "Rh", "X"],
    "correctAnswer": "X"
  },
  {
    "id": "o16",
    "question": "'Nutuk' adlı eser hangi yıllar arasındaki olayları anlatır?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["1919 - 1927", "1914 - 1923", "1920 - 1938", "1918 - 1922"],
    "correctAnswer": "1919 - 1927"
  },
  {
    "id": "o17",
    "question": "Dünyanın çevresini dolaşan ilk denizci seyahatini başlatan kimdir?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["Kristof Kolomb", "Ferdinand Macellan", "Vasco da Gama", "Amerigo Vespucci"],
    "correctAnswer": "Ferdinand Macellan"
  },
  {
    "id": "o18",
    "question": "Nobel Ödülü kazanan ilk Türk bilim insanı kimdir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Orhan Pamuk", "Aziz Sancar", "Cahit Arf", "Celal Şengör"],
    "correctAnswer": "Aziz Sancar"
  },
  {
    "id": "o19",
    "question": "Tiyatroda sahne arkasına ne ad verilir?",
    "category": "Sanat",
    "difficulty": "orta",
    "options": ["Suflör", "Dekor", "Kulis", "Fuaye"],
    "correctAnswer": "Kulis"
  },
  {
    "id": "o20",
    "question": "Türkiye'nin yüzölçümü bakımından en büyük coğrafi bölgesi hangisidir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Doğu Anadolu", "İç Anadolu", "Karadeniz", "Marmara"],
    "correctAnswer": "Doğu Anadolu"
  },
  {
    "id": "o21",
    "question": "Rönesans dönemi ressamlarından 'Atina Okulu' tablosunu kim yapmıştır?",
    "category": "Sanat",
    "difficulty": "orta",
    "options": ["Michelangelo", "Raffaello", "Leonardo da Vinci", "Rembrandt"],
    "correctAnswer": "Raffaello"
  },
  {
    "id": "o22",
    "question": "Mantıkta ve bilgisayarda 1 ve 0'lardan oluşan sayı sistemine ne ad verilir?",
    "category": "Teknoloji",
    "difficulty": "orta",
    "options": ["Onluk (Decimal)", "İkili (Binary)", "Onaltılık (Hex)", "Sekizlik (Octal)"],
    "correctAnswer": "İkili (Binary)"
  },
  {
    "id": "o23",
    "question": "'Dostoyevski' hangi ülke edebiyatının temsilcisidir?",
    "category": "Edebiyat",
    "difficulty": "orta",
    "options": ["Alman", "Rus", "Fransız", "İngiliz"],
    "correctAnswer": "Rus"
  },
  {
    "id": "o24",
    "question": "Voleybol maçlarında arka alanda savunma yapan ve farklı forma giyen oyuncuya ne denir?",
    "category": "Spor",
    "difficulty": "orta",
    "options": ["Pasör", "Smaçör", "Libero", "Orta Oyuncu"],
    "correctAnswer": "Libero"
  },
  {
    "id": "o25",
    "question": "Türkiye'de ilk televizyon yayını hangi kurum tarafından gerçekleştirilmiştir?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["TRT", "İTÜ (İstanbul Teknik Üniversitesi)", "Anadolu Ajansı", "İstanbul Üniversitesi"],
    "correctAnswer": "İTÜ (İstanbul Teknik Üniversitesi)"
  },
  {
    "id": "o26",
    "question": "Hangisi yenilenebilir bir enerji kaynağıdır?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Kömür", "Petrol", "Rüzgar", "Doğalgaz"],
    "correctAnswer": "Rüzgar"
  },
  {
    "id": "o27",
    "question": "Osmanlı'da Lale Devri hangi isyan ile sona ermiştir?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["Celali İsyanları", "Patrona Halil İsyanı", "Kabakçı Mustafa İsyanı", "31 Mart Vakası"],
    "correctAnswer": "Patrona Halil İsyanı"
  },
  {
    "id": "o28",
    "question": "Dünyanın en büyük okyanusu hangisidir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Büyük Okyanus (Pasifik)", "Atlas Okyanusu", "Hint Okyanusu", "Arktik Okyanusu"],
    "correctAnswer": "Büyük Okyanus (Pasifik)"
  },
  {
    "id": "o29",
    "question": "Hücrenin enerji santrali olarak bilinen organel hangisidir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Ribozom", "Mitokondri", "Lizozom", "Golgi Aygıtı"],
    "correctAnswer": "Mitokondri"
  },
  {
    "id": "o30",
    "question": "'Kaplumbağa Terbiyecisi' tablosu kime ait ünlü bir eserdir?",
    "category": "Sanat",
    "difficulty": "orta",
    "options": ["Şeker Ahmet Paşa", "Osman Hamdi Bey", "Abidin Dino", "Fikret Mualla"],
    "correctAnswer": "Osman Hamdi Bey"
  },
  {
    "id": "o31",
    "question": "Türkiye'nin komşularından hangisiyle kara sınırı en uzundur?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Irak", "İran", "Suriye", "Yunanistan"],
    "correctAnswer": "Suriye"
  },
  {
    "id": "o32",
    "question": "Bilgisayarda geçici bellek/hafıza olarak kullanılan birim hangisidir?",
    "category": "Teknoloji",
    "difficulty": "orta",
    "options": ["HDD", "SSD", "RAM", "CPU"],
    "correctAnswer": "RAM"
  },
  {
    "id": "o33",
    "question": "Mimar Sinan'ın 'Ustalık Eserim' dediği yapı hangisidir?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["Süleymaniye Camii", "Selimiye Camii", "Şehzade Camii", "Sultanahmet Camii"],
    "correctAnswer": "Selimiye Camii"
  },
  {
    "id": "o34",
    "question": "Moleküler biyolojide DNA'nın açık yazımı nedir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Deoksiribonükleik Asit", "Ribonükleik Asit", "Dioksit Nükleik Asit", "Dinükleik Asit"],
    "correctAnswer": "Deoksiribonükleik Asit"
  },
  {
    "id": "o35",
    "question": "Akdeniz ile Kızıldeniz'i birbirine bağlayan yapay su yolu hangisidir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Panama Kanalı", "Süveyş Kanalı", "Cebelitarık Boğazı", "Kiel Kanalı"],
    "correctAnswer": "Süveyş Kanalı"
  },
  {
    "id": "o36",
    "question": "Hangisi edebiyatta 'Yedi Meşaleciler' topluluğunun kurucu üyelerindendir?",
    "category": "Edebiyat",
    "difficulty": "orta",
    "options": ["Ziya Osman Saba", "Cahit Sıtkı Tarancı", "Orhan Veli Kanık", "Attilâ İlhan"],
    "correctAnswer": "Ziya Osman Saba"
  },
  {
    "id": "o37",
    "question": "Türk parasından 6 sıfır hangi yılda atılmıştır?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["2000", "2003", "2005", "2010"],
    "correctAnswer": "2005"
  },
  {
    "id": "o38",
    "question": "Hücrede protein sentezinden sorumlu organel hangisidir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Ribozom", "Lizozom", "Mitokondri", "Koful"],
    "correctAnswer": "Ribozom"
  },
  {
    "id": "o39",
    "question": "Dünyanın en büyük adası (kıta sayılmayan) hangisidir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Madagaskar", "Grönland", "İzlanda", "Borneo"],
    "correctAnswer": "Grönland"
  },
  {
    "id": "o40",
    "question": "Osmanlı Devleti'nin Lale Devri'ndeki ünlü divan şairi kimdir?",
    "category": "Edebiyat",
    "difficulty": "orta",
    "options": ["Baki", "Fuzuli", "Nedim", "Nef'i"],
    "correctAnswer": "Nedim"
  },
  {
    "id": "o41",
    "question": "Ünlü 'Pisa Kulesi' hangi ülkededir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Fransa", "İtalya", "İspanya", "Yunanistan"],
    "correctAnswer": "İtalya"
  },
  {
    "id": "o42",
    "question": "İnternet protokol adresi 'http' kısaltmasındaki 'P' harfi neyi temsil eder?",
    "category": "Teknoloji",
    "difficulty": "orta",
    "options": ["Program", "Protocol", "Page", "Process"],
    "correctAnswer": "Protocol"
  },
  {
    "id": "o43",
    "question": "Türkiye'nin en büyük tatlı su gölü hangisidir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Beyşehir Gölü", "Eğirdir Gölü", "İznik Gölü", "Tuz Gölü"],
    "correctAnswer": "Beyşehir Gölü"
  },
  {
    "id": "o44",
    "question": "Güneş sisteminde belirgin halkalarıyla tanınan dev gezegen hangisidir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Jüpiter", "Satürn", "Uranüs", "Neptün"],
    "correctAnswer": "Satürn"
  },
  {
    "id": "o45",
    "question": "Mimar Sinan'ın İstanbul'daki 'Çıraklık Eserim' dediği cami hangisidir?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["Şehzade Camii", "Süleymaniye Camii", "Selimiye Camii", "Mihrimah Sultan Camii"],
    "correctAnswer": "Şehzade Camii"
  },
  {
    "id": "o46",
    "question": "Atomun çekirdeğinde bulunan pozitif (+) yüklü parçacık hangisidir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Proton", "Nötron", "Elektron", "Foton"],
    "correctAnswer": "Proton"
  },
  {
    "id": "o47",
    "question": "Dede Korkut Hikayeleri hangi Türk boyuna aittir?",
    "category": "Edebiyat",
    "difficulty": "orta",
    "options": ["Uygurlar", "Oğuzlar", "Kıpçaklar", "Göktürkler"],
    "correctAnswer": "Oğuzlar"
  },
  {
    "id": "o48",
    "question": "Hangi şehir hem Avrupa hem de Asya kıtasında toprağa sahiptir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["İstanbul", "Atina", "Moskova", "Kahire"],
    "correctAnswer": "İstanbul"
  },
  {
    "id": "o49",
    "question": "İnsan vücudundaki en uzun ve en güçlü kemik hangisidir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Omurga", "Uyluk Kemiği (Femur)", "Kaval Kemiği", "Kaburga"],
    "correctAnswer": "Uyluk Kemiği (Femur)"
  },
  {
    "id": "o50",
    "question": "Hangi element oda sıcaklığında sıvı halde bulunan tek metaldir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Kurşun", "Cıva", "Brom", "Galyum"],
    "correctAnswer": "Cıva"
  },
  {
    "id": "o51",
    "question": "'Dokuzuncu Hariciye Koğuşu' romanı kime aittir?",
    "category": "Edebiyat",
    "difficulty": "orta",
    "options": ["Peyami Safa", "Tarık Buğra", "Ahmet Hamdi Tanpınar", "Kemal Tahir"],
    "correctAnswer": "Peyami Safa"
  },
  {
    "id": "o52",
    "question": "Türkiye'nin en güneyinde yer alan ili hangisidir?",
    "category": "Coğrafya",
    "difficulty": "orta",
    "options": ["Antalya", "Hatay", "Mersin", "Muğla"],
    "correctAnswer": "Hatay"
  },
  {
    "id": "o53",
    "question": "Tiyatroda oyuncunun tek başına yaptığı uzun konuşmaya ne ad verilir?",
    "category": "Sanat",
    "difficulty": "orta",
    "options": ["Diyalog", "Monolog", "Tirat", "Suflör"],
    "correctAnswer": "Monolog"
  },
  {
    "id": "o54",
    "question": "Sesin boşlukta (vakumda) yayılmamasının temel sebebi nedir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Maddesel ortam olmaması", "Yerçekimi olmaması", "Işık olmaması", "Sıcaklığın düşük olması"],
    "correctAnswer": "Maddesel ortam olmaması"
  },
  {
    "id": "o55",
    "question": "Bilgisayarda 'Ctrl + C' klavye kısayolu ne işe yarar?",
    "category": "Teknoloji",
    "difficulty": "orta",
    "options": ["Yapıştır", "Kopyala", "Kes", "Geri Al"],
    "correctAnswer": "Kopyala"
  },
  {
    "id": "o56",
    "question": "'Sineklerin Tanrısı' kitabının dünyaca ünlü yazarı kimdir?",
    "category": "Edebiyat",
    "difficulty": "orta",
    "options": ["William Golding", "George Orwell", "Franz Kafka", "Ray Bradbury"],
    "correctAnswer": "William Golding"
  },
  {
    "id": "o57",
    "question": "Türkiye’nin ilk kadın tıp doktoru kimdir?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["Sabiha Gökçen", "Safiye Ali", "Afife Jale", "Halide Edib"],
    "correctAnswer": "Safiye Ali"
  },
  {
    "id": "o58",
    "question": "Dünyanın çevresini dolaşan ilk yapay uydu hangisidir?",
    "category": "Teknoloji",
    "difficulty": "orta",
    "options": ["Sputnik 1", "Apollo 11", "Voyager 1", "Hubble"],
    "correctAnswer": "Sputnik 1"
  },
  {
    "id": "o59",
    "question": "Kimyada bir çözeltinin pH değerinin '7' olması neyi ifade eder?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Asidik", "Bazik", "Nötr", "Tuzlu"],
    "correctAnswer": "Nötr"
  },
  {
    "id": "o60",
    "question": "Birleşmiş Milletler'in ana merkez binası hangi şehirdedir?",
    "category": "Genel Kültür",
    "difficulty": "orta",
    "options": ["Cenevre", "Londra", "New York", "Paris"],
    "correctAnswer": "New York"
  },
  {
    "id": "o61",
    "question": "Güneş Sistemindeki en sıcak gezegen hangisidir?",
    "category": "Bilim",
    "difficulty": "orta",
    "options": ["Merkür", "Venüs", "Mars", "Jüpiter"],
    "correctAnswer": "Venüs"
  },
  {
    "id": "o62",
    "question": "Yazılım dünyasında Hata Ayıklama işlemine ne ad verilir?",
    "category": "Teknoloji",
    "difficulty": "orta",
    "options": ["Encoding", "Debugging", "Compiling", "Refactoring"],
    "correctAnswer": "Debugging"
  },
  {
    "id": "o63",
    "question": "İstiklal Savaşı sırasında TBMM hükümetinin imzaladığı ilk uluslararası antlaşma hangisidir?",
    "category": "Tarih",
    "difficulty": "orta",
    "options": ["Gümrü Antlaşması", "Moskova Antlaşması", "Ankara Antlaşması", "Lozan Antlaşması"],
    "correctAnswer": "Gümrü Antlaşması"
  },
  {
    "id": "o64",
    "question": "Yazılım geliştirmede 'OOP' kısaltmasının Türkçe karşılığı nedir?",
    "category": "Teknoloji",
    "difficulty": "orta",
    "options": ["Özel Nesne Programlama", "Nesne Yönelimli Programlama", "Açık Kaynak Kodlu Programlama", "Olay Odaklı Programlama"],
    "correctAnswer": "Nesne Yönelimli Programlama"
  },
  {
    "id": "o65",
    "question": "Fenerbahçe'nin Sevilla'yı penaltılarla elerken 3 penaltı kurtaran efsanevi kalecisi kimdir?",
    "category": "Fenerbahçe",
    "difficulty": "orta",
    "options": ["Rüştü Reçber", "Volkan Demirel", "Serdar Kulbilge", "Mert Günok"],
    "correctAnswer": "Volkan Demirel"
  },

  // ==================== ZOR SEVİYE ====================
  {
    id: 'z1',
    question: 'Periyodik cetvelde "Au" simgesi hangi elementi temsil eder?',
    category: 'Kimya',
    difficulty: 'zor',
    options: ['Altın', 'Gümüş', 'Bakır', 'Alüminyum'],
    correctAnswer: 'Altın'
  },
  {
    id: 'z2',
    question: 'Aspirinin hammaddesi olan salisilik asit en çok hangi ağaçtan elde edilir?',
    category: 'Botanik',
    difficulty: 'zor',
    options: ['Söğüt', 'Meşe', 'Çam', 'Kavak'],
    correctAnswer: 'Söğüt'
  },
  {
    id: 'z3',
    question: 'Osmanlı Devleti\'nin çıkardığı ilk resmi gazete hangisidir?',
    category: 'Tarih',
    difficulty: 'zor',
    options: ['Takvim-i Vekayi', 'Tercüman-ı Ahval', 'Tasvir-i Efkâr', 'Ceride-i Havadis'],
    correctAnswer: 'Takvim-i Vekayi'
  },
  {
    "id": "z4",
    "question": "1915 Çanakkale Kara Savaşları'nda Mustafa Kemal'in 'Size ben taarruzu değil, ölmeyi emrediyorum' dediği mevki hangisidir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Anafartalar", "Conkbayırı", "Arıburnu", "Kireçtepe"],
    "correctAnswer": "Conkbayırı"
  },
  {
    "id": "z5",
    "question": "Yüzölçümü bakımından Türkiye'nin en büyük gölü hangisidir?",
    "category": "Coğrafya",
    "difficulty": "zor",
    "options": ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "İznik Gölü"],
    "correctAnswer": "Van Gölü"
  },
  {
    "id": "z6",
    "question": "Tarihteki ilk yazılı antlaşma kabul edilen Kadeş Antlaşması hangi iki devlet arasında imzalanmıştır?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Roma - Kartaca", "Mısır - Hitit", "Sümer - Akat", "Babil - Asur"],
    "correctAnswer": "Mısır - Hitit"
  },
  {
    "id": "z7",
    "question": "Türk edebiyatında ilk batılı anlamda roman kabul edilen 'Aşk-ı Memnu' kime aittir?",
    "category": "Edebiyat",
    "difficulty": "zor",
    "options": ["Halide Edib Adıvar", "Reşat Nuri Güntekin", "Halit Ziya Uşaklıgil", "Mehmet Rauf"],
    "correctAnswer": "Halit Ziya Uşaklıgil"
  },
  {
    "id": "z8",
    "question": "Sistine Şapeli'nin tavanındaki ünlü 'Adem'in Yaratılışı' freskini çizen sanatçı kimdir?",
    "category": "Sanat",
    "difficulty": "zor",
    "options": ["Raphael", "Michelangelo", "Donatello", "Caravaggio"],
    "correctAnswer": "Michelangelo"
  },
  {
    "id": "z9",
    "question": "Birleşmiş Milletler (BM) resmi olarak hangi yılda kurulmuştur?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["1919", "1939", "1945", "1950"],
    "correctAnswer": "1945"
  },
  {
    "id": "z10",
    "question": "Işığın vakumdaki hızı saniyede yaklaşık kaç kilometredir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["150.000 km/s", "300.000 km/s", "450.000 km/s", "500.000 km/s"],
    "correctAnswer": "300.000 km/s"
  },
  {
    "id": "z11",
    "question": "'Suç ve Ceza' romanındaki Raskolnikov'un işlediği cinayeti araştıran dedektif/müfettiş kimdir?",
    "category": "Edebiyat",
    "difficulty": "zor",
    "options": ["Razumihin", "Svidrigaylov", "Porfiri Petroviç", "Lujin"],
    "correctAnswer": "Porfiri Petroviç"
  },
  {
    "id": "z12",
    "question": "Fizikte 'Evrensel Kütle Çekim Kanunu'nu matematiksel ilkelerle ifade eden bilim insanı kimdir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Johannes Kepler"],
    "correctAnswer": "Isaac Newton"
  },
  {
    "id": "z13",
    "question": "Osmanlı Devleti'nde ilk kağıt para (Kaime) hangi padişah döneminde basılmıştır?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["II. Mahmud", "Abdülmecid", "Abdülaziz", "II. Abdülhamid"],
    "correctAnswer": "Abdülmecid"
  },
  {
    "id": "z14",
    "question": "Türkiye Cumhuriyeti'nin ilk Başbakanı kimdir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Mustafa Kemal Atatürk", "İsmet İnönü", "Fevzi Çakmak", "Celal Bayar"],
    "correctAnswer": "İsmet İnönü"
  },
  {
    "id": "z15",
    "question": "Felsefede 'Düşünüyorum, öyleyse varım' (Cogito, ergo sum) sözü kime aittir?",
    "category": "Felsefe",
    "difficulty": "zor",
    "options": ["Immanuel Kant", "Friedrich Nietzsche", "René Descartes", "John Locke"],
    "correctAnswer": "René Descartes"
  },
  {
    "id": "z16",
    "question": "Dünyanın erimiş iç çekirdeğinde en bol bulunan iki ağır metal elementi hangisidir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Demir ve Nikel", "Bakır ve Çinko", "Altın ve Gümüş", "Alüminyum ve Kurşun"],
    "correctAnswer": "Demir ve Nikel"
  },
  {
    "id": "z17",
    "question": "Kuantum mekaniğinde 'Belirsizlik İlkesi'ni ortaya atan ünlü fizikçi kimdir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Erwin Schrödinger", "Werner Heisenberg", "Niels Bohr", "Max Planck"],
    "correctAnswer": "Werner Heisenberg"
  },
  {
    "id": "z18",
    "question": "Edebiyatta bir sanatçının 'Magnum Opus'u ne anlama gelir?",
    "category": "Edebiyat",
    "difficulty": "zor",
    "options": ["İlk Eseri", "En Başyapıt / En Büyük Eseri", "Son Eseri", "Kayıp Eseri"],
    "correctAnswer": "En Başyapıt / En Büyük Eseri"
  },
  {
    "id": "z19",
    "question": "Güneş Sisteminde kendi etrafında diğer gezegenlerin aksine ters (saat yönünde) dönen gezegen hangisidir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Mars", "Venüs", "Neptün", "Merkür"],
    "correctAnswer": "Venüs"
  },
  {
    "id": "z20",
    "question": "Tıpta 'Hipertansiyon' tanımı hangi klinik durumu ifade eder?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Yüksek Kan Basıncı", "Düşük Kan Şekeri", "Yüksek Nabız", "Kalp Ritimsizliği"],
    "correctAnswer": "Yüksek Kan Basıncı"
  },
  {
    "id": "z21",
    "question": "Türkiye'nin ilk ilan edilen milli parkı neresidir?",
    "category": "Coğrafya",
    "difficulty": "zor",
    "options": ["Yedigöller Milli Parkı", "Yozgat Çamlığı Milli Parkı", "Soğuksu Milli Parkı", "Munzur Vadisi Milli Parkı"],
    "correctAnswer": "Yozgat Çamlığı Milli Parkı"
  },
  {
    "id": "z22",
    "question": "Bilgisayar mimarisinde komutların ve verilerin aynı hafızada saklanması ilkesini getiren mimarinin öncüsü kimdir?",
    "category": "Teknoloji",
    "difficulty": "zor",
    "options": ["Alan Turing", "John von Neumann", "Charles Babbage", "Claude Shannon"],
    "correctAnswer": "John von Neumann"
  },
  {
    "id": "z23",
    "question": "Dünyanın okyanuslardaki en derin noktası olan 'Mariana Çukuru' hangi okyanustadır?",
    "category": "Coğrafya",
    "difficulty": "zor",
    "options": ["Büyük Okyanus (Pasifik)", "Atlas Okyanusu", "Hint Okyanusu", "Arktik Okyanusu"],
    "correctAnswer": "Büyük Okyanus (Pasifik)"
  },
  {
    "id": "z24",
    "question": "Kimyada 'Kütlenin Korunumu Kanunu'nu deneysel olarak kanıtlayan bilim insanı kimdir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["John Dalton", "Antoine Lavoisier", "Robert Boyle", "Dmitri Mendeleev"],
    "correctAnswer": "Antoine Lavoisier"
  },
  {
    "id": "z25",
    "question": "İlk Türkçe sözlük kabul edilen 'Divânu Lugâti't-Türk' hangi yüzyılda kaleme alınmıştır?",
    "category": "Edebiyat",
    "difficulty": "zor",
    "options": ["9. Yüzyıl", "11. Yüzyıl", "13. Yüzyıl", "15. Yüzyıl"],
    "correctAnswer": "11. Yüzyıl"
  },
  {
    "id": "z26",
    "question": "İnsan Genom Projesi sonuçlarına göre insan DNA'sında yaklaşık kaç milyar baz çifti vardır?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["1 Milyar", "3 Milyar", "10 Milyar", "50 Milyar"],
    "correctAnswer": "3 Milyar"
  },
  {
    "id": "z27",
    "question": "Mantık matematiğinde ve bilgisayar devrelerinde kullanılan 'Boole Cebiri'ni kim geliştirmiştir?",
    "category": "Matematik",
    "difficulty": "zor",
    "options": ["George Boole", "Gottfried Leibniz", "Auguste De Morgan", "Kurt Gödel"],
    "correctAnswer": "George Boole"
  },
  {
    "id": "z28",
    "question": "'Savaş ve Barış' ile 'Anna Karenina' romanlarının dünyaca ünlü Rus yazarı kimdir?",
    "category": "Edebiyat",
    "difficulty": "zor",
    "options": ["Dostoyevski", "Lev Tolstoy", "Anton Çehov", "Nikolay Gogol"],
    "correctAnswer": "Lev Tolstoy"
  },
  {
    "id": "z29",
    "question": "Hücre bölünmesinde kromozomların hücrenin ekvatoral düzleminde tek sıra halinde dizildiği evre hangisidir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Profaz", "Metafaz", "Anafaz", "Telofaz"],
    "correctAnswer": "Metafaz"
  },
  {
    "id": "z30",
    "question": "Osmanlı Devleti'nde Avrupalı devletlere verilen ticari ve hukuki ayrıcalıklara ne ad verilirdi?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["İltizam", "Kapitülasyon", "Dirlik", "Müsadere"],
    "correctAnswer": "Kapitülasyon"
  },
  {
    "id": "z31",
    "question": "Ses hızı deniz seviyesinde ve oda sıcaklığında yaklaşık kaç km/saat değerindedir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["760 km/s", "1235 km/s", "1500 km/s", "2000 km/s"],
    "correctAnswer": "1235 km/s"
  },
  {
    "id": "z32",
    "question": "Reşat Nuri Güntekin'in yayımlanan ilk romanı hangisidir?",
    "category": "Edebiyat",
    "difficulty": "zor",
    "options": ["Çalıkuşu", "Gizli El", "Dudaktan Kalbe", "Acımak"],
    "correctAnswer": "Gizli El"
  },
  {
    "id": "z33",
    "question": "Klasik mantık ilkelerinden 'Her şey kendisinin aynısıdır' kuralı hangisidir?",
    "category": "Felsefe",
    "difficulty": "zor",
    "options": ["Özdeşlik İlkesi", "Çelişmezlik İlkesi", "Üçüncü Halin İmkansızlığı", "Yeter-Sebep İlkesi"],
    "correctAnswer": "Özdeşlik İlkesi"
  },
  {
    "id": "z34",
    "question": "1953 yılında DNA'nın çift sarmal (double helix) yapısını keşfeden bilim insanları kimlerdir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Darwin ve Wallace", "Watson ve Crick", "Pasteur ve Koch", "Mendel ve Morgan"],
    "correctAnswer": "Watson ve Crick"
  },
  {
    "id": "z35",
    "question": "Osmanlı Devleti'nde 'Nizam-ı Cedid' ıslahat hareketini başlatan ve bu orduyu kuran padişah kimdir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["III. Ahmed", "III. Selim", "II. Mahmud", "I. Mahmud"],
    "correctAnswer": "III. Selim"
  },
  {
    "id": "z36",
    "question": "Dünyanın en büyük kanyonu kabul edilen 'Büyük Kanyon' (Grand Canyon) ABD'nin hangi eyaletindedir?",
    "category": "Coğrafya",
    "difficulty": "zor",
    "options": ["Kaliforniya", "Arizona", "Teksas", "Nevada"],
    "correctAnswer": "Arizona"
  },
  {
    "id": "z37",
    "question": "Periyodik tabloda simgesi 'W' olan tungsten elementinin diğer adı nedir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Volfram", "Bizmut", "Titanyum", "Vanadyum"],
    "correctAnswer": "Volfram"
  },
  {
    "id": "z38",
    "question": "Karl Popper ile özdeşleşen bilim felsefesi ilkesi hangisidir?",
    "category": "Felsefe",
    "difficulty": "zor",
    "options": ["Doğrulanabilirlik", "Yanlışlanabilirlik", "Mantıksal Pozitivizm", "Paradigma Değişimi"],
    "correctAnswer": "Yanlışlanabilirlik"
  },
  {
    "id": "z39",
    "question": "'Genç Werther'in Acıları' ve 'Faust' eserlerinin Alman yazarı kimdir?",
    "category": "Edebiyat",
    "difficulty": "zor",
    "options": ["Johann Wolfgang von Goethe", "Friedrich Schiller", "Thomas Mann", "Franz Kafka"],
    "correctAnswer": "Johann Wolfgang von Goethe"
  },
  {
    "id": "z40",
    "question": "II. Dünya Savaşı sırasında Bletchley Park'ta Enigma şifrelerini kıran matematikçi kimdir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["John von Neumann", "Alan Turing", "Claude Shannon", "Bertrand Russell"],
    "correctAnswer": "Alan Turing"
  },
  {
    "id": "z41",
    "question": "Türkiye'nin coğrafi olarak en doğudaki uç noktası hangi ilin sınırları içerisindedir?",
    "category": "Coğrafya",
    "difficulty": "zor",
    "options": ["Hakkari", "Iğdır", "Van", "Kars"],
    "correctAnswer": "Iğdır"
  },
  {
    "id": "z42",
    "question": "Osmanlı Devleti'nde denk bütçe hazırlama çalışmasıyla bilinen sadrazam kimdir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Köprülü Mehmed Paşa", "Tarhuncu Ahmed Paşa", "Sokullu Mehmed Paşa", "Merzifonlu Kara Mustafa Paşa"],
    "correctAnswer": "Tarhuncu Ahmed Paşa"
  },
  {
    "id": "z43",
    "question": "İnsan gözünde göze rengini veren ve ışık miktarına göre büyüyüp küçülen pigmentli yapı hangisidir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["İris", "Kornea", "Retina", "Göz Bebeği"],
    "correctAnswer": "İris"
  },
  {
    "id": "z44",
    "question": "Süperiletkenlik fenomenini ilk keşfeden ve Nobel Fizik Ödülü alan bilim insanı kimdir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Max Planck", "Heike Kamerlingh Onnes", "Niels Bohr", "Hendrik Lorentz"],
    "correctAnswer": "Heike Kamerlingh Onnes"
  },
  {
    "id": "z45",
    "question": "Sanat tarihinde 'Kübizm' akımının kurucuları kabul edilen iki sanatçı kimdir?",
    "category": "Sanat",
    "difficulty": "zor",
    "options": ["Picasso ve Braque", "Dali ve Miro", "Monet ve Renoir", "Kandinsky ve Klee"],
    "correctAnswer": "Picasso ve Braque"
  },
  {
    "id": "z46",
    "question": "Göktürk Kitabeleri'ni (Orhun Abideleri) 1893 yılında çözen Danimarkalı dilbilimci kimdir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Wilhelm Radloff", "Wilhelm Thomsen", "Strahlenberg", "Vassily Barthold"],
    "correctAnswer": "Wilhelm Thomsen"
  },
  {
    "id": "z47",
    "question": "Tarihte bilinen en eski yazılı kanunlar olan 'Urnammu Kanunları' hangi medeniyete aittir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Sümerler", "Babiller", "Asurlar", "Hititler"],
    "correctAnswer": "Sümerler"
  },
  {
    "id": "z48",
    "question": "Kimyada 'Avogadro Sayısı' sabitinin yaklaşık değeri nedir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["3.14 x 10^23", "6.02 x 10^23", "1.60 x 10^-19", "9.81 x 10^8"],
    "correctAnswer": "6.02 x 10^23"
  },
  {
    "id": "z49",
    "question": "Türk basın tarihinde yayımlanan 'İlk Resmi Türkçe Gazete' hangisidir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Tercüman-ı Ahvâl", "Takvîm-i Vekâyi", "Cerîde-i Havâdis", "Tasvîr-i Efkâr"],
    "correctAnswer": "Takvîm-i Vekâyi"
  },
  {
    "id": "z50",
    "question": "İşletim sistemlerinde kilitlenme (Deadlock) durumunu önlemek için kullanılan ünlü algoritma hangisidir?",
    "category": "Teknoloji",
    "difficulty": "zor",
    "options": ["Dijkstra Algoritması", "Banker Algoritması", "Round Robin", "LRU Algoritması"],
    "correctAnswer": "Banker Algoritması"
  },
  {
    "id": "z51",
    "question": "Dünyanın yüzölçümü bakımından en büyük kıtası hangisidir?",
    "category": "Coğrafya",
    "difficulty": "zor",
    "options": ["Asya", "Afrika", "Kuzey Amerika", "Avrupa"],
    "correctAnswer": "Asya"
  },
  {
    "id": "z52",
    "question": "Miyop kırma kusurunda göze gelen ışınlar görüntüyü retinanın neresinde oluşturur?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Önünde", "Arkasında", "Tam üstünde", "Yanında"],
    "correctAnswer": "Önünde"
  },
  {
    "id": "z53",
    "question": "30 Yıl Savaşları'nı sona erdiren ve modern uluslararası ilişkilerin temeli sayılan antlaşma hangisidir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Utrecht Antlaşması", "Vestfalya (Westphalia) Antlaşması", "Viyana Kongresi", "Paris Antlaşması"],
    "correctAnswer": "Vestfalya (Westphalia) Antlaşması"
  },
  {
    "id": "z54",
    "question": "Matematikte Euler Sabiti (e) yaklaşık olarak kaça eşittir?",
    "category": "Matematik",
    "difficulty": "zor",
    "options": ["1.414", "2.718", "3.141", "1.618"],
    "correctAnswer": "2.718"
  },
  {
    "id": "z55",
    "question": "'Saatleri Ayarlama Enstitüsü' romanı kime aittir?",
    "category": "Edebiyat",
    "difficulty": "zor",
    "options": ["Yaşar Kemal", "Ahmet Hamdi Tanpınar", "Peyami Safa", "Tarık Buğra"],
    "correctAnswer": "Ahmet Hamdi Tanpınar"
  },
  {
    "id": "z56",
    "question": "İnsan bedeninde alyuvarların (kırmızı kan hücreleri) ortalama yaşam süresi kaç gündür?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["30 gün", "60 gün", "120 gün", "365 gün"],
    "correctAnswer": "120 gün"
  },
  {
    "id": "z57",
    "question": "Osmanlı Devleti'nde Reisülküttablık makamı Tanzimat sonrasında hangi bakanlığa dönüşmüştür?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["İçişleri Bakanlığı", "Dışişleri Bakanlığı", "Adalet Bakanlığı", "Maliye Bakanlığı"],
    "correctAnswer": "Dışişleri Bakanlığı"
  },
  {
    "id": "z58",
    "question": "Müzikte erkek seslerinin en kalın olanına verilen ad nedir?",
    "category": "Sanat",
    "difficulty": "zor",
    "options": ["Bas", "Tenor", "Bariton", "Soprano"],
    "correctAnswer": "Bas"
  },
  {
    "id": "z59",
    "question": "Kuantum fiziğinde taneciklerin dalga özelliği de gösterdiğini öne süren 'Madde Dalgaları' hipotezi kime aittir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Max Planck", "Louis de Broglie", "Niels Bohr", "Albert Einstein"],
    "correctAnswer": "Louis de Broglie"
  },
  {
    "id": "z60",
    "question": "Divan edebiyatında 'Süslü Nesir' akımının ilk büyük temsilcisi ve 'Tazarruname' kitabının yazarı kimdir?",
    "category": "Edebiyat",
    "difficulty": "zor",
    "options": ["Katip Çelebi", "Sinan Paşa", "Veysi", "Nergisi"],
    "correctAnswer": "Sinan Paşa"
  },
  {
    "id": "z61",
    "question": "Tarihte bilinen ilk kütüphaneyi Ninova'da kuran mezopotamya devleti hangisidir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Sümerler", "Babiller", "Asurlar", "Akadlar"],
    "correctAnswer": "Asurlar"
  },
  {
    "id": "z62",
    "question": "Bilgisayar ağlarında veri paketlerinin hedefe ulaşması için izleyeceği yolu belirleyen cihaza ne ad verilir?",
    "category": "Teknoloji",
    "difficulty": "zor",
    "options": ["Switch", "Router (Yönlendirici)", "Modem", "Hub"],
    "correctAnswer": "Router (Yönlendirici)"
  },
  {
    "id": "z63",
    "question": "Biyolojide hücresel kısımların kendi kendini sindirmesi/yıkması olayına ne denir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Otofaji", "Apoptoz", "Fagositoz", "Pinositoz"],
    "correctAnswer": "Otofaji"
  },
  {
    "id": "z64",
    "question": "Felsefede bilginin doğasını, kaynağını ve sınırlarını inceleyen dala ne ad verilir?",
    "category": "Felsefe",
    "difficulty": "zor",
    "options": ["Ontoloji", "Epistemoloji", "Aksiyoloji", "Etik"],
    "correctAnswer": "Epistemoloji"
  },
  {
    "id": "z65",
    "question": "Yazılım geliştirmede SOLID prensiplerindeki 'S' harfi hangi ilkeyi temsil eder?",
    "category": "Teknoloji",
    "difficulty": "zor",
    "options": ["Single Responsibility", "Open-Closed", "Substitution", "Service Oriented"],
    "correctAnswer": "Single Responsibility"
  },
  {
    "id": "z66",
    "question": "Osmanlı Devleti'nde ilk ıslahat/yenileşme gazetesini çıkaran ve 'Tercüman-ı Ahval' gazetesini kuran yazarlar kimlerdir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Şinasi ve Agah Efendi", "Namık Kemal ve Ziya Paşa", "Ali Suavi ve Ahmet Mithat", "Muallim Naci ve Recaizade"],
    "correctAnswer": "Şinasi ve Agah Efendi"
  },
  {
    "id": "z67",
    "question": "Geometride 'Altın Oran'ın matematiksel değeri yaklaşık olarak kaçtır?",
    "category": "Matematik",
    "difficulty": "zor",
    "options": ["1.414", "1.618", "2.718", "3.141"],
    "correctAnswer": "1.618"
  },
  {
    "id": "z68",
    "question": "Kimyada soygazlar grubunda yer almayan element hangisidir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Helyum", "Neon", "Klor", "Argon"],
    "correctAnswer": "Klor"
  },
  {
    "id": "z69",
    "question": "Türk tarihinin bilinen ilk alfabesi hangisidir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Uygur Alfabesi", "Orhun (Göktürk) Alfabesi", "Arap Alfabesi", "Kök-Latin Alfabesi"],
    "correctAnswer": "Orhun (Göktürk) Alfabesi"
  },
  {
    "id": "z70",
    "question": "İnsan beyninde kas koordinasyonunu, dengeyi ve hareketi düzenleyen merkez neresidir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Omurilik Soğanı", "Beyincik", "Hipotalamus", "Talamus"],
    "correctAnswer": "Beyincik"
  },
  {
    "id": "z71",
    "question": "Relativite (Görelilik) Teorisini ortaya koyan ünlü fizikçi kimdir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
    "correctAnswer": "Albert Einstein"
  },
  {
    "id": "z72",
    "question": "Güneş sistemindeki en büyük dağ kabul edilen 'Olympus Mons' hangi gezegendedir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Mars", "Jüpiter", "Venüs", "Merkür"],
    "correctAnswer": "Mars"
  },
  {
    "id": "z73",
    "question": "İşletim sistemlerinde süreçlerin (process) işlemciyi paylaşma sırasını belirleyen bileşene ne denir?",
    "category": "Teknoloji",
    "difficulty": "zor",
    "options": ["Kernel", "Scheduler (Zamanlayıcı)", "Driver", "Compiler"],
    "correctAnswer": "Scheduler (Zamanlayıcı)"
  },
  {
    "id": "z74",
    "question": "Büyük Taarruz öncesi ordunun ihtiyaçlarını karşılamak amacıyla yayımlanan emirler hangisidir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Teşkilat-ı Esasiye", "Tekalif-i Milliye Emirleri", "Misak-ı Milli", "Kanun-ı Esasi"],
    "correctAnswer": "Tekalif-i Milliye Emirleri"
  },
  {
    "id": "z75",
    "question": "Genetik bilimin kurucusu kabul edilen ve bezelyelerle deneyler yapan bilim insanı kimdir?",
    "category": "Bilim",
    "difficulty": "zor",
    "options": ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Hooke"],
    "correctAnswer": "Gregor Mendel"
  },
  {
    "id": "z76",
    "question": "Dünyanın en küçük bağımsız ülkesi hangisidir?",
    "category": "Coğrafya",
    "difficulty": "zor",
    "options": ["Monako", "Vatikan", "San Marino", "Lihtenştayn"],
    "correctAnswer": "Vatikan"
  },
  {
    "id": "z77",
    "question": "Sanat tarihinde 'Doğuş / Yeniden Doğuş' anlamına gelen tarihsel dönem hangisidir?",
    "category": "Tarih",
    "difficulty": "zor",
    "options": ["Barok", "Rönesans", "Gotik", "Romantizm"],
    "correctAnswer": "Rönesans"
  },
  {
    "id": "z78",
    "question": "Algoritma karmaşıklığında 'Big O' gösteriminde en hızlı çalışan zaman karmaşıklığı hangisidir?",
    "category": "Teknoloji",
    "difficulty": "zor",
    "options": ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
    "correctAnswer": "O(1)"
  },
  {
    "id": "z79",
    "question": "Fenerbahçe kulüp tarihinin en fazla resmi maça çıkan futbolcusu unvanı kime aittir (763 maç)?",
    "category": "Fenerbahçe",
    "difficulty": "zor",
    "options": ["Volkan Demirel", "Rüştü Reçber", "Müjdat Yetkiner", "Şeref Hasgül"],
    "correctAnswer": "Müjdat Yetkiner"
  }
];

// Zorluk derecesine göre soru seçip şıkları karıştırarak getiren fonksiyon
export function getQuestionsByDifficulty(difficulty: string = 'kolay', count: number = 30): Question[] {
  const diff = difficulty.toLowerCase();
  
  // Seçilen zorluktaki soruları filtrele
  let filtered = QUESTIONS_DATABASE.filter((q) => q.difficulty === diff);

  // Eğer o zorlukta yeterince soru yoksa tüm havuzdan destek al
  if (filtered.length < 5) {
    filtered = QUESTIONS_DATABASE;
  }

  // Soruları ve şıkları rastgele karıştır (Shuffle)
  return [...filtered]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map((q) => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5)
    }));
}