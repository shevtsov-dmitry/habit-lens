import { useState } from "react"
import * as Form from "./ModalForm"


const EmailCodeConfirmationForm = () => {

 const [codeInput, setCodeInput] = useState<string>("")
  
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function verifyCode() {

  }

  return (
    <Form.Wrapper onSubmit={handleFormSubmit}>
      <Form.TextField>Enter code sent to your email</Form.TextField>
      <Form.TextInput placeholder="Enter Code" value={codeInput} onChange={(e) => setCodeInput(e.target.value)} />
      <button onClick={() => verifyCode()}>Verify Code</button>
    </Form.Wrapper>
  )
}

export default EmailCodeConfirmationForm