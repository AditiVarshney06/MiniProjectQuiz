import { Link } from "react-router-dom";
import img from "./quiz.jpg";
export default function Quizbox(props) {
  return (
    <>
      <div>
        <div className="card m-5 " style={{ width: "18rem" }}>
          <img
            // src="images\quiz.png" set default same for all quiz
            // src={props.img ? 'ljl' :img}
            src={props.img}
            // src={img}
            onerror="this.src={img}"
            className="card-img-top"
            alt="Quiz"
            width={300}
            height={200}
          ></img>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.des}</p>
            <Link
              to={{
                pathname: `/ques/${props.name}`,
              }}
            >
              open quizz
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
