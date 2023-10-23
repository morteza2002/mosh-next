
import { Resend } from 'resend';
import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: '...', // Your sender email
    to: 'hadi-tech@gmail.com', // Recipient's email
    subject: '...', // Email subject
    react: <WelcomeTemplate name="amir" /> // Use your WelcomeTemplate component here
  });

  return NextResponse.json({});
}
