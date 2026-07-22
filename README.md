# ⚔️ QUIZ ARENA

> **"Sadece bilmek yetmez; daha hızlı olmalı, rakibini doğru anda kilitlemeli ve arenanın tek şampiyonu sen olmalısın!"**

### 🔥 Sıradan Soru Yarışmalarını Unutun!
**Quiz Arena**, klasik "soruyu oku ve cevapla" mantığının çok ötesinde, **anlık reflekslerin, yüksek hırsın ve stratejik zekanın** çarpıştığı gerçek zamanlı bir multiplayer yarışma arenasıdır. 

Canlı rakiplerle birebir (1v1) yüzleşin, saniyelerle yarışırken **Dondur**, **Kalkan** ve **+5sn Süre** gibi sabotaj jokerleriyle rakibinizin dengesini bozun! Burada sadece bilgi değil; doğru zamanlama, soğukkanlılık ve rekabet hissi kazandırır.

* 🚀 **Sıfır Gecikme, Maksimum Adrenalin:** Firestore Real-time altyapısı sayesinde rakibinizin her hamlesini canlı izleyin.
* ⚡ **Işık Hızında Matchmaking:** Beklemek yok, saniyeler içinde arenaya inip rakibinizle eşleşin.
* 💣 **Sabotaj & Strateji:** Karşı taraf tam soruyu okurken ekranını dondurun, puan kaybetmemek için kalkanınızı devreye sokun ve skor tablosunu altüst edin!

---

## 🎨 Ekran Görüntüleri ve Akışlar

### 🔑 Giriş & Karşılama
<p align="center">
  <img src="docs/images/giris-ekrani.jpeg" width="320" alt="Giriş Ekranı" />
</p>

---

### 🏠 Lobi & Profil İstatistikleri
| Profil & Rozetler | Oda Kurma & Oyun Modları |
| :---: | :---: |
| <img src="docs/images/loby-1.jpeg" width="300" alt="Lobi İstatistikler" /> | <img src="docs/images/loby-2.jpeg" width="300" alt="Oda Kurma" /> |

---

### ⚔️ Eşleşme & Bekleme Salonu
| Rakip Bekleniyor | Rakip Bulundu |
| :---: | :---: |
| <img src="docs/images/rakip-bekleme.jpeg" width="300" alt="Bekleme Salonu" /> | <img src="docs/images/rakip-bulundu.jpeg" width="300" alt="Rakip Bulundu" /> |

---

### 🎯 Canlı Rekabet & Oyun Sonu
| Puan & Sorular | Rakip Oyundan Ayrıldı |
| :---: | :---: |
| <img src="docs/images/puan.jpeg" width="300" alt="Canlı Skor" /> | <img src="docs/images/oyundan-ayrildi.jpeg" width="300" alt="Rakip Ayrıldı" /> |

---

## 📱 Uygulama Detayları

### 1. 🔐 Giriş Ekranı
* **Google OAuth Entegrasyonu:** Kullanıcılar tek tıkla güvenli bir şekilde oturum açar.
* **Kişiselleştirilmiş İstatistikler:** Kullanıcının benzersiz kimliği (UID) üzerinden tüm maç geçmişi, puanları ve istatistikleri Firestore üzerinde güvenle saklanır.

### 2. 🏛️ Lobi & Profil Paneli
* **Performans İstatistikleri:** Toplam Puan, Kazanma Oranı (%), Toplam Maç Sayısı, Galibiyet Sayısı ve En İyi Galibiyet Serisi (🔥) anlık gösterilir.
* **Başarım Rozetleri:** Oyuncunun performansına göre kilitleri açılan *"Keskin Nişancı"*, *"Işık Hızı"* ve *"Şampiyon"* rozetleri.
* **🏆 Global Top 10 Sıralaması:** En yüksek skora sahip oyuncuları canlı gösteren liderlik tablosu.
* **⚡ Otomatik Hızlı Maç:** Kod girmeye gerek kalmadan, akıllı matchmaking algoritması sayesinde tek tıkla boş odadaki bir rakiple eşleşme.
* **➕ Özel Oda Oluşturma:** 
  * **Zorluk Seviyesi:** Kolay, Orta, Zor.
  * **Oyun Modları:** Hızlı (⚡), Standart (⚔️), Maraton (🏆).
* **🔑 Koda Göre Katıl:** Arkadaşların paylaştığı 6 haneli özel oda kodunu girerek odaya katılma.

### 3. ⏳ Bekleme Salonu & Matchmaking
* **Oda Kurulumu & Davet:** Kurucu için sistem otomatik olarak **6 haneli benzersiz oda kodu** üretir.
* **Akıllı Eşleşme:** İkinci oyuncu geldiğinde sistem oyuncuları eşleştirir (`Oyuncu 1 vs Oyuncu 2`).
* **Canlı Geri Sayım:** *"Rakip Bulundu!"* ekranında 5 saniyelik geri sayım başlar ve her iki cihazı eşzamanlı olarak oyuna sokar.

### 4. 🎮 Oyun Sayfası & Canlı Rekabet
* **Zaman Yönetimi:** Toplam oda süresi ve soru başına ayrılan süre anlık geriye sayar.
* **Dinamik Puanlama:** Doğru cevaplar puan kazandırırken, yanlış cevaplarda sistem **-10 Puan** düşer.
* **⚔️ Stratejik Joker Sistemi:**
  1. 🛡️ **Kalkan Jokeri:** Yanlış cevap verilse dahi eksi puan almayı engeller.
  2. 💣 **%50 : %50 Jokeri:** Yanlış olan iki şıkkı eler.
  3. ⏱️ **+5sn Süre Jokeri:** Sıkışılan anlarda ek süre kazandırır.
  4. 🧊 **Dondur Jokeri (Sabotaj):** Karşı tarafın ekranını kilitler; rakip cevap veremezken rahatça öne geçme fırsatı tanır.

### 5. 🚪 Odadan Ayrılma & Anlık Bildirim
* **Erken Ayrılma Tespiti:** Oyunculardan biri çıktığında veya bağlantısı koptuğunda, Firestore Real-time listener durumu anında tespit eder.
* **Canlı Uyarı:** Diğer oyuncunun ekranında *"⚠️ Rakip oyundan ayrıldı"* uyarısı belirir ve maç sonlanır.

---

## 🛠️ Teknolojiler (Tech Stack)

* **Frontend:** React 18 (TypeScript), Vite, Tailwind CSS
* **Backend / Database:** Firebase Firestore (Real-time NoSQL DB), Firebase Authentication (Google OAuth)
* **Deployment:** Vercel

---

## 💡 Projenin Öne Çıkan Avantajları

* **⚡ Sıfır Gecikmeli Senkronizasyon:** Firestore Real-time altyapısı sayesinde skorlar, dondurma jokerleri ve zaman senkronu milisaniyelik hassasiyetle gerçekleşir.
* **🎯 İki Yönlü Stratejik Derinlik:** Sadece bilgiye değil, jokerlerin doğru zamanda kullanımına dayalı rekabetçi oyun dinamiği.
* **🛡️ Hata Toleranslı Matchmaking:** Kopan bağlantıları tespit edip sistemi kilitlenmekten kurtaran akıllı durum yönetimi.
