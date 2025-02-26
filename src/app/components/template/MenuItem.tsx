import Link from "next/link"
import React from "react"
import { ElementType } from "react"

export interface MenuItemProps {
    icon: ElementType,
    texto: string,
    url: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
    <Link href={props.url} className="flex gap-2 px-4 py-2">
        <props.icon className="text-foreground-200" size={24}/>
        <span className="text-foreground-200">{props.texto}</span>
    </Link>
    )
}

