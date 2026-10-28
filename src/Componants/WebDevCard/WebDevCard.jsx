import Button from "../Button/Button";
import "./WebDevCard.css";

function WebDevCard(props) {
  const handleTitle = (e) => {
    alert(e);
  };
  return (
    <>
      <div className="card-layout">
        <div className="leng-card">
          <div>
            <img className="icon" src={props.image} />
          </div>
          <div className="title">{props.title}</div>
          <div className="discription">
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed! Neque aperiam necessitatibus dolores mollitia odit veritatis quisquam ipsa fugit."
            }
          </div>
          {/* < className="learnmore">{"Learn more"}</ */}
          <Button
            label="Click me"
            className="learnmore"
            onClick={() => handleTitle(props.title)}
          />
        </div>
      </div>
    </>
  );
}
export default WebDevCard;
