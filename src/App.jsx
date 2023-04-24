import { Route, Switch } from 'react-router-dom';
import ContactUs from './ContactUs';
import DesertDishes from './DesertDishes';
import VegDishes from './VegDishes';
import NonVegDishes from './NonVegDishes';
import Error from './Error';
import Header from './Header';
import CommonPage from './CommonPage';
import '../src/App.css';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={CommonPage} />
        <Route exact path="/veg" component={VegDishes} />
        <Route exact path="/nonveg" component={NonVegDishes} />
        <Route exact path="/desert" component={DesertDishes} />
        <Route exact path="/contact" component={ContactUs} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
