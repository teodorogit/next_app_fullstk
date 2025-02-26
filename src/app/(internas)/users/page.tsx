import Pagina from "../../components/template/Pagina";
import UserList from "../../components/usuario/UserList";
import React from "react";

export default function Page() {
    return (
        <Pagina>
            <h1 className="text-black">Users</h1>
            <UserList/>
        </Pagina>
    )
}