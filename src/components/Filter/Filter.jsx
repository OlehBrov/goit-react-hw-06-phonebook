import { Formik, Field } from 'formik';
// import { useState } from 'react';
import styled from 'styled-components';
import { FilterStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/FilterSlices';

export function Filter() {
  const filterValue = useSelector(state => state.filter);
  const contactsAvailable = useSelector(state => state.contacts.contactList.length);
  console.log('contactsAvailable', contactsAvailable)
  const dispatch = useDispatch();

  const handleChange = e => {
    console.log('filter target', e.target.value)
    dispatch(setFilter(e.target.value));
    
  };
  if (contactsAvailable > 0) {
  return (
    <Formik initialValues={filterValue}>
      <FilterStyled>
        <label htmlFor="searchfilter"></label>
        <Input
          id="searchfilter"
          filter="filter"
          placeholder="Search contact"
          value={filterValue}
          onChange={handleChange}
        />
      </FilterStyled>
    </Formik>
  );}
}

export const Input = styled(Field)`
  font-size: 25px;
  display: block;
  width: 100%;
  margin-bottom: 15px;
`;
