export const schema = gql`
  type Form {
    id: Int!
    createdAt: DateTime!
    company: String
    firstname: String!
    lastname: String!
    location: String!
    email: String!
    phone: String!
    subject: String!
    message: String
  }

  type Query {
    forms: [Form!]! @requireAuth
    form(id: Int!): Form @requireAuth
  }

  input CreateFormInput {
    company: String
    firstname: String!
    lastname: String!
    location: String!
    email: String!
    phone: String!
    subject: String!
    message: String
  }

  input UpdateFormInput {
    company: String
    firstname: String
    lastname: String
    location: String
    email: String
    phone: String
    subject: String
    message: String
  }

  type Mutation {
    createForm(input: CreateFormInput!): Form! @skipAuth
    updateForm(id: Int!, input: UpdateFormInput!): Form! @requireAuth
    deleteForm(id: Int!): Form! @requireAuth
    emailForm(id: Int!): String! @skipAuth
  }
`
