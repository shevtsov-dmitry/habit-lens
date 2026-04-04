import { Route, Routes, useNavigate } from "react-router";
import LoginForm from "./LoginForm";


const AccountManagementPanel = () => {

  const navigate = useNavigate()

  return <>
    <h1>Account Management</h1>
    <button className="text-neutral-300 hover:cursor-pointer font-bold text-5xl bg-green-900 rounded-2xl border-2 border-cyan-700 p-5"
      onClick={() => { navigate("/login") }}
    >
      ENTER ACCOUNT
    </button>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  </>

}

export default AccountManagementPanel;