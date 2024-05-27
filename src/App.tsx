import { useState } from "react";
import "./App.css";

const INITIAL_ITEMS = [
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    text: "Videojuegos",
  },
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    text: "Libros",
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  return (
    <>
      <main>
        <aside>
          <h1>Prueba técnica de React</h1>
          <h2>Añadir y eliminar elementos de una lista</h2>
          <form>
            <label>
              Elemento a introducir
              <input
                type="text"
                name="item"
                required
                placeholder="Videojuegos"
              />
            </label>
            <button>Añadir</button>
          </form>
        </aside>

        <section>
          <h2>Lista de elementos</h2>
          <ul>
            {items.map((item) => {
              return <li key={item.id}>{item.text}</li>;
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
