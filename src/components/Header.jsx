import { Navbar, Typography } from "@material-tailwind/react";
import SortButton from "./SortButton";

import FetchInput from "./FetchInput";
function Header({ onSearch, onFilter }) {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto from-orange-600 to-orange-400 px-4 py-3 mb-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h4"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Mi Indicador
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <SortButton onFilter={onFilter} />
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <FetchInput onSearch={onSearch} />
        </div>
      </div>
    </Navbar>
  );
}
export default Header;
