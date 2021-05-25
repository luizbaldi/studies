import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h2 animate={{ scale: 1.5 }}>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px #fff",
            boxShadow: "0px 0px 8px #fff",
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
