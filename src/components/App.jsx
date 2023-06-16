import { useEffect, useState } from "react";
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { SearchInput } from "./SearchInput/SearchInput";
import { nanoid } from "nanoid";

export const App = () => {
  const key = "contacts";

  const [contacts, setContacts] = useState(() => {
    const storageItems = localStorage.getItem(key);
    if (storageItems !== null) {
      return JSON.parse(storageItems)
    }
  });
  const [filter, setFilter] = useState('');

  useEffect(prevState => {
      localStorage.setItem(key, JSON.stringify(contacts))
  }, [contacts]);

  const formDataGetter = (data) => {
    const { name, number } = data;
    const newContact = {
      name: name,
      number: number,
      contactId: nanoid(),
    };

    if ((contacts.map(contact => contact.name)).includes(name)) {
      window.alert(`${name} is already in contacts`)
      return
    } else {
      setContacts([...contacts, newContact]);
    }
  };

  const handleSearch = (filter) => {
    setFilter(state => {return filter} );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const hendleDeleteContact = (idData) => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.contactId !== idData)
    })
  }

  return (
    <>
      <h1>Phonebook</h1>
      <Form
        onDataSubmit={formDataGetter} />
      <h2>Contacts</h2>
      <SearchInput
        onFilter={handleSearch} />
      <ContactsList
        contacts={filteredContacts}
        onDelete={hendleDeleteContact}
      />
    </>
  );
}
  