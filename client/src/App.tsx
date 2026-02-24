import './App.css'
import * as React from "react";
import Timer from "./components/timer/Timer.tsx";
import Header from "./components/header/Header.tsx";
import AccountManagementPanel from './components/account_management_panel/AccountManagementPanel.tsx';

const App: React.FC = () => {

    return (
        <div className={"w-screen h-screen bg-neutral-600"}>
            <Header/>
            <AccountManagementPanel/>
            <Timer/>
        </div>

    )

}

export default App
