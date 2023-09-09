import Button from "./Button";
import "./Card.css";

const Card = ({ course }) => {
  return (
    <div key={course.id} class="course-card">
      <img
        class="course-card__logo"
        src={course.icon}
        alt={`icon-${course.title}`}
      />
      <h2 class="course-card__heading">{course.title}</h2>
      <p class="course-card__description">{course.description}</p>
      <Button typeButton={"course-card__link"} />
    </div>
  );
};

export default Card;
