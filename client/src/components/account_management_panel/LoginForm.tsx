import type React from "react";
import * as Form from "./ModalForm"
import SignUpForm from "./SignUpForm";
import { Route, Routes, useNavigate } from "react-router";

interface LoginFormProps {
}

const LoginForm: React.FC<LoginFormProps> = ({ }) => {

  const navigate = useNavigate()
  
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <>
      <Form.Wrapper onSubmit={handleFormSubmit}>
        <Form.Title>Login</Form.Title>
        <Form.TextField>Enter Email</Form.TextField>
        <Form.TextInput placeholder="Enter Email" />
        <Form.Button type={Form.ButtonType.SUBMIT} />
        <button className="underline text-neutral-400" onClick={() => navigate("/signup")}>Didn't have an account yet?</button>
      </Form.Wrapper>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </>
  )


}


export default LoginForm
