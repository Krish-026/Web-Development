import React, {useState} from 'react';

function Loading(){
    const[loading, setLoading] = useState(true);
    return (
        <>
            <h3>useState Hook with Boolean Type</h3>
            {/* <button onClick={()=>setLoading(!loading)}>Toggle Loading</button> */}
            <button onClick={()=>setLoading((prevState)=>!prevState)}>Toggle Loading</button>
            {loading? <p>Loading...</p> : <h3>Data will display here</h3>}
        </>
    );
}

export default Loading;