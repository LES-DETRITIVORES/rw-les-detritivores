import { Form, Label, TextField, EmailField, TelField, TextAreaField, Submit } from '@redwoodjs/forms'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const options = [
  { label: 'Organiser le tri des biodéchets' },
  { label: 'Installer un site de compostage' },
  { label: 'Acheter du compostage' },
  { label: "Postuler à un offre d'emploi" },
  { label: 'Recruter un futur talent' },
  { label: 'Rejoindre la coopérative' },
  { label: 'Investir dans la transition' },
  { label: 'Autre demande' },
]

const Subject = () => {
  const [selected, setSelected] = useState({label : "Sélectionner un sujet"})
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="w-full border-2 border-white rounded-md p-2 text-sm cursor-default text-left focus:outline-none focus-visible:border-orange-700 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-700 sm:text-sm">
            <span className="block truncate">{selected.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-orange-100 text-orange-900' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-700">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

const ContactForm = () => {
  const contactSubmit = (data) => {
    var contact =
      {
        c : data.company,
        f : data.firstname,
        n : data.lastname,
        l : data.location,
        e : data.email,
        p : data.phone,
        s : data.subject,
        m : data.message
      }
    console.log(JSON.stringify(contact))
  }

  return (
    <div>
      <Form onSubmit={contactSubmit} className="max-w-lg mx-auto text-md font-normal">
        <div className="border-2 border-b-0 border-white rounded-t-lg p-8 mt-3 space-y-3">
          <div>
            <Label 
              name="company"
              className="block" 
              errorClassName="font-medium block text-red-600">
              Société (facultatif)
            </Label>
            <TextField 
              name="company" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-orange-700"
              errorClassName="block w-full bg-gray-200 rounded-md p-2 text-sm outline-red-600"
              validation={{ required: false }}
            />
          </div>
          <div>
            <Label 
              name="firstname" 
              className="block" 
              errorClassName="block text-red-600">
                Prénom
            </Label>
            <TextField 
              name="firstname" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-orange-700"
              validation={{ required: true }}
            />
          </div>
          <div>
            <Label 
              name="lastname"
              className="block"
              errorClassName="block text-red-600">
              Nom
            </Label>
            <TextField 
              name="lastname" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-orange-700"
              errorClassName="block w-full bg-gray-200 rounded-md p-2 text-sm outline-red-600"
              validation={{ required: true }}  
            />
          </div>
          <div>
            <Label 
              name="location"
              className="block"
              errorClassName="block text-red-600">
              Adresse
            </Label>
            <TextField 
              name="location" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-orange-700"
              errorClassName="block w-full bg-gray-200 rounded-md p-2 text-sm outline-red-600"
              validation={{ required: true }}  
            />
          </div>                    
          <div>
            <Label 
              name="email"
              className="block"
              errorClassName="block text-red-600">
              Mél
            </Label>
            <EmailField 
              name="email" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-orange-700"
              errorClassName="block w-full bg-gray-200 rounded-md p-2 text-sm outline-red-600"
              validation={{ required: true }}
            />
          </div>
          <div>
            <Label 
              name="phone"
              className="block"
              errorClassName="block text-red-600">
              Téléphone
            </Label>
            <TelField 
              name="phone" 
              className="block w-full bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-orange-700"
              errorClassName="block w-full bg-gray-200 rounded-md p-2 text-sm outline-red-600"
              validation={{ required: true }}
            />
          </div>
          <div>
            <Label 
              name="subject"
              className="block"
              errorClassName="block text-red-600">
              Demande
            </Label>
            <Subject />
          </div>
          <div>
            <Label className="block">
              Message (facultatif)
            </Label>
            <TextAreaField
              name="message"
              className="block w-full h-24 bg-green-900 border-2 border-white rounded-md p-2 text-sm outline-orange-700"/>
          </div>
        </div>
        <div>
            <Submit
              className="sm:text-sm md:text-lg uppercase border-2 border-white font-bold bg-white text-green-900 rounded-b-md p-4 w-full shadow-lg hover:bg-orange-700 hover:text-white"
              disabled="">
                Envoyer la demande
            </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm
