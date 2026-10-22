import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, company, projectTypes, budgetRange, timeTarget, message } = req.body || {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "Field wajib harus diisi." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const selectedProjects = Array.isArray(projectTypes) ? projectTypes.join(", ") : projectTypes || "-";

    const mailOptions = {
      from: `Fractabase Form <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Brief Proyek Baru] ${name} - ${selectedProjects}`,
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #38bdf8; padding-bottom: 8px;">Brief Proyek Masuk</h2>

        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px;">Nama: </td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email: </td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>

          <tr>
            <td style="padding: 8px 0; font-weight: bold;">WhatsApp / No. Telp: </td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>

          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Perusahaan: </td>
            <td style="padding: 8px 0;">${company || "-"}</td>
          </tr>

          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Jenis Proyek: </td>
            <td style="padding: 8px 0;">${selectedProjects}</td>
          </tr>

          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Estimasi Budget: </td>
            <td style="padding: 8px 0;">${budgetRange || "-"}</td>
          </tr>

          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Target Waktu: </td>
            <td style="padding: 8px 0;">${timeTarget || "-"}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #38bdf8;">
          <p style="margin: 0 0 6px 0; font-weight: bold;">Pesan / Brief: </p>
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>

        <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">
          Email ini dikirim otomatis dari formulir website Fractabase Interactive.
        </p>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email berhasil terkirim" });
  } catch (error) {
    console.error("Nodemailer error: ", error);

    return res.status(500).json({
      success: false,
      message: "Gagal mengirim email",
      error: error.message,
    });
  }
}
