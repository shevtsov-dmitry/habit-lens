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
      <Form.Spacer/>
      <Form.TextField label="Email" placeholder=""/>
      <Form.Spacer/>
      <Form.PasswordField label="Password" placeholder="" />
      <Form.Spacer/>
      <Form.Button type={Form.ButtonType.SUBMIT} />
      <Form.Spacer spaceRangeInPercentageFloat={0.05}/>
      <button className="underline text-neutral-400" onClick={()=> navigate("/signup")}>Didn't have an account yet?</button>
    </Form.Wrapper>
    <Routes>
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
    </>
  )


}


export default LoginForm
