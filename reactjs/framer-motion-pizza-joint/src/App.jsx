import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Base from "./components/Base";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Toppings from "./components/Toppings";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    const newToppings = pizza.toppings.includes(topping)
      ? pizza.toppings.filter((item) => item !== topping)
      : [...pizza.toppings, topping];

    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/base">
          <Base pizza={pizza} addBase={addBase} />
        </Route>
        <Route path="/toppings">
          <Toppings pizza={pizza} addTopping={addTopping} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
