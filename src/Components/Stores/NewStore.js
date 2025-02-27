import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useGlobalState } from "../../utils/stateContext"
import { useRef, useState, useReducer,useEffect } from 'react'
import {createStore} from '../../Services/store.service'
import Typography from '@mui/material/Typography'
import InputFieldText from '../UniversalComponents/InputFieldText'
import FormButton from '../UniversalComponents/FormButton'
import FormTitle from '../UniversalComponents/FormTitle'
import { createDomain } from '../../Services/domain.service'


function NewStore() {
  const initialState={
    name:'',
    location:'',
    user_id:1,
  }
  const {dispatch} = useGlobalState()
  const [formData, setFormData] = useState(initialState)
  const handleFormData = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    createStore(formData)
    console.log(createStore)
    
  }


  return (
    


<Box
        
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >


       <FormTitle text={"Create Store"}/>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>


          <InputFieldText
            name="name"
            label='Store Name'
            id="name"
            type="text"

            value={formData.name}
            onChange={handleFormData}
          />

          
          <InputFieldText
            name="location"
            label="location"
            type="text"
            id="location"
            value={formData.location}
            onChange={handleFormData}
          />

          <FormButton text='create store'/>
         
        </Box>
  
      </Box>
  

    )
}

export default NewStore