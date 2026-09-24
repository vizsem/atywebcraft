import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kebijakan privasi ATY0 tentang pengumpulan, penggunaan, dan perlindungan data pengunjung website.",
  alternates: {
    canonical: "https://www.aty0.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="blog-article container max-w-3xl min-h-[70vh] text-muted">
      <header className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4">Legal</p>
        <h1 className="font-bold font-display mb-6">Privacy Policy</h1>
        <p className="text-lg">Terakhir diperbarui: 25 September 2026</p>
      </header>

      <div className="space-y-8 text-lg leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-text [&>h2]:mt-10 [&>h2]:mb-3 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2">
        <p>ATY0 ("kami") menghargai privasi setiap pengunjung dan pelanggan. Kebijakan ini menjelaskan jenis informasi yang dapat kami terima melalui https://www.aty0.com, cara kami menggunakannya, serta pilihan yang tersedia bagi Anda.</p>

        <h2>1. Informasi yang Kami Kumpulkan</h2>
        <p>Kami dapat menerima informasi yang Anda berikan secara langsung, seperti nama, nomor WhatsApp, alamat email, jenis layanan yang diminati, dan isi pesan ketika Anda mengisi formulir konsultasi atau menghubungi kami. Kami juga dapat menerima data teknis umum seperti alamat IP, jenis perangkat, browser, halaman yang dikunjungi, dan waktu akses.</p>

        <h2>2. Cara Kami Menggunakan Informasi</h2>
        <p>Informasi digunakan untuk merespons pertanyaan, menyiapkan konsultasi atau penawaran, memberikan layanan yang diminta, memperbaiki website, menjaga keamanan, dan memenuhi kewajiban hukum. Kami tidak menjual data pribadi pengunjung kepada pihak lain.</p>

        <h2>3. Cookies dan Layanan Pihak Ketiga</h2>
        <p>Website dapat menggunakan cookies atau teknologi serupa untuk menjaga fungsi dasar, memahami penggunaan halaman, dan meningkatkan pengalaman. Kami juga dapat menggunakan penyedia hosting, analitik, komunikasi, atau layanan teknis yang memproses data sesuai kebutuhan layanan dan kebijakan mereka masing-masing.</p>

        <h2>4. Berbagi Informasi</h2>
        <p>Kami hanya membagikan informasi kepada penyedia layanan yang membantu operasional, ketika diwajibkan oleh hukum, atau ketika diperlukan untuk melindungi keamanan dan hak kami. Kami meminta pihak yang membantu kami untuk menjaga informasi secara wajar dan hanya menggunakannya sesuai tujuan.</p>

        <h2>5. Penyimpanan dan Keamanan</h2>
        <p>Kami berupaya menggunakan langkah teknis dan organisasi yang wajar untuk melindungi informasi dari akses, perubahan, atau pengungkapan yang tidak sah. Tidak ada transmisi internet yang sepenuhnya bebas risiko, sehingga kami tidak dapat menjamin keamanan absolut.</p>

        <h2>6. Hak dan Pilihan Anda</h2>
        <p>Anda dapat meminta informasi mengenai data yang kami simpan, meminta perbaikan, meminta penghapusan jika memungkinkan, atau berhenti menerima komunikasi pemasaran. Untuk permintaan tersebut, hubungi kami melalui halo@webcraft.id. Kami dapat meminta verifikasi yang wajar sebelum memproses permintaan.</p>

        <h2>7. Privasi Anak</h2>
        <p>Website ini ditujukan untuk kebutuhan bisnis umum dan tidak secara sengaja mengumpulkan data pribadi anak tanpa persetujuan pihak yang berwenang. Jika Anda mengetahui adanya data yang terkumpul secara tidak sengaja, silakan hubungi kami.</p>

        <h2>8. Perubahan Kebijakan</h2>
        <p>Kami dapat memperbarui kebijakan ini ketika praktik, layanan, atau kewajiban hukum berubah. Versi terbaru akan dipublikasikan di halaman ini dengan tanggal pembaruan yang sesuai.</p>

        <h2>9. Hubungi Kami</h2>
        <p>Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi ATY0 melalui email halo@webcraft.id atau WhatsApp +62 857-9056-5666.</p>
      </div>
    </article>
  );
}
