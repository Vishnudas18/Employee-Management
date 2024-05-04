import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';

function View() {

  const {id} = useParams()
  console.log(id);

  const [employeeData,setEmployeeData] = useState({})

  const base_url ='http://localhost:8000'

  const getEmployee =async(id)=>{
    const result =await axios.get(`${base_url}/get-an-employee/${id}`)
    console.log(result.data.employees);
    setEmployeeData(result.data.employees)
  }
  console.log(employeeData);

  useEffect(()=>{
    getEmployee(id)
  },[])



  return (
    <div>
      <h2 className='text-center m-5'>Employee Details</h2>
      <div className="container p-5 m-5 d-flex justify-content-between">
      <MDBCard style={{width:'400px'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardTitle className='m-5' style={{fontSize:'35px'}}>Employee Details</MDBCardTitle>
      <MDBCardBody>
        <MDBCardText>
      <MDBListGroup style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem noBorders className='bg-light text-primary px-3'>Employee ID:{employeeData.id}</MDBListGroupItem>
      <MDBListGroupItem noBorders className='bg-light text-primary px-3'>Full Name:{employeeData.name}</MDBListGroupItem>
      <MDBListGroupItem noBorders className='bg-light text-primary px-3'>Age:{employeeData.age}</MDBListGroupItem>
      <MDBListGroupItem noBorders className='bg-light text-primary px-3'>Designation:{employeeData.designation}</MDBListGroupItem>
      <MDBListGroupItem noBorders className='bg-light text-primary px-3'>Salary:{employeeData.salary}</MDBListGroupItem>
    </MDBListGroup>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    <div>
      <img className='image card text-center' style={{width:'300px'}} src="https://images.freeimages.com/fic/images/icons/61/dragon_soft/512/user.png" alt="" />
    </div>
      </div>
      <div className='text-center mb-4'>
        <MDBBtn href='/'>Go Home</MDBBtn>
      </div>

    </div>
  )
}

export default View