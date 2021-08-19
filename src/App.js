import './App.css';
import { useLocation } from 'react-router-dom';

function App() {

  console.log(useQuery());

  return (
    <div className="App">
      <header className="App-header">
        <h1>useQuery Hook</h1>
      </header>
    </div>
  );
}

function useQuery() {
  let location = useLocation();
  let queryString = location.search.substring(1);

  if (!queryString) { return {} };

  let keyValues = queryString.split("&");

  let params = keyValues.map((keyValueString) => {
    let keyValue = keyValueString.split("=")
    return keyValue
  }).reduce((obj, value) => { 
    obj[value[0]] = value[1];
    return obj;
   }, {})

   return params
}

export default App;
