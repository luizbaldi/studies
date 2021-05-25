import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Base = ({ pizza, addBase }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.3 }}
    >
      <h3>Step 1: Choose your base</h3>
      <ul>
        {bases.map((base) => {
          const spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
