# Event Planner

Staj sürecinde geliştirilen, kullanıcıların etkinliklerini kolayca planlamasını ve yönetmesini sağlayan web tabanlı etkinlik planlama uygulaması.

## Canlı Demo

https://keremalp100.github.io/staj-event-planner/

## Sayfalar

- **Giriş Sayfası (`index.html`)** — Kullanıcının uygulamaya giriş yaptığı sayfa.
- **Ana Sayfa (`dashboard.html`)** — Toplam etkinlik, yaklaşan etkinlik ve tamamlanan etkinlik bilgilerini gösterir. Yaklaşan etkinlikler burada listelenir.
- **Etkinlikler (`events.html`)** — Tüm etkinliklerin listelendiği sayfa. Etkinlikler aranabilir, duruma göre filtrelenebilir, düzenlenebilir, silinebilir ve yazdırılabilir.
- **Takvim (`calendar.html`)** — Etkinliklerin tarih sırasına göre takvim görünümünde görüntülendiği sayfa.
- **Etkinlik Ekle (`add-event.html`)** — Yeni etkinlik oluşturmak için kullanılır.
- **Etkinlik Düzenle (`edit-event.html`)** — Mevcut bir etkinliğin bilgilerini düzenlemek için kullanılır.
- **Ayarlar (`settings.html`)** — Uygulama ayarlarının yönetildiği sayfa.

## Özellikler

- Kullanıcı giriş ekranı
- Etkinlik ekleme
- Etkinlik düzenleme
- Etkinlik silme
- Etkinlikleri tarih ve saate göre sıralama
- Etkinlik arama
- Etkinlik durumuna göre filtreleme
- Takvim görünümü
- Yazdırma özelliği
- Responsive tasarım
- Mobil, tablet ve masaüstü uyumluluğu
- LocalStorage ile verilerin saklanması

## Kullanılan Teknolojiler

- HTML
- CSS
- JavaScript
- Font Awesome
- LocalStorage

## Proje Yapısı

staj-event-planner/
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── events.js
│   └── login.js
├── index.html
├── dashboard.html
├── events.html
├── calendar.html
├── add-event.html
├── edit-event.html
└── settings.html
