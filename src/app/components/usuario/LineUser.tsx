import {Usuario} from '../../core/model/Usuario';
import React from "react";

export interface LineUserProps {
    usuario: Usuario
}

export default function LineUser(props : LineUserProps) {
    return (
    <div className="flex p-4">
        <span>{props.usuario.name!}</span>
    </div>
    )
}