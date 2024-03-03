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
  const phone = data.phone

  const msg = {
    to: addressee,
    from: {
      name: name,
      email: addressee,
    },
    subject: 'Consulta/Contacto desde The Alpaca Factory.',
    html: `
      <div style=" padding-top: 5px; padding-bottom: 5px; background-color: #b8b8b8; border-radius: 20px; ">
        <div style=" text-align: center;">
          <h1 style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Hola</h1> 
          <h1 style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">The Alpaca Factory</h1> 
        </div>
        <div style="display: flex; justify-content: center; margin: 20px;">
          <p style="font-family:'Courier New', Courier, monospace; font-weight: bold;">${message}</p>
        </div>

        <div style="margin: 10px 20px; background-color: #f9f9ff; padding: 5px; border-radius: 20px;">
          <div style="display: flex; align-items: center; margin-left: 10px;">
            <p style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                Nombre: <span style="font-weight: bold;">${name}</span> 
            </p>
          </div>
          <div style="display: flex; align-items: center; margin-left: 10px;">
            <p style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                Número: <span style="font-weight: bold;">${phone}</span> 
            </p>
          </div>
          <div style="display: flex; align-items: center; margin-left: 10px;">
              <p style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                  Correo electrónico: <span style="font-weight: bold;">${email}</span> 
              </p>
          </div>
        </div>
      </div>
    `
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