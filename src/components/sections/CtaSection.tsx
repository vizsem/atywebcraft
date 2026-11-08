"use client";

import { FormEvent, useState } from "react";

export function CtaSection() {
  const [btnText, setBtnText] = useState("Kirim & Konsultasi Gratis 🚀");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    // Kirim ke backend API secara paralel tanpa menghambat user
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Gagal menyimpan ke API, melanjutkan ke WhatsApp:", err);
    }

    setIsLoading(false);
    setBtnText("✅ Pesan Terkirim! Membuka WhatsApp...");
    setIsSubmitted(true);

    const message = [
      `Halo ATY0 WebCraft, saya ingin konsultasi proyek:`,
      `• Nama: ${payload.name}`,
      `• WhatsApp: ${payload.phone}`,
      `• Email: ${payload.email}`,
      `• Layanan: ${payload.service}`,
      `• Kebutuhan: ${payload.message}`,
    ].join("\n");

    window.open(`https://wa.me/6285790565666?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/*  KONTAK / CTA  */}
<section id="kontak">
  <div className="cta-box">
    <div className="section-tag centered">Mulai Sekarang</div>
    <h2>Siap Punya Website<br/>Impian Anda? 🚀</h2>
    <p>Konsultasi gratis, tidak ada kewajiban. Ceritakan kebutuhan Anda dan kami akan siapkan proposal terbaik dalam 24 jam.</p>
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input name="name" type="text" placeholder="Nama lengkap Anda" required />
        <input name="phone" type="tel" placeholder="Nomor WhatsApp" required />
      </div>
      <input name="email" type="email" placeholder="Alamat email" required />
      <select name="service" defaultValue="" required>
        <option value="" disabled>Jenis layanan yang dibutuhkan</option>
        <optgroup label="🌐 Website">
          <option>Landing Page</option>
          <option>Website Perusahaan</option>
          <option>Toko Online (E-commerce)</option>
          <option>Website + SEO</option>
        </optgroup>
        <optgroup label="📱 Aplikasi Mobile">
          <option>Aplikasi Android</option>
          <option>Aplikasi iOS</option>
          <option>Aplikasi Android + iOS (Flutter)</option>
          <option>Aplikasi Custom / Enterprise</option>
        </optgroup>
        <optgroup label="🔧 Lainnya">
          <option>Maintenance & Support</option>
          <option>Konsultasi Digital</option>
        </optgroup>
      </select>
      <textarea name="message" placeholder="Ceritakan bisnis dan kebutuhan website Anda..." required></textarea>
      <button 
        type="submit"
        disabled={isLoading || isSubmitted}
        className="btn-submit disabled:opacity-80" 
        style={isSubmitted ? { background: "linear-gradient(135deg, #11998e, #38ef7d)", color: "#fff" } : {}}
      >
        {isLoading ? "Mengirim pesan..." : btnText}
      </button>
    </form>
  </div>
</section>
    </>
  );
}
