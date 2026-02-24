import { useState } from "react"
import * as Form from "./ModalForm"

interface EmailCodeConfirmationFormProps {
}

const EmailCodeConfirmationForm: React.FC<EmailCodeConfirmationFormProps> = () => {

 const [codeInput, setCodeInput] = useState<string>("")

  function verifyCode() {

  }

  return (
    <Form.Wrapper>
      <Form.TextField>Enter code sent to your email</Form.TextField>
      <Form.TextInput placeholder="Enter Code" value={codeInput} onChange={(e) => setCodeInput(e.target.value)} />
      <button onClick={() => verifyCode()}>Verify Code</button>
    </Form.Wrapper>
  )
}

export default EmailCodeConfirmationForm