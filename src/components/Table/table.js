import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './table.scss';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <table>
                <tbody>
                {/*real table code*/}
                <tr className="divideFader">
                    <td className="no-results">James Brown</td>
                    <td className="no-results">3:04</td>

                </tr>
                <tr className="divideFader">
                    <td className="no-results">Curtis Mayfield</td>
                    <td className="no-results">5:10</td>

                </tr>
                <tr>
                    <td className="no-results"><i className="fas fa-heart"/>The Stylistics</td>
                    <td className="no-results">2:38</td>

                </tr>
                <tr>
                    <td className="no-results">The Stylistics</td>
                    <td className="no-results">2:38</td>

                </tr>
                </tbody>
            </table>
        );
    }
}


export default Table;
