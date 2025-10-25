import { ContactItem } from "../ContactItem/ContactItem.jsx";
import { Wrapper, List, Title } from "./ContactList.js";
import { Filter } from "../Filter/Filter.jsx";
import { EmptyMessage } from "../EmptyMessage/EmptyMessage.jsx";
import { Container } from "../Container/Container.jsx";

import { RestoreButton } from "../RestoreButton/RestoreButton.jsx";
import React, { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext.jsx";

export const ContactList = () => {
  const { filterNumber, lastDeletedContacts } = useContext(ContactsContext);
  const contacts = filterNumber();
  return (
    <Container>
      <Wrapper>
        <Title>Your Contacts</Title>
        <Filter />
        {filterNumber().length === 0 ? (
          <EmptyMessage />
        ) : (
          <List>
            {contacts.map((cont) => (
              <ContactItem
                key={cont.id}
                id={cont.id}
                name={cont.name}
                number={cont.number}
              />
            ))}
          </List>
        )}
        {lastDeletedContacts.current ? <RestoreButton /> : ""}
      </Wrapper>
    </Container>
  );
};
