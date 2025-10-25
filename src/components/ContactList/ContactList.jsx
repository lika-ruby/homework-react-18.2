import { ContactItem } from "../ContactItem/ContactItem.jsx";
import { Wrapper, List, Title } from "./ContactList.js";
import { Filter } from "../Filter/Filter.jsx";
import { EmptyMessage } from "../EmptyMessage/EmptyMessage.jsx";
import { Container } from "../Container/Container.jsx";

export const ContactList = ({
  filter,
  onChange,
  filterNumber,
  contacts,
  deleteNumber,
}) => {
  return (
    <Container>
      <Wrapper>
        <Title>Your Contacts</Title>
        <Filter filter={filter} onChange={onChange} />
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
                deleteNumber={deleteNumber}
              />
            ))}
          </List>
        )}
      </Wrapper>
    </Container>
  );
};
