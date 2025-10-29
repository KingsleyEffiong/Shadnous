import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_inoCrJ3c_3XpC2c22EpfhaLpc4BJCg4nN");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string;
    const homeAddress = formData.get("homeAddress") as string;
    const txId = formData.get("txId") as string;
    const tier = formData.get("tier") as string;
    const file = formData.get("file") as File | null;

    let attachment: any[] = [];
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachment.push({
        filename: file.name,
        content: buffer.toString("base64"),
      });
    }

    await resend.emails.send({
      from: "Membership Form <onboarding@resend.dev>",
      to: "shadnous3@gmail.com", // You can add multiple recipients if needed
      subject: `New Membership Submission (${tier})`,
      html: `
        <h3>New Membership Form Submission</h3>
        <p><b>Tier:</b> ${tier}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Home Address:</b> ${homeAddress}</p>
        <p><b>Transaction ID:</b> ${txId}</p>
      `,
      attachments: attachment,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, error });
  }
}
