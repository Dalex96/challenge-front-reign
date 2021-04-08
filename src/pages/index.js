import Router from '../router/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import rootReducer from "../store/reducers";
import	HeaderLayout from '../layouts/headerLayout'
import	Navigation from '../layouts/navigation'
import '../dist/css/index.css'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

function App() {
  return (
  	<Provider store={createStoreWithMiddleware(rootReducer)}>
    <main>
      <header>
      	<HeaderLayout />
      </header>
      <nav className="container">
      	<Navigation />
      </nav>
      <section className="content">
      	<Router/>
      </section>
    </main>
    </Provider>
  );
}

export default App;
