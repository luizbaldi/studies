import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Toppings = ({ pizza, addTopping }) => {
  const toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose toppings</h3>
      <ul>
        {toppings.map((topping) => {
          const spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <button>Order</button>
      </Link>
    </div>
  );
};

export default Toppings;
