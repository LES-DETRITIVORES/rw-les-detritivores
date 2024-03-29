import * as nodemailer from 'nodemailer'

export async function sendEmail({ to, cc, bcc, subject, text, html }) {
  console.log('Sending email to:', to)

  // create reusable transporter object using office365 for SMTP
  const office365 = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    auth: {
      user: process.env.OFFICE365_USER,
      pass: process.env.OFFICE365_PWD,
    },
    secureConnection: false,
    tls: { ciphers: 'SSLv3' },
  })

  // send mail with defined transport object
  const email = await office365.sendMail({
    from: 'LES DETRITIVORES <bonjour@les-detritivores.co>',
    to: Array.isArray(to) ? to : [to], // list of receivers
    cc: Array.isArray(cc) ? cc : [cc],
    bcc: Array.isArray(bcc) ? bcc : [bcc],
    subject, // Subject line
    text, // plain text body
    html, // html body
  })
  return email
}
