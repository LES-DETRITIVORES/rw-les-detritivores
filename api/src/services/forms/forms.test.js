import { forms, form, createForm, updateForm, deleteForm } from './forms'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('forms', () => {
  scenario('returns all forms', async (scenario) => {
    const result = await forms()

    expect(result.length).toEqual(Object.keys(scenario.form).length)
  })

  scenario('returns a single form', async (scenario) => {
    const result = await form({ id: scenario.form.one.id })

    expect(result).toEqual(scenario.form.one)
  })

  scenario('creates a form', async () => {
    const result = await createForm({
      input: {
        firstname: 'String',
        lastname: 'String',
        location: 'String',
        email: 'String',
        phone: 'String',
        subject: 'String',
      },
    })

    expect(result.firstname).toEqual('String')
    expect(result.lastname).toEqual('String')
    expect(result.location).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.phone).toEqual('String')
    expect(result.subject).toEqual('String')
  })

  scenario('updates a form', async (scenario) => {
    const original = await form({ id: scenario.form.one.id })
    const result = await updateForm({
      id: original.id,
      input: { firstname: 'String2' },
    })

    expect(result.firstname).toEqual('String2')
  })

  scenario('deletes a form', async (scenario) => {
    const original = await deleteForm({ id: scenario.form.one.id })
    const result = await form({ id: original.id })

    expect(result).toEqual(null)
  })
})
