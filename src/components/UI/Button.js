//Way 1
// import './Button.module.css';
// import React from "react";

// const Button = (props) => {
//
//     return (
//         <button type={props.type} className="button" onClick={props.onClick}>
//             {props.children}
//         </button>
//     );
// };

//Way 2 - Styled Components

//Using styled-components library.
// import styled from "styled-components";
// // //Tagged template literal from JS.
// // const Button = styled.button`
// //
// //     width: 100%;
// //     font: inherit;
// //     padding: 0.5rem 1.5rem;
// //     border: 1px solid rgba(97, 0, 124, 0.12);
// //     color: white;
// //     background: rgba(97, 0, 124, 0.5);
// //     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
// //     cursor: pointer;
// //
// //   @media (min-width: 768px) {
// //     width: auto;
// //   }
// //
// //   &:focus {
// //     outline: none;
// //   }
// //
// //   &:hover,
// //   &:active {
// //     background: #ac0e77;
// //     border-color: #ac0e77;
// //     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// //   }`;

//Way 3 - Using CSS Modules

import React from "react";
import styles from './Button.module.css';

const Button = (props) => {

    return (
        // Would be classsName ="" now its className={}
        <button type={props.type} className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;