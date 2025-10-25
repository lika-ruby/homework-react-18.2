import { Item, Text, Number, Button } from "./ContactItem";

export const ContactItem = ({ id, name, number, deleteNumber }) => {
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
