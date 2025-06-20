import { NextResponse } from "next/server";
import { Resend } from "resend";


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


const resend = new Resend(process.env.ACCESS_KEY)

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
        const contactMail = process.env.CONTACT_MAIL;
        if (!contactMail) {
            return NextResponse.json(
                { message: 'Server Configuration Error'},
                { status: 500}
            )
        }

        const { data, error } = await resend.emails.send({
            from: `Contact Form <ashadesamson99@gmail.com>`,
            to: contactMail,
            subject: 'New Contact Message',
            html: `
                <h2>New Contact Submission</h2>
                <p><strong>Name:</strong>Name: ${name}</p>
                <p><strong>Email:</strong>Email: ${email}</p>
                <p><strong>Email:</strong>Phone No: ${mobile}</p>
                <p><strong>Email:</strong>Service Required: ${service}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `,
        });


        if (error) {
        console.error(error)
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json(
            { message: 'Email sent successfully'},
            { status: 200},
        )
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Unexpected error occurred' }, { status: 500 });
        
    }
}