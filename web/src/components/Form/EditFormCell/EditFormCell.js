import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import FormForm from 'src/components/Form/FormForm'

export const QUERY = gql`
  query EditFormById($id: Int!) {
    form: form(id: $id) {
      id
      createdAt
      company
      firstname
      lastname
      location
      email
      phone
      subject
      message
    }
  }
`
const UPDATE_FORM_MUTATION = gql`
  mutation UpdateFormMutation($id: Int!, $input: UpdateFormInput!) {
    updateForm(id: $id, input: $input) {
      id
      createdAt
      company
      firstname
      lastname
      location
      email
      phone
      subject
      message
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ form }) => {
  const [updateForm, { loading, error }] = useMutation(UPDATE_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('Form updated')
      navigate(routes.forms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateForm({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Form {form.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FormForm form={form} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
