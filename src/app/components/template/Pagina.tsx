import React from 'react'
import Menu from './Menu'


export interface PaginaProps {
    children: any,
    hasMenu?: boolean
}

export default function Pagina({hasMenu, children} : PaginaProps) {
    return (
        <div className='flex'>
           {hasMenu && <Menu/>}
            <main className='flex-1'>{children}</main>
        </div>
    )
}