"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Berapa lama estimasi proses pembuatan website atau aplikasi?",
    answer: "Untuk Landing Page sederhana membutuhkan waktu 3–5 hari kerja. Website Perusahaan (Company Profile) dan Toko Online rata-rata membutuhkan 7–14 hari kerja. Sedangkan untuk Aplikasi Mobile (Android & iOS) atau Sistem Custom yang lebih kompleks biasanya memakan waktu 3–6 minggu tergantung cakupan fitur dan integrasi yang diinginkan.",
  },
  {
    question: "Apakah biaya pembuatan sudah termasuk domain, hosting, dan SSL?",
    answer: "Ya, seluruh paket website di ATY0 WebCraft sudah mencakup gratis domain (.com / .id / .my.id) untuk tahun pertama, cloud hosting/server berkecepatan tinggi, sertifikat keamanan SSL gratis selamanya, serta integrasi email profesional.",
  },
  {
    question: "Bagaimana sistem pembayaran dan termin proyek?",
    answer: "Kami menerapkan sistem pembayaran bertahap (termin) yang aman dan transparan: Down Payment (DP) sebesar 50% di awal saat penandatanganan kesepakatan/briefing, dan pelunasan 50% sisanya dibayarkan setelah website selesai diuji, disetujui, dan siap diluncurkan secara live.",
  },
  {
    question: "Apakah saya bisa mengelola atau mengedit konten website sendiri?",
    answer: "Tentu saja! Kami merancang website yang mudah dikelola. Kami juga menyediakan sesi training atau panduan penggunaan gratis agar Anda dan tim dapat mengunggah artikel, mengganti foto produk, mengubah nomor kontak, dan memperbarui harga tanpa memerlukan keahlian coding.",
  },
  {
    question: "Apakah website sudah dioptimasi untuk SEO dan ramah pengguna ponsel (HP)?",
    answer: "Pasti. Semua karya ATY0 WebCraft dibangun dengan pendekatan Mobile-First yang 100% responsif di semua ukuran layar smartphone, tablet, maupun laptop. Kami juga mengimplementasikan kaidah Core Web Vitals, Schema JSON-LD, sitemap otomatis, dan meta tag SEO agar website Anda mudah ditemukan di pencarian Google.",
  },
  {
    question: "Apakah ada garansi dan layanan pemeliharaan (maintenance) setelah rilis?",
    answer: "Kami memberikan garansi perbaikan bug dan error gratis selama 30 hingga 90 hari setelah peluncuran. Kami juga menyediakan layanan maintenance bulanan opsional bagi bisnis yang membutuhkan backup rutin, pembaruan keamanan berkala, dan penambahan fitur berkelanjutan.",
  },
  {
    question: "Bisnis saya berada di luar Kediri atau luar Jawa, apakah bisa bekerja sama?",
    answer: "Sangat bisa! Sebagian besar klien kami berasal dari berbagai kota di Indonesia. Seluruh proses komunikasi, konsultasi, presentasi desain, dan demo berkala dapat dilakukan secara fleksibel dan efektif melalui Google Meet, Zoom, dan WhatsApp.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="py-20">
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="text-center mb-12">
            <div className="section-tag centered inline-flex items-center gap-1.5 justify-center">
              <HelpCircle className="w-3.5 h-3.5" /> Pertanyaan Populer
            </div>
            <h2 className="section-title centered text-3xl sm:text-4xl font-bold font-display mt-2 mb-4">
              Kerap Ditanyakan seputar <span className="text-gradient">Layanan Kami</span>
            </h2>
            <p className="section-desc centered mx-auto text-muted max-w-xl">
              Jawaban cepat untuk hal-hal yang sering ditanyakan sebelum memulai proyek website atau aplikasi bersama ATY0 WebCraft.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-surface border-primary/50 shadow-lg shadow-primary/5"
                      : "bg-surface/50 border-border/80 hover:border-primary/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-text focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-primary text-white rotate-180"
                          : "bg-secondary text-muted"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                      isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-muted text-sm sm:text-base leading-relaxed border-t border-border/40 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-8 rounded-2xl bg-card border border-border/80">
            <p className="text-text font-medium mb-2">Masih punya pertanyaan lain yang belum terjawab?</p>
            <p className="text-muted text-xs sm:text-sm mb-5">Tim kami siap diajak berdiskusi gratis tanpa kewajiban apa pun.</p>
            <a
              href="https://wa.me/6285790565666?text=Halo%20ATY0%20WebCraft%2C%20saya%20ingin%20tanya%20seputar%20pembuatan%20website%20dan%20aplikasi."
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta inline-flex items-center gap-2 text-sm"
            >
              Tanyakan Langsung via WhatsApp 💬
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

