import { db } from 'src/lib/db'
import { sendEmail } from 'src/lib/email'

export const forms = () => {
  return db.form.findMany()
}

export const form = ({ id }) => {
  return db.form.findUnique({
    where: { id },
  })
}

export const createForm = ({ input }) => {
  return db.form.create({
    data: input,
  })
}

export const updateForm = ({ id, input }) => {
  return db.form.update({
    data: input,
    where: { id },
  })
}

export const deleteForm = ({ id }) => {
  return db.form.delete({
    where: { id },
  })
}

export const emailForm = async ({ id }) => {
  const form = await db.form.findUnique({
    where: { id },
  })

  const subject = '[LES DETRITIVORES] #' + form.id + ' - ' + form.subject
  const text =
    'Bonjour ' +
    form.firstname +
    ' !\n\n' +
    'La coopérative inclusive LES DETRITIVORES vous confirme la bonne réception de votre demande. ' +
    "Nous ne manquerons pas d'y répondre au plus vite.\n\n" +
    '------------------------------------------------------\n' +
    'Numéro de demande : ' +
    form.id +
    '\n' +
    (form.company ? 'Société : ' + form.company + '\n' : '') +
    'Contact : ' +
    form.firstname +
    ' ' +
    form.lastname +
    '\n' +
    'Adresse : ' +
    form.location +
    '\n' +
    'Mél : ' +
    form.email +
    '\n' +
    'Tél : ' +
    form.phone +
    '\n' +
    'Demande : ' +
    form.subject +
    '\n' +
    'Message : ' +
    form.message +
    '\n' +
    '-------------------------------------------------------\n\n' +
    "N'hésitez pas à nous contacter pour toutes autres questions :\n" +
    'LES DETRITIVORES\n' +
    '65 quai de Brazza 33100 Bordeaux\n' +
    'bonjour@les-detritivores.co | 05 57 99 50 99\n' +
    'https://les-detritivores.co'

  const html =
    'Bonjour ' +
    form.firstname +
    ' !<br/><br/>' +
    'La coopérative inclusive LES DETRITIVORES vous confirme la bonne réception de votre demande. ' +
    "Nous ne manquerons pas d'y répondre au plus vite.<br/><br/>" +
    '<hr/>' +
    'Numéro de demande : ' +
    form.id +
    '<br/>' +
    (form.company ? 'Société : ' + form.company + '<br/>' : '') +
    'Contact : ' +
    form.firstname +
    ' ' +
    form.lastname +
    '<br/>' +
    'Adresse : ' +
    form.location +
    '<br/>' +
    'Mél : ' +
    form.email +
    '<br/>' +
    'Tél : ' +
    form.phone +
    '<br/>' +
    'Demande : ' +
    form.subject +
    '<br/>' +
    'Message : ' +
    form.message +
    '<br/>' +
    '<hr/><br/>' +
    "N'hésitez pas à nous contacter pour toutes autres questions :<br/>" +
    'LES DETRITIVORES<br/>' +
    '65 quai de Brazza 33100 Bordeaux<br/>' +
    'bonjour@les-detritivores.co | 05 56 67 14 47<br/>' +
    'https://les-detritivores.co'

  const email = await sendEmail({
    to: form.email,
    bcc: ['bonjour@les-detritivores.co'],
    subject,
    text,
    html,
  })
  return email.messageId
}
