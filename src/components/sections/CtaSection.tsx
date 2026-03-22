"use client";

import { useState } from "react";

export function CtaSection() {
  const [btnText, setBtnText] = useState("Kirim & Konsultasi Gratis 🚀");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setBtnText("✅ Pesan Terkirim! Kami akan hubungi segera.");
    setIsSubmitted(true);
  };

  return (
    <>
      {/*  KONTAK / CTA  */}
<section id="kontak">
  <div className="cta-box">
    <div className="section-tag centered">Mulai Sekarang</div>
    <h2>Siap Punya Website<br/>Impian Anda? 🚀</h2>
    <p>Konsultasi gratis, tidak ada kewajiban. Ceritakan kebutuhan Anda dan kami akan siapkan proposal terbaik dalam 24 jam.</p>
    <div className="contact-form">
      <div className="form-row">
        <input type="text" placeholder="Nama lengkap Anda" />
        <input type="tel" placeholder="Nomor WhatsApp" />
      </div>
      <input type="email" placeholder="Alamat email" />
      <select>
        <option value="" disabled selected>Jenis layanan yang dibutuhkan</option>
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
      <textarea placeholder="Ceritakan bisnis dan kebutuhan website Anda..."></textarea>
      <button 
        className="btn-submit" 
        onClick={handleSubmit}
        style={isSubmitted ? { background: "linear-gradient(135deg, #11998e, #38ef7d)", color: "#fff" } : {}}
      >
        {btnText}
      </button>
    </div>
  </div>
</section>
    </>
  );
}
