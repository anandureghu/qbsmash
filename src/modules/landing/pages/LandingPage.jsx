import "./LandingPage.scss";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { COLORS } from "../../../main/consts";
import { IoIosArrowForward } from "react-icons/io";

const LandingPage = () => {
  const actions = [
    { label: "Latest Announcements" },
    { label: "Game Rules" },
    { label: "All Teams" },
    { label: "All Players" },
  ];
  return (
    <div className="landing">
      <header className="landing__header">
        <motion.div
          className="landing__header-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="landing__header-logo--text">QBurst</h1>
        </motion.div>
        <motion.div
          className="landing__header-texts"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="landing__header-texts--title">SMASH</h1>
          <h2 className="landing__header-texts--subtitle">
            make a play for the badminton championship
          </h2>
          <motion.button
            className="landing__header-texts--action"
            initial={{ skewX: -12 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HashLink smooth to={"/#actions"}>
              Explore
            </HashLink>
          </motion.button>
        </motion.div>
      </header>
      <section className="landing__actions" id="actions">
        <h1 className="landing__actions-title">
          Are you <span>GAME?</span>
        </h1>
        <ul className="landing__actions-list">
          {actions.map((action) => {
            return (
              <li key={action.label}>
                <motion.button
                  whileHover={{
                    backgroundColor: COLORS.white[900],
                    color: COLORS.blue[800],
                  }}
                >
                  <span>{action.label}</span>
                  <IoIosArrowForward size={40} />
                </motion.button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
