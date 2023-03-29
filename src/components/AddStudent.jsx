import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddStudent = (props) => {
  var [input, Setinput] = useState(props.data)
  console.log("add page props" + props.data)

  const inputHandler = (e) => {
    const { name, value } = e.target
    Setinput({ ...input, [name]: value })
  }
  const readValues = () => {

    if (props.method === 'post') {
      axios.post("https://localhost:3005/students", input)
        .then(response => {
          alert("success")
        })
        .catch(err => console.log(err))
    }else if(props.method==='put'){
      axios.put("http://localhost:3005/student/" +input.id,input).then(()=>{
        alert('updated successfully')
      })
    }

  }
  // } else if(props.method ==="put") {
  //   axios.put("http://localhost:3005/student/" +input.id,inputs)

  // }

  return (

    <div>
      <TextField label='name' name='name' value={input.name} onChange={inputHandler} />
      <br>
      </br>
      <TextField label='grade' name='grade' value={input.grade} onChange={inputHandler} />
      <br>
      </br>
      <Button variant='contained' onClick={readValues} color='success'>submit</Button>
    </div>
  )
}

export default AddStudent

