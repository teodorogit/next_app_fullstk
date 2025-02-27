import Pagina from "../../components/template/Pagina";
import UserList from "../../components/usuario/UserList";
import React from "react";
export default function Page() {
    return (
        <div className="flex-col py-2 px-4">
            <h1 className="text-default-300/90 text-2xl">Users</h1>
            <UserList/>
        </div>
    )
}