import { Link, routes } from '@redwoodjs/router'

import Forms from 'src/components/Form/Forms'

export const QUERY = gql`
  query FindForms {
    forms {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No forms yet. '}
      <Link to={routes.newForm()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ forms }) => {
  return <Forms forms={forms} />
}
