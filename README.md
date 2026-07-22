# ⚡ Quiz Arena - Canlı Çok Oyunculu Bilgi Yarışması

Quiz Arena, oyuncuların gerçek zamanlı olarak birbiriyle eşleştiği, zamana karşı yarıştığı ve puan topladığı modern bir web uygulamasıdır.

---

## 🎨 Ekran Görüntüleri (Arayüz)

### 🔑 Giriş & Karşılama
![Giriş Ekranı](docs/images/giris-ekrani.jpeg)

---

### 🏠 Lobi & İstatistikler
| Profil & Rozetler | Oda Kurma & Oyun Modları |
| :---: | :---: |
| ![Lobi 1](docs/images/loby-1.jpeg) | ![Lobi 2](docs/images/loby-2.jpeg) |

---

### ⚔️ Eşleşme & Oyun Salonu
| Rakip Bekleniyor | Rakip Bulundu |
| :---: | :---: |
| ![Rakip Bekleme](docs/images/rakip-bekleme.jpeg) | ![Rakip Bulundu](docs/images/rakip-bulundu.jpeg) |

---

### 🎯 Canlı Yarışma & Oyun Sonu
| Puan & Sorular | Rakip Ayrıldı |
| :---: | :---: |
| ![Puan Ekranı](docs/images/puan.jpeg) | ![Rakip Ayrıldı](docs/images/oyundan-ayrildi.jpeg) |

---

## 🔥 Öne Çıkan Özellikler

* **⚡ Otomatik Hızlı Eşleşme (Matchmaking):** Kod girmeden tek tıkla boş odadaki bir rakiple veya yeni açılan odada eşleşme.
* **🔑 Özel Oda Oluşturma:** 6 haneli oda kodu ile arkadaşlarınla özel maç yapma imkanı.
* **🏆 Oyun Modları & Zorluk Seviyeleri:** Hızlı (1 dk), Standart (2 dk), Maraton (5 dk) ve Kolay/Orta/Zor seçenekleri.
* **📲 Canlı Skor & Zaman Senkronizasyonu:** Firebase Firestore realtime dinleyicileri ile anlık puan güncellemeleri.
* **🏅 Profil & Liderlik Tablosu:** Kullanıcı istatistikleri, kazanılan rozetler ve Global Top 10 sıralaması.

---

## 🛠️ Kullanılan Teknolojiler

* **Frontend:** React, TypeScript, Vite, Tailwind CSS
* **Backend / Database:** Firebase (Firestore, Auth)
* **Deployment:** Vercel

---

## 🚀 Kurulum (Local Development)

Projeyi kendi bilgisayarınızda çalıştırmak için:

```bash
# 1. Depoyu klonlayın
git clone [https://github.com/edanesedemircan/Quiz-Arena.git](https://github.com/edanesedemircan/Quiz-Arena.git)

# 2. Proje dizinine girin
cd Quiz-Arena

# 3. Bağımlılıkları yükleyin
npm install

# 4. Geliştirici sunucusunu başlatın
npm run dev
