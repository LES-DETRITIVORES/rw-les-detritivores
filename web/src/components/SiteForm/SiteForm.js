import { Form, FormError, Label, TextField, EmailField, TelField, SelectField, TextAreaField, Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

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
  const [createForm, { loading, error }] = useMutation(CREATE_FORM, {
    onCompleted: (result) => {
      //console.log(JSON.stringify(result.form))
      toast.success('Demande enregistrée.')
    },
  })

  const [emailForm] = useMutation(EMAIL_FORM, {
    onCompleted: (result) => {
      //console.log(JSON.stringify(result.email))
      toast.success('Message envoyé.')
    },
  })

  const formSubmit = async (data) => {
    console.log(JSON.stringify(data))
    /* Save form */
    const form = await createForm({ variables: { input: data } })
    console.log(JSON.stringify(form))

    /* Send email form */
    const email = await emailForm({ variables: { id: form.data.form.id } })
    console.log(JSON.stringify(email))
  }

  return (
    <div>
      <Toaster />
      <Form onSubmit={formSubmit} className="max-w-lg mx-auto text-md font-normal">
        <FormError error={error}/>
        <div className="border-2 border-b-0 border-white rounded-t-lg p-8 mt-3 space-y-3">
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
        </div>
        <div>
            <Submit
              disabled={loading}
              className="sm:text-sm md:text-lg uppercase border-2 border-white font-bold bg-white text-green-900 rounded-b-md p-4 w-full shadow-lg hover:bg-orange-700 hover:text-white">
                Envoyer une demande
            </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SiteForm
