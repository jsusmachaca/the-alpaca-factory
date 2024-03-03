import { APIRoute } from "astro"
import sgMail from "@sendgrid/mail"

const API_KEY = import.meta.env.API_KEY
const addressee = import.meta.env.ADDRESSEE

export async function POST({ request }) {
    sgMail.setApiKey(API_KEY)
    const data = await request.json()
    const email = data.email
    const name = data.name
    const message = data.message
    const tel = 9999898
    console.log(data)

    const msg = {
        to: addressee,
        from: {
            name: name,
            email: email,
        },
        subject: 'Sending with Twilio SendGrid is Fun',
        text: `${message}
        ----------------------------------------------------------------------
        From: ${name} • email: ${email} • tel: ${tel}
        `,
        html: `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
            /[\r\n]/g,
            '<br>'
        )}</div>`
    }
    sgMail.send(msg)
    .then(() => {
        console.log("Mail Send")
    })
    .catch(err => {
        console.error(err)
    })
    return new Response (
        JSON.stringify({ success: true })
    )
}