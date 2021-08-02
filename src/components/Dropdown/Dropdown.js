import { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, handleSelection }) => {
  const firstChoice = options && options[0] ? options[0] : "";
  //const [selectedOption, setSelectedOption] = useState(firstChoice);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    console.log(value);
    handleSelection(value);
    setIsOpen(false);
  };
  return (
    <div className="dropdown-container">
      <p>Pick a chart type</p>
      <div
        className="dropdown-header"
        value="select chart type"
        onClick={toggle}
      ></div>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            {options.map((option) => (
              <li
                className="list-item"
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
