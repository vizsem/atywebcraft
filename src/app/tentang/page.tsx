export default function TentangPage() {
  return (
    <div className="container py-24 min-h-[70vh]">
      <h1 className="text-5xl font-bold font-syne mb-8 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Tentang</span> WebCraft</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted">
        <p>
          <strong>WebCraft</strong> adalah studio pengembangan perangkat lunak (software development studio) yang berdedikasi untuk membantu UMKM, perusahaan, dan startup di Indonesia dalam melakukan transformasi digital.
        </p>
        <p>
          Didirikan dengan semangat untuk memberikan solusi teknologi yang efektif dan efisien, kami percaya bahwa setiap bisnis berhak memiliki kehadiran digital yang profesional tanpa harus melalui proses yang rumit dan biaya yang tidak masuk akal.
        </p>
        <p>
          Tim kami terdiri dari desainer UI/UX, pengembang web, dan engineer aplikasi mobile yang berpengalaman. Kami tidak hanya menulis kode, tapi kami mendengarkan, merancang, dan membangun produk yang berorientasi pada hasil (conversion-focused).
        </p>
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-text mb-4">Visi & Misi</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Menjadi mitra teknologi terpercaya bagi bisnis di Indonesia.</li>
            <li>Menghasilkan produk digital yang cepat, aman, dan mudah digunakan.</li>
            <li>Memberikan layanan purna-jual (maintenance) yang dapat diandalkan.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
