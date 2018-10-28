import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types'


import {
    Table
} from 'react-bootstrap';

import './index.css';



class AirStatus extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }

        this.minutes = [];
        for (let i = 0; i < 60; i += 5) {
            this.minutes.push(i);
        }
        this.onSelectRow = this.onSelectRow.bind(this);
    }
    onSelectRow() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {

        const { list } = this.props;

        let keys = Object.keys(list[0]);
        return (
            <div className="my-table">
                <Table striped bordered condensed hover >
                    <thead>
                        <tr >
                            {
                                keys.map((el) => {
                                    return (
                                        <th key={`key-${el}`}>{el}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, index) => {
                                return (
                                    <tr key={`item-${item.id}`}>
                                        {
                                            keys.map((el) => {
                                                return (
                                                    <td key={`item-key-${el}`}>{item[el]}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

// PropTypes
AirStatus.proptypes = {
    list: PropTypes.array.isRequired,
}

export default AirStatus
