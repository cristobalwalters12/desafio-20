import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function SortButton({ onFilter }) {
  return (
    <Menu>
      <MenuHandler>
        <Button color="white" variant="outlined" className="border-white">
          Ordenar por:
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => onFilter("alfabetico")}>Alfabético</MenuItem>
        <MenuItem onClick={() => onFilter("Original")}>Original</MenuItem>
      </MenuList>
    </Menu>
  );
}
export default SortButton;
