import React, { useState } from 'react'

function UserForm() {
    const initialObject = {
        username: '',
        password: '',
    }
    const [user, setUser] = useState(initialObject);
    function handleChange(element){
        // console.log(element.target.value);
        // console.log(element.target.name);

        setUser({
            ...user,
            [element.target.name]: element.target.value,
        })
    }
    return (
        <>
            <h3>UseState with Object Type</h3>
            <p>{JSON.stringify(user)}</p>
            <form>
                <label htmlFor="">UserName:
                    <input type='text' name='username' onChange={handleChange}/>
                </label>
                <br />
                <br />
                <label htmlFor="">Password:
                    <input type="text" name="password" onChange={handleChange}/>
                </label>
            </form>
        </>
    );
}

export default UserForm;