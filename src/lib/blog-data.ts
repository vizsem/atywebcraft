export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "mengapa-bisnis-anda-butuh-website-di-tahun-2025",
    title: "Mengapa Bisnis Anda Membutuhkan Website di Tahun 2025?",
    excerpt: "Di era digital saat ini, mengandalkan media sosial saja tidak cukup. Pelajari alasan mengapa website profesional adalah aset krusial untuk pertumbuhan bisnis Anda.",
    content: `
      <p>Banyak pemilik UMKM dan bisnis lokal beranggapan bahwa memiliki akun Instagram atau TikTok sudah cukup untuk berjualan online. Namun, algoritma media sosial selalu berubah, dan Anda tidak memiliki kontrol penuh atas platform tersebut.</p>
      
      <h2>1. Kredibilitas dan Profesionalisme</h2>
      <p>Konsumen modern cenderung melakukan riset di Google sebelum memutuskan untuk membeli. Website dengan domain resmi (seperti .com atau .id) langsung memberikan kesan profesional dan meningkatkan kepercayaan pelanggan secara instan.</p>

      <h2>2. Kontrol Penuh atas Brand Anda</h2>
      <p>Di website, Anda adalah pemilik rumah. Anda bebas mengatur tata letak, warna, promo, hingga cara pelanggan berinteraksi tanpa dibatasi oleh aturan platform pihak ketiga.</p>

      <h2>3. Buka 24 Jam Non-Stop</h2>
      <p>Website ibarat tenaga sales yang bekerja tanpa lelah. Pelanggan bisa melihat katalog, membaca FAQ, bahkan melakukan transaksi jam 2 pagi saat Anda sedang tidur.</p>

      <h2>Kesimpulan</h2>
      <p>Memiliki website bukan lagi sekadar opsi, melainkan kebutuhan mendasar jika Anda ingin bisnis bertahan dan berkembang. Jangan tunda lagi, mulailah bangun rumah digital Anda hari ini!</p>
    `,
    date: "20 Jan 2025",
    author: "Tim WebCraft",
    category: "Bisnis Digital",
    readTime: "4 min read"
  },
  {
    id: "2",
    slug: "tips-seo-dasar-untuk-toko-online-baru",
    title: "5 Tips SEO Dasar untuk Toko Online yang Baru Rilis",
    excerpt: "Baru saja meluncurkan toko online? Terapkan 5 langkah SEO sederhana ini agar produk Anda lebih mudah ditemukan oleh calon pembeli di halaman pencarian Google.",
    content: `
      <p>Punya website toko online yang bagus tidak akan berguna jika tidak ada yang mengunjunginya. Di sinilah peran SEO (Search Engine Optimization) menjadi sangat penting.</p>

      <h2>1. Riset Keyword yang Tepat</h2>
      <p>Gunakan kata kunci yang spesifik (long-tail keywords). Daripada bersaing di kata "Sepatu", lebih baik gunakan "Sepatu lari pria ukuran 42 Jakarta".</p>

      <h2>2. Optimasi Judul dan Deskripsi Produk</h2>
      <p>Jangan copy-paste deskripsi dari supplier! Tulis deskripsi unik yang menarik dan selipkan kata kunci target Anda secara natural.</p>

      <h2>3. Kompresi Gambar</h2>
      <p>Website lambat akan dibenci oleh pengunjung dan Google. Pastikan ukuran file gambar produk Anda di bawah 200KB tanpa mengorbankan kualitas visualnya. Gunakan format WebP jika memungkinkan.</p>
      
      <p>Menerapkan SEO memang butuh waktu dan kesabaran, tapi hasilnya akan mendatangkan trafik gratis (organik) dalam jangka panjang.</p>
    `,
    date: "15 Feb 2025",
    author: "Tim WebCraft",
    category: "Marketing",
    readTime: "5 min read"
  },
  {
    id: "3",
    slug: "pilih-website-atau-aplikasi-mobile",
    title: "Website vs Aplikasi Mobile: Mana yang Harus Diprioritaskan?",
    excerpt: "Banyak startup dan perusahaan bingung menentukan apakah harus membuat website terlebih dahulu atau langsung mengembangkan aplikasi mobile. Temukan jawabannya di sini.",
    content: `
      <p>Ini adalah pertanyaan klasik yang sering ditanyakan klien kepada kami: "Sebaiknya bikin web dulu atau aplikasi dulu?" Jawabannya sangat bergantung pada model bisnis dan target pasar Anda.</p>

      <h2>Kapan Harus Memilih Website?</h2>
      <p>Website (terutama yang responsif/mobile-friendly) adalah pilihan terbaik untuk <strong>mendapatkan pelanggan baru (Acquisition)</strong>. Karena website mudah ditemukan via Google Search dan tidak mengharuskan pengguna mengunduh apapun.</p>
      <ul>
        <li>Budget lebih terjangkau.</li>
        <li>Bagus untuk SEO dan brand awareness.</li>
        <li>Mudah dibagikan via link.</li>
      </ul>

      <h2>Kapan Harus Membuat Aplikasi Mobile?</h2>
      <p>Aplikasi Mobile (Android/iOS) sangat ideal untuk <strong>mempertahankan pelanggan setia (Retention)</strong>. Jika layanan Anda mengharuskan pengguna login setiap hari (seperti e-wallet, ojek online, atau alat produktivitas), maka aplikasi adalah wajib.</p>
      <ul>
        <li>Akses fitur native (Kamera, GPS, Push Notification).</li>
        <li>Performa lebih cepat dan mulus.</li>
        <li>Meningkatkan loyalitas brand (ikon selalu ada di layar HP).</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Sebagai aturan praktis: Bangun website terlebih dahulu untuk memvalidasi ide dan mencari pasar. Jika transaksi sudah stabil dan Anda butuh fitur tingkat lanjut, barulah ekspansi ke Aplikasi Mobile.</p>
    `,
    date: "05 Mar 2025",
    author: "Tim WebCraft",
    category: "Teknologi",
    readTime: "6 min read"
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
