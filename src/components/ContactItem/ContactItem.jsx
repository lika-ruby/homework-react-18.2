import { Item, Text, Number, Button } from "./ContactItem";

import React, { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext.jsx";

export const ContactItem = ({ id, name, number }) => {
  const { deleteNumber } = useContext(ContactsContext);
  return (
    <Item id={id}>
      <Text>
        {name}:<Number>{number}</Number>
      </Text>
      <Button type="button" onClick={deleteNumber}>
        ✖
      </Button>
    </Item>
  );
};
