

import React, { useState } from 'react';
function Comment(){
    const[title, setTitle] = useState('Good Morning');

    // const ob = useState(true);
    // console.log(ob);

    return (
        <>
            <div>
                <h1>{title}</h1>
                <button onClick={()=>setTitle("Good Evening")}>Change Title</button>
            </div>
        </>
    );
}

export default Comment;
