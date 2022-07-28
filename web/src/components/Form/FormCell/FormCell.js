import Form from 'src/components/Form/Form'

export const QUERY = gql`
  query FindFormById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Form not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ form }) => {
  return <Form form={form} />
}
