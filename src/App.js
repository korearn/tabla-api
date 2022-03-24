import { useEffect, useState } from "react";

function App() {

  function borrar(cod) {
    const temp = articulos.filter((art)=>art.codigo !== cod);
    setArticulos(temp)
  }

  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    fetch("https://scratchya.com.ar/react/datos.php")
    .then((response) => {
      return response.json()
    })
    .then((articulos) => {
      setArticulos(articulos)
    })
  }, []);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(art => {
            return (
              <tr key={art.codigo}>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
                <td><button onClick= {() => borrar(art.codigo) }>Borrar</button></td> 
              </tr>
            );        
          })}
        </tbody>
      </table>
    </div>
  );

}

export default App

