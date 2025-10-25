import { Label, Input } from "./Filter";

import React, { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext.jsx";

export const Filter = () => {
  const { filter, setNewFilter } = useContext(ContactsContext);
  const handleChange = (e) => {
    setNewFilter(e.target.value);
  };

  return (
    <Label>
      Filter
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </Label>
  );
};
