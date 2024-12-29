import { children } from "../data/children.js";
import { useState } from "react";

function toothParser(tooth) {
  return (
    <li>
      <p> tooth lost on: {tooth.date} </p>
      <p> tooth fairy gifted: {tooth.money}</p>
    </li>
  );
}

export function ChildTabs() {
  let [selectedIndex, setSelectedIndex] = useState(0);

  let tabContent = null;
  let example = children[selectedIndex];
  tabContent = (
    <div id="tab-content">
      <h3>{example.name}</h3>
      <p>{example.totalTeeth}</p>
      <span>
        <h4>
          {example.name} has lost {example.totalTeeth} teeth!
        </h4>
        <ul>{example.teeth.map((tooth, index) => toothParser(tooth))}</ul>
      </span>
    </div>
  );

  return (
    <Tabs
      id="examples"
      title="Children"
      buttons={children.map((child, index) => (
        <TabButton
          key={child.id}
          isSelected={selectedIndex == index}
          onClick={() => setSelectedIndex(index)}
        >
          <p>{child.name}</p>
        </TabButton>
      ))}
    >
      {tabContent}
    </Tabs>
  );
}

function TabButton({ children, onClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}

function Tabs({ title, children, buttons, ...other }) {
  return (
    <section {...other}>
      <h2> {title} </h2>
      <menu>{buttons}</menu>
      {children}
    </section>
  );
}
