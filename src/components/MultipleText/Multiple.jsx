import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Multiple.css";

const Multiple = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Software Developer",
        "Trader",
        "Freelancer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="multiple-text">
      <h3>
        And I'm a <span className="typed" ref={el} />
      </h3>
    </div>
  );
};

export default Multiple;
