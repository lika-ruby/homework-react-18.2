import { Label, Input } from "./Filter";

export const Filter = ({ onChange, filter }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
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
