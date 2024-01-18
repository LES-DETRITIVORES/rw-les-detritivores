import {
  Form,
  FormError,
  Label,
  TextField,
  EmailField,
  TelField,
  SelectField,
  TextAreaField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import { Dialog } from '@headlessui/react'
import { Transition } from '@headlessui/react'

const options = [
  { label: 'Choisir un sujet...' },
  { label: 'Tri et traitement des biodéchets' },
  { label: 'Achat de compost' },
  { label: 'Emploi et formation' },
  { label: 'Nous soutenir' },
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
  const [isSubject, setSubject] = useState(false)

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
    <div className="md:pt-3 lg:pt-12">
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Dialog
          as="div"
          className="relative z-10"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Demande enregistrée
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Un courriel de confirmation vient de vous être envoyé.
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Valider
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>

      <h1 className="mb-3 text-3xl font-semibold text-center">
        Contactez-nous
      </h1>
      <p className="text-center max-w-lg mx-auto mb-3">
        Partagez votre projet en nous écrivant à l'adresse :
        <a href="mailto:bonjour@les-detritivores.co" className="underline">
            bonjour@les-detritivores.co
        </a>
      </p>

    </div>
  )
}

export default SiteForm
