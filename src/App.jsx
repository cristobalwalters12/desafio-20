import MiApi from "./components/Miapi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  return (
    <div className="container mx-auto p-4">
      <header>
        <Header onSearch={setSearchTerm} onFilter={setFilter} />
      </header>
      <main>
        <MiApi searchTerm={searchTerm} filterTerm={filter} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
