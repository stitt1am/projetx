// import React, {Component} from 'react';
// import React from 'react';
// import PropTypes from 'prop-types';
//
// class Button extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//
//     render() {
//         return (
//             <button
//                 className="btnDefault">
//                 {props.label}
//             </button>
//         );
//     }
// }
//
// export const buttonPropTypes = {
//     label: PropTypes.string
// }
// Button.propTypes = buttonPropTypes;
//
// export default Button;

import './button.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
    <span className="accessory-btn">
        <button id={props.id}
                data-ga={`ButtonClick|${props.label}`}
                className={`button ${props.className} ${props.isPrimary ? 'primary' : 'secondary' }`}
                disabled={props.disabled}
                onClick={() => props.handleAction()}>
            {props.label}
        </button>
    </span>
);

export const buttonPropTypes = {
    className: PropTypes.string,
    handleAction: PropTypes.func.isRequired,
    label: PropTypes.string,
    id: PropTypes.string,
    isPrimary: PropTypes.bool,
    disabled: PropTypes.bool
};

Button.propTypes = buttonPropTypes;

export default Button;
