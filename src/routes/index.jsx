import { Routes, Route } from "react-router-dom";
import { routes } from "./routes-data";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, Element }, index) => (
          <Route key={index} path={path}>
            <Route index element={<Element />} />
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
