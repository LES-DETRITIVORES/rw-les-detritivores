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
    rgpd: Boolean!
  }

  type Query {
    forms: [Form!]! @skipAuth
    form(id: Int!): Form @skipAuth
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
    rgpd: Boolean!
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
    rgpd: Boolean
  }

  type Mutation {
    createForm(input: CreateFormInput!): Form! @skipAuth
    updateForm(id: Int!, input: UpdateFormInput!): Form! @skipAuth
    deleteForm(id: Int!): Form! @skipAuth
    emailForm(id: Int!): String! @skipAuth
  }
`
