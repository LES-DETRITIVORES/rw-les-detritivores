import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FormForm from 'src/components/Form/FormForm'

const CREATE_FORM_MUTATION = gql`
  mutation CreateFormMutation($input: CreateFormInput!) {
    createForm(input: $input) {
      id
    }
  }
`

const NewForm = () => {
  const [createForm, { loading, error }] = useMutation(CREATE_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('Form created')
      navigate(routes.forms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createForm({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Form</h2>
      </header>
      <div className="rw-segment-main">
        <FormForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewForm
