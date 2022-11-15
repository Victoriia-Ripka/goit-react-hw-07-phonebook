import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Label, DeleteBtn, InputField, InputForm, InputMessage } from './styles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../redux/operations';
import { selectContacts } from "redux/selectors";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

export const MyContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    const isContactInList = contacts.find(
      item => item.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );
    if (isContactInList) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContacts(newContact));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      {props => (
        <InputForm>
          <Label>
            Name
            <InputField
              type="text"
              value={props.values.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <InputMessage name="name" />
          </Label>
          <Label>
            Number
            <InputField
              type="tel"
              value={props.values.number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <InputMessage name="number" />
          </Label>
          <DeleteBtn type="Submit">Add contact</DeleteBtn>
        </InputForm>
      )}
    </Formik>
  );
};
