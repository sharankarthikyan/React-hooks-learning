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
  const [selected, setSelected] = useState(options[0]);

  const showAccordion = () => {
    if (window.location.pathname === "/") return <Accordion items={items} />;
  };

  const showList = () => {
    if (window.location.pathname === "/list") return <Search />;
  };
  const showDropdown = () => {
    if (window.location.pathname === "/dropdown")
      return (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      );
  };

  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {/*<Translate />*/}
    </div>
  );
};
