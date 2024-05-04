import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';



function Admin() {

    //Api fetching - to get all the employees details
    const base_url ='http://localhost:8000'

    //state creation 
    const [allEmployees,setAllEmployees]=useState([])//to hold all employee details

    const fetchData =async()=>{
        const result = await axios.get(`${base_url}/get-all-employees`)// details from server
        console.log(result.data.employees);
        setAllEmployees(result.data.employees)
    }

    console.log(allEmployees);//array of employees

    const deleteEmp=async(id)=>{
      const result =await axios.delete(`${base_url}/delete-an-employee/${id}`)
      console.log(result);
      fetchData()
    }

    useEffect(()=>{
        fetchData()
    },[])


  return (
    <div>
        <h1 className='text-center text-primary m-4'>Employee Management System</h1>
        <div className="container">
            <p style={{textAlign:'justify'}}>
            Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.
            </p>
        </div>
        
       <Link to={'/add'}>
       <a className='btn btn-primary' style={{float:'right',padding:'10px'}} href="">Add</a>

       </Link>
        
        <div className='container'>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
            allEmployees.map((item)=>(
                <tr>
          <td>
            {item.id}
          </td>
          <td>
            {item.name}
          </td>
          <td>
            {item.age}
          </td>
          <td>{item.designation}</td>
          <td>
            {item.salary}
          </td>
          <td>
            <div className='d-flex justify-content-evenly'> 
            <Link to={`view/${item.id}`}>
            <i className='fa-solid fa-eye text-success'></i>
            </Link>
              
           <Link to={`edit/${item.id}`}>
           <i className='fa-solid fa-pen text-primary'></i>
           </Link>
            <i onClick={()=>deleteEmp(item.id)} className='fa-solid fa-trash text-danger'></i>
            </div>
          </td>
        </tr>
            ))
        }

           
        
      </MDBTableBody>
    </MDBTable>

        </div>
    </div>
  )
}

export default Admin