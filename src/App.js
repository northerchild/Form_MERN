import { Form } from "./components/Form";
import { Tables } from "./components/Tables";
//Redux
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <div className="row">
        <div className="col-md-4"><Form/></div>
        <div className="col-md-8"><Tables/></div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
