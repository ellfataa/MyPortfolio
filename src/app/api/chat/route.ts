import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Pesan tidak boleh kosong." },
        { status: 400 }
      );
    }

    const portfolioContext = `
Informasi pemilik portfolio:

Nama:
Luthfi Emillulfata

Latar belakang:
Fresh graduate Teknik Informatika dari Universitas Jenderal Soedirman.

Minat:
Frontend Development, Web Development, AI Integration, Machine Learning, dan pengembangan aplikasi modern.

Skill:
- Next.js
- React.js
- Tailwind CSS
- JavaScript
- TypeScript
- Python
- Machine Learning
- Firebase
- Laravel
- GitHub
- REST API

Project:
1. Website Portfolio
   Website portfolio responsive menggunakan Next.js, Tailwind CSS, dan chatbot AI Gemini.

2. Sistem Prediksi Konsumsi Listrik
   Sistem machine learning untuk prediksi konsumsi listrik menggunakan berbagai model regresi.

3. Aplikasi Web saat Magang
   Pengembangan aplikasi web dengan pengalaman menggunakan ngrok untuk kebutuhan testing atau tunneling.

Tujuan portfolio:
Menampilkan profil, skill, project, pengalaman, dan kontak profesional.
`;

    const prompt = `
Kamu adalah chatbot AI khusus untuk website portfolio milik Luthfi.

Gunakan informasi portfolio berikut sebagai sumber utama:
${portfolioContext}

Aturan menjawab:
1. Jawab hanya pertanyaan yang berkaitan dengan portfolio, skill, project, pengalaman, pendidikan, teknologi, karier, atau kontak profesional.
2. Jika user bertanya hal random di luar konteks portfolio, tolak dengan sopan.
3. Jangan mengarang pengalaman, project, skill, atau informasi pribadi yang tidak tersedia.
4. Jawaban harus singkat, sopan, profesional, dan mudah dipahami.
5. Maksimal 2 paragraf.
6. Gunakan bahasa yang sama dengan pertanyaan user.
7. Jika user bertanya apakah Luthfi cocok untuk suatu posisi, jawab berdasarkan skill dan project yang tersedia.

Jika pertanyaan tidak relevan, jawab:
"Maaf, saya hanya dapat membantu menjawab pertanyaan terkait portfolio ini."

Pertanyaan user:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        maxOutputTokens: 200,
        temperature: 0.5,
      },
    });

    return Response.json({
      reply: response.text,
    });
  } catch (error) {
        console.error(error);

        const errorMessage =
            error instanceof Error ? error.message.toLowerCase() : "";

        if (
            errorMessage.includes("429") ||
            errorMessage.includes("quota") ||
            errorMessage.includes("rate limit") ||
            errorMessage.includes("resource exhausted")
        ) {
            return Response.json(
            {
                error:
                "Limit penggunaan AI sedang penuh. Silakan coba lagi beberapa saat nanti.",
            },
            { status: 429 }
            );
        }

        return Response.json(
            { error: "Terjadi kesalahan pada server." },
            { status: 500 }
        );
    }
}