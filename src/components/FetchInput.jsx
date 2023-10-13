import { Input } from "@material-tailwind/react";

function FetchInput({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <>
      <Input
        type="search"
        color="white"
        label="Buscar"
        className="pr-20"
        onChange={handleChange}
        containerProps={{
          className: "min-w-[288px]",
        }}
      />
    </>
  );
}
export default FetchInput;
