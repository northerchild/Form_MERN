import { Form } from "./components/Form";
import { Tables } from "./components/Tables";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"><Form/></div>
        <div className="col-md-8"><Tables/></div>
      </div>
    </div>
  );
}

export default App;
