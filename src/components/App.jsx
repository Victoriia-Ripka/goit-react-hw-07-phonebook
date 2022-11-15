import { MyContactForm } from './Form';
import { Section } from './Section';
import { ListOfContacts } from './ListOfContacts';
import { Filter } from './Filter';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";


export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(()=> {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <>
      <Section title="Phonebook">
        <MyContactForm />
      </Section>
      <Section title="Contacts">
        <Filter/>
        {isLoading && !error && <b>Request in progress...</b>}
        <ListOfContacts />
      </Section>
    </>
  );
}
