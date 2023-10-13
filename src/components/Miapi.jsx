import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";
import { Spinner } from "@material-tailwind/react";
function MiApi({ searchTerm, filterTerm }) {
  const [api, setApi] = useState({});
  const [filteredKeys, setFilteredKeys] = useState([]);
  const fetchApi = async () => {
    try {
      const url = "https://mindicador.cl/api";
      const response = await fetch(url);
      const data = await response.json();
      setApi(data);
    } catch (error) {
      console.error("Error fetching the API data", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    let keys = Object.keys(api);
    if (searchTerm) {
      keys = keys.filter((key) =>
        api[key].nombre
          ? api[key].nombre.toLowerCase().includes(searchTerm.toLowerCase())
          : false
      );
    }
    if (filterTerm === "alfabetico") {
      keys = keys.sort((a, b) =>
        (api[a]?.nombre || "").localeCompare(api[b]?.nombre || "")
      );
    }
    if (filterTerm === "Original") {
      setFilteredKeys(keys);
    }

    setFilteredKeys(keys);
  }, [api, searchTerm, filterTerm]);

  if (Object.keys(api).length === 0) {
    return <Spinner className="h-16 w-16 text-gray-900/50" />;
  }

  return (
    <div className="flex flex-wrap justify-around p-4 w-full px-4">
      {filteredKeys.map((key) => {
        const item = api[key];
        if (
          item &&
          item.nombre &&
          typeof item.valor === "number" &&
          item.unidad_medida &&
          item.fecha
        ) {
          return (
            <DataCard
              key={key}
              nombre={item.nombre}
              valor={item.valor}
              unidad_medida={item.unidad_medida}
              fecha={item.fecha}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default MiApi;
