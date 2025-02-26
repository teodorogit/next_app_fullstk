import { Usuario } from '../../constants/users';
import users from '../../constants/users';
import LineUser from './LineUser';
import React from 'react';

export default function UserList() {
    return (
        <div className="flex flex-col">
            {users.map((user : Usuario) => {
            return <LineUser key={user.id} user={user}/>
            
        })}
        </div>

       )
}