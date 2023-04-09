import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ScrollStyle from "./Scroll.module.css";

function Scroll() {
  // const [position, setPosition] = useState(0);
  const elementRef = useRef([]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onScroll() {
    // setPosition(window.scrollY, position);

    let observer = new IntersectionObserver((e) => {
      e.forEach((eBox) => {
        console.log(eBox);
        if (eBox.isIntersecting) {
          eBox.target.style.opacity = 1;
          eBox.target.style.transform = "translateY(-100px)";
        } else {
          eBox.target.style.opacity = null;
          eBox.target.style.transform = null;
        }
      });
    });

    // observer.observe(elementRef.current[0]);
    // observer.observe(elementRef.current[1]);
    // observer.observe(elementRef.current[2]);
    observer.observe(elementRef.current[3]);
    observer.observe(elementRef.current[4]);
    observer.observe(elementRef.current[5]);
  }

  return (
    <Section className="section-scroll">
      <h1>스크롤 이벤트</h1>
      <div className="content-scroll">
        <ul>
          <li
            ref={(elem) => (elementRef.current[0] = elem)}
            onScroll={onScroll}
          >
            <p>Scroll Event</p>
          </li>
          <li
            ref={(elem) => (elementRef.current[1] = elem)}
            onScroll={onScroll}
          >
            <p>Scroll Event</p>
          </li>
          <li
            ref={(elem) => (elementRef.current[2] = elem)}
            onScroll={onScroll}
          >
            <p>Scroll Event</p>
          </li>
          <li
            ref={(elem) => (elementRef.current[3] = elem)}
            onScroll={onScroll}
          >
            <p>Scroll Event</p>
          </li>
          <li
            ref={(elem) => (elementRef.current[4] = elem)}
            onScroll={onScroll}
          >
            <p>Scroll Event</p>
          </li>
          <li
            ref={(elem) => (elementRef.current[5] = elem)}
            onScroll={onScroll}
          >
            <p>Scroll Event</p>
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default Scroll;

let Section = styled.section`
  p {
    font-size: 48px;
    padding: 100px 0;
  }
`;
