import React,{ useState } from 'react'

export default function Theme() {
    const[darkTheme, setDarkTheme] = useState(false);
    const theme = {
        darkTheme:{
            backgroundColor: 'gray',
            color: 'white',
            padding: '20px'
        },
        lightTheme:{
            backgroundColor: 'white',
            color: 'gray',
            padding: '20px'
        }
    }
  return (
    <>
        Enable Dark Theme:
        <input
        type='checkbox'
        checked = {darkTheme}
        onChange={()=>setDarkTheme((prevTheme)=>!prevTheme)}
        />
        <div style={darkTheme? theme.darkTheme: theme.lightTheme}>
            <h1>UseState Hook in React</h1>
            <p>useState Hook allows us to use State inside function</p>
        </div>
    </>
  )
}
