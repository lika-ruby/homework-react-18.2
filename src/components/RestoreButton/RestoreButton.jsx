import React, { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext.jsx";
import { Button } from "./RestoreButton.js";

export const RestoreButton = () => {
  const { restoreNumber } = useContext(ContactsContext);
  return (
    <Button onClick={restoreNumber} id="restore-button" type="button">
      Restore last deleted contacts
    </Button>
  );
};
