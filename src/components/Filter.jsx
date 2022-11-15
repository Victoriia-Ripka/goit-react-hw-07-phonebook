import React from 'react'
import { Input, Label } from './styles.styled'
import { useDispatch } from 'react-redux'
import { filterReducer } from 'redux/contactsSlice'

export const Filter = () => {
  const dispatch = useDispatch(); 

  const handleChange = e => {
    dispatch(filterReducer(e.target.value))
  }
  
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={handleChange} name="filter" />
    </Label>
  )
}
