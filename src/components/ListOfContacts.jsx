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

  const onDeleteContact = id => dispatch(deleteContacts(id));

  let normalFilter = '';
  if (filterContacts.length > 0) {
    normalFilter = filterContacts.toLowerCase();
  }
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalFilter)
  );
// зняти готівку, віддати пані ані, пані аня заплатить
  return (
    <ContactsList>
      {visibleContacts.map(item => {
        const { name, number, id } = item;
        return (
          <ContactsItem key={id}>
            <ContactsInfo>
              {name}: {number}
            </ContactsInfo>
            <DeleteBtn
              value={id}
              onClick={() => dispatch(onDeleteContact(id))}
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
