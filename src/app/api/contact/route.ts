import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validasi input dasar
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Semua kolom wajib diisi." },
        { status: 400 }
      );
    }

    // Validasi format email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format email tidak valid." },
        { status: 400 }
      );
    }

    // Jika memiliki webhook URL seperti Discord/Slack/Telegram/Resend, bisa dipicu di sini
    console.log("[Kontak Masuk]:", {
      name,
      phone,
      email,
      service: service || "Tidak disebutkan",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Pesan berhasil diterima. Tim kami akan menghubungi Anda segera.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API Kontak Error]:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal pada server." },
      { status: 500 }
    );
  }
}

