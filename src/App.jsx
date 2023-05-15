import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState("");
  const api = "https://jsonplaceholder.typicode.com/todos/";
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/")
  //     .then((res) => {
  //       setdata(res.data);
  //     })
  //     .catch((error) => {
  //       seterror(error.message);
  //     });
  // }, []);

  const getData = async () => {
    try {
      const todos = await axios.get(api);
      setdata(todos.data);
    } catch (error) {
      seterror(error.message);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="App">
      <h1>Axios example</h1>
      {error !== "" ? (
        <div>{error}</div>
      ) : (
        <div>
          {" "}
          {data.map((todo) => {
            const { id, title } = todo;
            return (
              <div className="card" key={id}>
                <h3>{id}</h3>
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
