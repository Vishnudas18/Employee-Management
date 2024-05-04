//1 import express
const express = require('express')

//2 import cors
const cors = require('cors')

//import logic
const logic = require('./services/logics')

//3 Create a backend application using express
const emsServer = express()
//4 Connecting the frontend application using cors
emsServer.use(cors({
    origin:'http://localhost:3000'
}))

//5 Convert the json data to js and js to json using json() function
emsServer.use(express.json())

// Define the port number 
emsServer.listen(8000,()=>{
    console.log('Ems Server Listening on port 8000');
})

//API call for get all employee details
emsServer.get('/get-all-employees',(req,res)=>{
    logic.getAllEmployees().then((response)=>{
        res.status(response.statusCode).json(response);
    })

})

//API Call for add an employee
emsServer.post('/add-an-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response);
    })
})

//API call for remove an employee
emsServer.delete('/delete-an-employee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response);
    })
})

//API call for get an employee details
emsServer.get('/get-an-employee/:id',(req,res)=>{
    logic.getAnEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response);
    })

})

//API call for get an employee details
emsServer.post('/update-an-employee/:id',(req,res)=>{
    logic.updateAnEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response);
    })

})
