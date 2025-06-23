import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


// Basic in-memory rate limiter _______________________

const rateLimitWindow = 60 * 1000;
const maxRequestsPerIP = 2;
const ipStore = new Map<string, { count: number; lastRequest: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipStore.get(ip);

  if (!record) {
    ipStore.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  if (now - record.lastRequest > rateLimitWindow) {
    ipStore.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  if (record.count >= maxRequestsPerIP) {
    return true;
  }

  ipStore.set(ip, { count: record.count + 1, lastRequest: now });
  return false;
}

// __________________________________________________________



export async function POST(req: Request) {

    const ip = req.headers.get('x-forwarded-for') || 'unknown';

    if(isRateLimited(ip)){

        return NextResponse.json(
            { message: 'Too many requests. Please try again later.' },
            { status: 429 }
        )
    }

    const body = await req.json()
    const {name, email, service, mobile, message} = body

    if(!name || !email || !mobile || !service){
        return NextResponse.json(
            { message: 'Missing required fields' },
            { status: 400 }
        )
    }


    try {
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SENDER_MAIL!,
                pass: process.env.ACCESS_KEY!,
            }
        })

        await transporter.sendMail({
            from: `"ADS Enquiry" <${process.env.SENDER_MAIL}>`,
            to: process.env.ADMIN_MAIL!,
            subject: 'New Contact Form Message',
            html: `
                <h3>New Enquiry Received</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone No:</strong> ${mobile}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong><br>${message}</p>
      `,
        })

        return NextResponse.json(
            { message: 'Email sent successfully'},
            { status: 200},
        )
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Unexpected error occurred' }, { status: 500 });
        
    }
}