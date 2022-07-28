import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Form/FormsCell'

const DELETE_FORM_MUTATION = gql`
  mutation DeleteFormMutation($id: Int!) {
    deleteForm(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const FormsList = ({ forms }) => {
  const [deleteForm] = useMutation(DELETE_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('Form deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete form ' + id + '?')) {
      deleteForm({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Company</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Location</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Message</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form.id}>
              <td>{truncate(form.id)}</td>
              <td>{timeTag(form.createdAt)}</td>
              <td>{truncate(form.company)}</td>
              <td>{truncate(form.firstname)}</td>
              <td>{truncate(form.lastname)}</td>
              <td>{truncate(form.location)}</td>
              <td>{truncate(form.email)}</td>
              <td>{truncate(form.phone)}</td>
              <td>{truncate(form.subject)}</td>
              <td>{truncate(form.message)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.form({ id: form.id })}
                    title={'Show form ' + form.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editForm({ id: form.id })}
                    title={'Edit form ' + form.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete form ' + form.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(form.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FormsList
