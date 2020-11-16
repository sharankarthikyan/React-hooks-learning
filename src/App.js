import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

const options = [
  { label: "The color Red", value: "red" },
  { label: "The color Green", value: "green" },
  { label: "The shade of Blue", value: "blue" },
];

export default () => {
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      {/*<Accordion items={items} />*/}
      {/*<Search />*/}
      {/*<Dropdown*/}
      {/*  options={options}*/}
      {/*  selected={selected}*/}
      {/*  onSelectedChange={setSelected}*/}
      {/*/>*/}
      <Translate />
    </div>
  );
};
