import type React from "react";
import * as Form from "./ModalForm"
import { Route, Routes, useNavigate } from "react-router";
import SignUpForm from "./SignUpForm";

interface LoginFormProps {
}

const LoginForm: React.FC<LoginFormProps> = ({ }) => {

  const navigate= useNavigate()

  return (
    <>
    <Form.Wrapper>
      <Form.Title title="Login" />
      <Form.TextField label="Email" placeholder=""/>
      <Form.PasswordField label="Password" placeholder="" />
      <Form.Button type={Form.ButtonType.SUBMIT} />
      <button className="underline text-neutral-400" onClick={()=> navigate("/signup")}>Didn't have an account yet?</button>
    </Form.Wrapper>
    <Routes>
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
    </>
  )


}


export default LoginForm
