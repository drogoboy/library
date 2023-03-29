import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddStudent from './AddStudent'

const ViewStudent = () => {
    var [students, setStudents] = useState([])
    var [selected, setSelected] = useState([])
    var [update, setUpdate] = useState(false)


    useEffect(() => {
        axios.get("http://localhost:3005/students").then((data)=>{
            setStudents(data.data)
        })
            

    }, [])

    const updateValue = (value) => {
        setSelected(value);
        setUpdate(true);
    }
    const deleteValues = (id) => {
        axios.delete("http://localhost:3005/student/"+id).then(()=>{
            alert('success')
        })

    }
    var finalJSX = <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value, index) => {
                    return (
                        <TableRow key={index}>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.grade}</TableCell>
                            <TableCell><Button onClick={()=>updateValue(value)} color='success'>update</Button></TableCell>
                            <TableCell><Button onClick={()=>deleteValues(value.id)} color='error'>delete</Button></TableCell>
                        </TableRow>
                    )

                })}
            </TableBody>
        </Table>
    </TableContainer>
    if (update)
        finalJSX = <AddStudent data={selected} method="put" />


    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            {finalJSX}

        </div>
    )
}


export default ViewStudent
