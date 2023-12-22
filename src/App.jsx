import { useState } from "react";
import Header from "./components/Header";
import Course from "./components/Course";
// import Counter from "./components/Counter";

import "./App.css";
function App() {
  const info = [
    {
      instructor: "Arsalan",
      session: "React.js",
      isStarted: false,
    },
    {
      instructor: "Saad",
      session: "Angularjs",
      isStarted: false,
    },
    {
      instructor: "Hamza",
      session: "Vue",
      isStarted: true,
    },
    {
      instructor: "Bashir",
      session: "Vanilla JS",
      isStarted: true,
    },
  ];
  // const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      {info.map((item, index) => {
        if (item.isStarted == true) {
          return (
            <Course
              key={index}
              instructor={item.instructor}
              session={item.session}
            />
          );
        } else {
          return;
        }
      })}

      {/* <Counter count={count} setCount={setCount} /> */}
    </>
  );
}

export default App;
