// import './Button.css';
// import React from "react";

// const Button = (props) => {
//
//     return (
//         <button type={props.type} className="button" onClick={props.onClick}>
//             {props.children}
//         </button>
//     );
// };

//Using styled-components library.
import styled from "styled-components";
//Tagged template literal from JS.
const Button = styled.button`
  
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid rgba(97, 0, 124, 0.12);
    color: white;
    background: rgba(97, 0, 124, 0.5);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    margin-left: 86%;
  
  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }`;

export default Button;