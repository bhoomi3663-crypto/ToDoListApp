import Navbar from "../../Componants/Navbar/Navbar";
import "./About.css";
import { useContext } from "react";
import ModeContext from "../../Componants/Context/Context";

function About() {
  const { mode } = useContext(ModeContext);

  return (
    <>
      <div
        className={`${mode === "light" ? "about-background" : "about-background-light"}`}
      >
        <div
          className={`${mode === "light" ? "about-layer" : "about-layer-light"}`}
        >
          <div>
            <h1 className="about-heading">About ToDo</h1>
            <div className="about-line"></div>
          </div>

          <div>
            <p className="about-text">
              A to-do list is a list of items that
              <spn className="about-span">need to be completed</spn>. The items
              on the list can range from simple activities like replying to an
              email, to more complex tasks like creating project briefs.
            </p>
          </div>
          <div>
            <p className="about-text">
              The items on a to-do list are usually{" "}
              <spn className="about-span">action-oriented</spn>, such as
              “Schedule a meet with the R&D team” or “Call back customer X.”
              Some lists include more abstract goals, such as “improve your time
              management skills” or “learn how to use a new software program.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
