import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'

const Navbar = () => {
  return (
      
    <div>
      <TextField label ='name' name='name' varient='outlined'
      value={input.name} onChange={inputHandler}/>
      <br>
      </br>
      <TextField label = 'grade' name='author' varient='outlined'
      value={input.grade} onChange={inputHandler}/>
      <Button varient='contained' onclick={readvalues}
      color='success'>submit</Button>
      
    </div>
  )
}

export default Navbar
