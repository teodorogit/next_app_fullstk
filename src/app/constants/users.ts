import { Usuario } from "@/app/core/model/Usuario";

const users: Usuario[] = [
    {
        id: "1",
        email: "user1@example.com",
        name: "User One",
        password: "password1",
        ativo: true
    },
    {
        id: "2",
        email: "user2@example.com",
        name: "User Two",
        password: "password2",
        ativo: true
    },
    {
        id: "3",
        email: "user3@example.com",
        name: "User Three",
        password: "password3",
        ativo: false
    },
    {
        id: "4",
        email: "user4@example.com",
        name: "User Four",
        password: "password4",
        ativo: true
    },
    {
        id: "5",
        email: "user5@example.com",
        name: "User Five",
        password: "password5",
        ativo: false,
    },
    {
        id: "6",
        email: "user6@example.com",
        name: "User Six",
        password: "password6",
        ativo: false
    }
]

export default users