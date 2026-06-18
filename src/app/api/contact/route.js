import { NextResponse } from 'next/server';
import sendContactEmail from '@/lib/emailService';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;
        
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
        }
        
        const result = await sendContactEmail(name, email, message);
        
        if (result.success) {
            return NextResponse.json({ success: true, message: 'Message sent successfully via Email!' }, { status: 200 });
        } else {
            return NextResponse.json({ 
                success: false, 
                message: 'Failed to deliver message via email backend.' 
            }, { status: 500 });
        }
    } catch (error) {
        console.error("Error in contact route:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
