import { Form, FormError, Label, TextField, EmailField, TelField, SelectField, TextAreaField, Submit } from '@redwoodjs/forms'
import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import { Dialog } from '@headlessui/react'

const options = [
  { label: 'Choisir un sujet...' },
  { label: 'Organiser le tri des biodéchets' },
  { label: 'Installer un site de compostage' },
  { label: 'Acheter du compost' },
  { label: "Postuler à une offre d'emploi" },
  { label: 'Recruter un futur talent' },
  { label: 'Rejoindre la coopérative' },
  { label: 'Investir dans la transition' },
  { label: 'Autre demande' },
]

const CREATE_FORM = gql`
  mutation CreateFormMutation($input: CreateFormInput!) {
    form: createForm(input: $input) {
      id
    }
  }
`

const EMAIL_FORM = gql`
  mutation EmailFormMutation($id: Int!) {
    email: emailForm(id: $id)
  }
`

const SiteForm = () => {
  const [submit, setSubmit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [createForm, { loading, error }] = useMutation(CREATE_FORM)

  const [emailForm] = useMutation(EMAIL_FORM, {
    onCompleted: (result) => {
      //console.log(JSON.stringify(result.email))
      setIsOpen(true)
    },
  })

  const formSubmit = async (data) => {
    setSubmit(true)
    console.log(JSON.stringify(data))
    /* Save form */
    const form = await createForm({ variables: { input: data } })
    console.log(JSON.stringify(form))

    /* Send email form */
    const email = await emailForm({ variables: { id: form.data.form.id } })
    console.log(JSON.stringify(email))
    setSubmit(false)
  }

  return (
    <div>
      <Dialog as="div" className="relative z-10" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title as="h3"
                className="text-lg font-medium leading-6 text-gray-900">Demande enregistrée</Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Un courriel de confirmation vient de vous être envoyé.
                </p>
              </div>
              <div className="mt-4">
                <button onClick={() => setIsOpen(false)}
                  className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
                    Valider
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>

      <Form onSubmit={formSubmit} className="max-w-lg mx-auto text-md font-normal">
        <FormError error={error}/>
        <div className="border-2 border-b-0 border-white rounded-t-lg p-8 mt-3 space-y-3">
          <div>
            <Label 
              name="subject"
              className="block">
              Demande
            </Label>
            <SelectField 
              name="subject"
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-none"
              errorClassName="block w-full bg-green-900 border-2 border-red-600 rounded-md p-2 text-sm outline-none"
              validation={{
                required: true,
                validate: {
                  matchesInitialValue: (value) => {
                    return (
                      value !== options[0].label
                    )
                  },
                },
              }}              
            >
              {options.map((option, optionIdx) => (
                <option
                key={optionIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-orange-100 text-orange-900' : 'text-gray-900'
                  }`
                }>{option.label}</option>
              ))}
            </SelectField>
          </div>
          <div>
            <Label className="block">
              Message (facultatif)
            </Label>
            <TextAreaField
              name="message"
              className="block w-full h-24 bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-none"/>
          </div>
          <div>
            <Label 
              name="company"
              className="block">
              Société (facultatif)
            </Label>
            <TextField 
              name="company" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-none"
            />
          </div>
          <div>
            <Label 
              name="firstname" 
              className="block">
                Prénom
            </Label>
            <TextField 
              name="firstname" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-none"
              errorClassName="block w-full bg-green-900 border-2 border-red-600 rounded-md p-2 text-sm outline-none"
              validation={{ required: true }}
            />
          </div>
          <div>
            <Label 
              name="lastname"
              className="block">
              Nom
            </Label>
            <TextField 
              name="lastname" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-none"
              errorClassName="block w-full bg-green-900 border-2 border-red-600 rounded-md p-2 text-sm outline-none"
              validation={{ required: true }}  
            />
          </div>
          <div>
            <Label 
              name="location"
              className="block">
              Adresse
            </Label>
            <TextField 
              name="location" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-none"
              errorClassName="block w-full bg-green-900 border-2 border-red-600 rounded-md p-2 text-sm outline-none"
              validation={{ required: true }}  
            />
          </div>                    
          <div>
            <Label 
              name="email"
              className="block">
              Mél
            </Label>
            <EmailField 
              name="email" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-none"
              errorClassName="block w-full bg-green-900 border-2 border-red-600 rounded-md p-2 text-sm outline-none"
              validation={{ required: true }}
            />
          </div>
          <div>
            <Label 
              name="phone"
              className="block">
              Téléphone
            </Label>
            <TelField 
              name="phone" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-none"
              errorClassName="block w-full bg-green-900 border-2 border-red-600 rounded-md p-2 text-sm outline-none"
              validation={{ required: true }}
            />
          </div>
        </div>
        <div>
            <Submit
              disabled={submit}
              className="sm:text-sm md:text-lg uppercase border-2 border-white font-bold bg-white text-green-900 rounded-b-md p-4 w-full shadow-lg hover:bg-orange-700 hover:text-white">
                Envoyer une demande
            </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SiteForm
