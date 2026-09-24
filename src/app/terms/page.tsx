import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Syarat dan ketentuan penggunaan website serta layanan ATY0.",
  alternates: {
    canonical: "https://www.aty0.com/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="blog-article container max-w-3xl min-h-[70vh] text-muted">
      <header className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4">Legal</p>
        <h1 className="font-bold font-display mb-6">Terms of Service</h1>
        <p className="text-lg">Terakhir diperbarui: 25 September 2026</p>
      </header>

      <div className="space-y-8 text-lg leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-text [&>h2]:mt-10 [&>h2]:mb-3 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2">
        <p>Selamat datang di ATY0. Dengan mengakses https://www.aty0.com, Anda menyetujui syarat dan ketentuan ini. Jika Anda tidak menyetujui bagian tertentu, mohon tidak menggunakan website atau layanan kami.</p>

        <h2>1. Penggunaan Website</h2>
        <p>Website ini menyediakan informasi tentang jasa pembuatan website, aplikasi mobile, konsultasi digital, dan konten edukasi. Anda setuju menggunakan website secara wajar, tidak mengganggu keamanan atau ketersediaannya, dan tidak menggunakan konten untuk tujuan yang melanggar hukum.</p>

        <h2>2. Informasi dan Konten</h2>
        <p>Kami berusaha menjaga informasi tetap akurat dan terbaru, tetapi isi website dapat berubah tanpa pemberitahuan. Artikel blog disediakan untuk informasi umum dan tidak menggantikan nasihat hukum, keuangan, keamanan, atau profesional yang disesuaikan dengan kondisi Anda.</p>

        <h2>3. Konsultasi dan Penawaran</h2>
        <p>Pengiriman formulir atau pesan tidak otomatis membentuk kontrak kerja. Ruang lingkup, harga, jadwal, hak atas hasil kerja, dan kewajiban masing-masing pihak akan disepakati secara tertulis sebelum proyek dimulai. Penawaran dapat berubah berdasarkan kebutuhan dan kompleksitas pekerjaan.</p>

        <h2>4. Hak Kekayaan Intelektual</h2>
        <p>Nama, logo, desain, tulisan, kode, dan materi website milik ATY0 atau pemberi lisensinya dilindungi oleh hukum yang berlaku, kecuali dinyatakan lain. Anda tidak boleh menyalin, menjual kembali, mengubah, atau mendistribusikan materi website tanpa izin tertulis.</p>

        <h2>5. Tautan dan Layanan Eksternal</h2>
        <p>Website dapat memuat tautan menuju layanan pihak ketiga seperti WhatsApp, Google Maps, atau website portfolio. Kami tidak mengendalikan kebijakan, ketersediaan, atau isi layanan tersebut. Penggunaan layanan pihak ketiga tunduk pada ketentuan mereka masing-masing.</p>

        <h2>6. Batasan Tanggung Jawab</h2>
        <p>Sejauh diizinkan hukum, ATY0 tidak bertanggung jawab atas kerugian yang timbul dari ketergantungan pada informasi umum di website, gangguan layanan pihak ketiga, atau akses yang tidak sah di luar kendali wajar kami. Kami tidak menjamin website akan selalu tersedia tanpa gangguan.</p>

        <h2>7. Perubahan Ketentuan</h2>
        <p>Kami dapat memperbarui syarat ini ketika layanan atau kebutuhan hukum berubah. Perubahan berlaku sejak dipublikasikan di halaman ini. Penggunaan website setelah perubahan berarti Anda menerima versi terbaru.</p>

        <h2>8. Hukum yang Berlaku</h2>
        <p>Syarat ini ditafsirkan berdasarkan hukum yang berlaku di Republik Indonesia. Setiap perselisihan akan diupayakan penyelesaiannya terlebih dahulu melalui komunikasi dan musyawarah.</p>

        <h2>9. Hubungi Kami</h2>
        <p>Pertanyaan mengenai syarat layanan dapat dikirim ke halo@webcraft.id atau WhatsApp +62 857-9056-5666.</p>
      </div>
    </article>
  );
}
