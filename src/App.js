import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end framework.",
  },
  {
    title: "Why we use React?",
    content: "React is a fav JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use by creating components.",
  },
];

export default () => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <Accordion items={items} />
    </div>
  );
};
