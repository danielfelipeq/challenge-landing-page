import darkLogo from "./assets/logo-dark.svg";
import lightLogo from "./assets/logo-light.svg";
import "./App.css";
import Button from "./components/Button";

import animationIcon from "./assets/icon-animation.svg";
import designIcon from "./assets/icon-design.svg";
import photographyIcon from "./assets/icon-photography.svg";
import cryptoIcon from "./assets/icon-crypto.svg";
import businessIcon from "./assets/icon-business.svg";
import Card from "./components/Card";

const courses = [
  {
    id: 1,
    title: "Animation",
    description:
      "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    icon: animationIcon,
  },
  {
    id: 2,
    title: "Design",
    description:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    icon: designIcon,
  },
  {
    id: 3,
    title: "Photography",
    description:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    icon: photographyIcon,
  },
  {
    id: 4,
    title: "Crypto",
    description:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    icon: cryptoIcon,
  },
  {
    id: 5,
    title: "Business",
    description:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    icon: businessIcon,
  },
];

function App() {
  return (
    <section class="App">
      <div class="main-wrapper">
        <header class="header">
          <img class="logo" src={darkLogo} alt="logo" />
          <Button typeButton={"header-button"} />
        </header>
        <section class="intro">
          <div class="intro-text">
            <h1 class="intro-heading">Maximize skill, minimize budget</h1>
            <p class="intro-paragraph">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <Button typeButton={"intro-button"} />
          </div>
          <div class="intro-image"></div>
        </section>

        <div class="course-cards">
          <div class="intro-card">Check out our most popular courses!</div>
          {courses.map((course) => (
            <Card course={course} />
          ))}
        </div>
      </div>
      <footer class="footer">
        <div class="footer-wrapper">
          <img class="logo" src={lightLogo} alt="logo" />
          <Button typeButton={"footer-button"} />
        </div>
      </footer>
    </section>
  );
}

export default App;
