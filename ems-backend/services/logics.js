//Backend logics

//import db.js file
const db = require('../services/db')

//get all the employee details from the database

const getAllEmployees =()=>{
    return db.employee.find().then((result)=>{
        if(result){
            return{//send to frontend
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:400,
                message:'cant find employee'
            }
        }
    })
}

//Add a new employee details into the database
const addEmployee=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"Employee already exists"
            }
        }
        else{
            const newEmployee = new db.employee({id,name,age,designation,salary})
            //to save to the database 
            newEmployee.save()
            return{
                statusCode:200,
                message:"Employee added successfully"
            }

        }
    })
    
}

const deleteEmployee=(id)=>{
    return db.employee.deleteOne({id}).then((result)=>{
        
            return {
                statusCode:200,
                message:"Employee deleted successfully"
            }
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:"Couldn't find employee"
        }
    })
}

//to get an employee details
const getAnEmployee=(id)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            return{//send to frontend
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:400,
                message:'cant find employee'
            }
        }
    })
}

//update an employee details
const updateAnEmployee=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            result.id = id;
            result.name = name;
            result.age= age;
            result.designation = designation;
            result.salary = salary;

            //save updated details to db
            result.save()

            return{//send to frontend
                statusCode:200,
                message:"Employee data updated successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:'cant find employee'
            }
        }
    })

}
module.exports = {
    getAllEmployees,
    addEmployee,
    deleteEmployee,
    getAnEmployee,
    updateAnEmployee
}