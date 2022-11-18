import React from 'react';
import {
  ContactsList,
  ContactsItem,
  ContactsInfo,
  DeleteBtn,
} from './styles.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { selectFilter, selectContacts } from 'redux/selectors';

export const ListOfContacts = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <ContactsList>
      {visibleContacts.map(item => {
        const { name, phone, id } = item;
        return (
          <ContactsItem key={id}>
            <ContactsInfo>
              {name}: {phone}
            </ContactsInfo>
            <DeleteBtn
              // value={id}
              onClick={ () => dispatch(deleteContacts(id))}
              type="button"
            >
              Delete
            </DeleteBtn>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};
