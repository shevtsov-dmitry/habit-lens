import * as Form from "./ModalForm"

const SignUpForm = ({ }) => {

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <Form.Wrapper onSubmit={handleFormSubmit}>
      <Form.Title>Sign Up Your Account</Form.Title>
      <Form.TextField>Email Address</Form.TextField>
      <Form.TextInput placeholder="Enter Email" required />
      <Form.TextField>Password "("optional")"</Form.TextField>
      <Form.PasswordInput placeholder="Enter Password" />
      <Form.TextInput placeholder="Enter Password (optional)" />
      <Form.Button type={Form.ButtonType.SUBMIT} />
    </Form.Wrapper>
  )

}

export default SignUpForm