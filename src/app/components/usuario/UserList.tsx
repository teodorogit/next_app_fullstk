import { type Usuario } from '@/app/core/model/Usuario';
import users from '../../constants/users';
import LineUser from './LineUser';
import React from 'react';

export default function UserList() {
    return (
        <div className="flex gap-3 px-4 py-2  flex-1 flex-wrap">
            {users.map((user : Usuario) => {
            return <LineUser key={user.id} user={user}/>
            
        })}
        </div>

       )
}