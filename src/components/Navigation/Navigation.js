import React, {Component} from 'react';
import './Navigation.scss';
import cx from 'classnames';
import {Motion, StaggeredMotion, spring} from 'react-motion';

import PropTypes from 'prop-types';

// const { noop } = _;
const config = { stiffness: 140, damping: 14 };
const toCSS = (scale) => ({ transform: `scale3d(${scale}, ${scale}, ${scale})` });
// const toCSS = (rotateX) => ({ transform: `rotateX: ${rotateX}deg` });

const tooltipArrayOne = ['One', 'Two', 'Three'];
const Button = (props) => <button className={cx('button', props.className)} style={props.style} onClick={props.onClick}>{props.children}</button>;
const ButtonGroup = (props) => <div className="button-group" style={props.style}>{props.children}</div>;
const Tooltip = (props) => <span className="tooltip">{props.text}</span>;

class Navigation extends Component {

    constructor() {
        super();

        this.state = {
            active: false,
        }

        this.onClick = this.onClick.bind(this);
    }




    onClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <div className="container">
                {/*<Motion*/}
                {/*defaultStyle={{ scale: 0 }}*/}
                {/*style={{ scale: spring(1, config) }}>*/}
                {/*{*/}

                {/*}*/}
                {/*</Motion>*/}
                {/*<Motion*/}
                    {/*defaultStyle={{ scale: 0.675 }}*/}
                    {/*style={{ scale: spring(0.675, config) }}*/}
                {/*>*/}
                    {/*{*/}

                        {/*(value) =>*/}
                            {/*<Button*/}
                                {/*onClick={this.onClick}*/}
                                {/*style={{*/}
                                    {/*transform: 'scale(' + interpolatingStyles.s + ')',*/}
                                {/*}}*/}

                            {/*>*/}
                                {/*<span className={this.state.active ? 'icon active' : 'icon'} />*/}

                                {/*/!*<Tooltip text={tooltipArrayOne[0]}/>*!/*/}
                            {/*</Button>*/}

                        {/*// <div className="box" style={toCSS(value.scale)} />*/}
                    {/*}*/}
                {/*</Motion>*/}
                <ButtonGroup>

            </ButtonGroup>

                <Motion
                    defaultStyle={{rotateX: 220}}
                    style={{rotateX: spring(0, {stiffness: 330, damping: 14})}}>
                    {
                        (value) => <div className="box" style={toCSS(value.rotateX)}/>
                    }
                </Motion>
                <Motion
                    defaultStyle={{rotateX: 220}}
                    style={{rotateX: spring(0, {stiffness: 330, damping: 14})}}>
                    {
                        (value) => <div className="box" style={toCSS(value.rotateX)}/>
                    }
                </Motion>
            </div>
        );
    }
}


export default Navigation;
