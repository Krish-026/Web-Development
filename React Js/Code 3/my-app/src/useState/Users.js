import React, { useState } from "react";

function Users() {
    const userList = [
        { id: 1, name: 'Krishna' },
        { id: 2, name: 'Pratap' },
    ];
    const[users, setUsers] = useState(userList);
    function updateUserList(newUser){
        // console.log({newUser});
        setUsers([
            ...users,
            {
               id: users.length,
               name: newUser, 
            }
        ])
    }
    return (
        <>
            <h3>useState with Array Type</h3>
            <form >
                <label >
                    Add User:
                    <input 
                    type="text" 
                    name = "name"
                    onBlur={(element)=> updateUserList(element.target.value)}
                     />
                </label>
            </form>
            <p>{JSON.stringify(users)}</p>
        </>
    );
}

export default Users;