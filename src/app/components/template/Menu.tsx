import { IconHome, IconUser } from '@tabler/icons-react'
import MenuItem from './MenuItem'
import React from 'react'

export default function Menu() {
    return (
       <aside className="w-72 bg-default-900 h-screen">
            <nav className="flex flex-col gap-1 py-7">
                <MenuItem icon={IconHome} texto='Início' url="/"/>
                <MenuItem icon={IconUser} texto='Cadastro de Usuário' url="/users"/>
            </nav>
       </aside>
    )
}