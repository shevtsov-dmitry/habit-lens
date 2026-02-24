import * as Form from "./ModalForm"

interface AccountManagementPanelProps {

}

const AccountManagementPanel: React.FC<AccountManagementPanelProps> = () => {

  return (
      <div>
        <h1>Account Management</h1>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
  )

}

export default AccountManagementPanel;