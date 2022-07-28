import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_FORM_MUTATION = gql`
  mutation DeleteFormMutation($id: Int!) {
    deleteForm(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Form = ({ form }) => {
  const [deleteForm] = useMutation(DELETE_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('Form deleted')
      navigate(routes.forms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete form ' + id + '?')) {
      deleteForm({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Form {form.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{form.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(form.createdAt)}</td>
            </tr>
            <tr>
              <th>Company</th>
              <td>{form.company}</td>
            </tr>
            <tr>
              <th>Firstname</th>
              <td>{form.firstname}</td>
            </tr>
            <tr>
              <th>Lastname</th>
              <td>{form.lastname}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{form.location}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{form.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{form.phone}</td>
            </tr>
            <tr>
              <th>Subject</th>
              <td>{form.subject}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>{form.message}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editForm({ id: form.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(form.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Form
