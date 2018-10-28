import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import {
    Modal, FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import AirStatus from './AirStatus';

import { loadAiroportData } from '../../../redux/actions/dashboard';

class AiroportItem extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }

        this.minutes = [];
        for (let i = 0; i < 60; i += 5) {
            this.minutes.push(i);
        }

        this.listSelection = [
            {
                type: 'departure',
                name: 'departings'
            },
            {
                type: 'arrival',
                name: 'arrivings'
            }
        ];

        this.onSelectRow = this.onSelectRow.bind(this);
        this.onSelectMinute = this.onSelectMinute.bind(this);
    }
    onSelectRow() {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    onSelectMinute(selection) {

        let target = selection.currentTarget;
        this.props.loadAiroportData({
            el: this.props.el,
            minute: target.value,
            name: target.name,
            type: this.listSelection.filter((el) => el.name == target.name)[0].type
        })

    }


    render() {

        const { el } = this.props;
        const { showModal } = this.state;

        return (
            <Fragment>
                <tr onClick={this.onSelectRow}>
                    <td>{el.city}</td>
                    <td>{el.icao}</td>
                    <td>{el.name}</td>
                    <td>{el.state}</td>
                    <td>{el.country}</td>
                </tr>

                {showModal && (
                    <Modal
                        show={showModal}
                        onHide={this.onSelectRow}
                        bsSize="large"
                        aria-labelledby="contained-modal-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Departues/Arrivals <b>{el.name}</b></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                this.listSelection.map((elAction, indX) => {
                                    let listV = el[elAction.name];
                                    return (
                                        <div key={`action-${indX}`}>
                                            <p>{elAction.name}</p>
                                            <div>
                                                <FormGroup >
                                                    <ControlLabel>Select last minute</ControlLabel>
                                                    <FormControl componentClass="select"
                                                        name={elAction.name}
                                                        onChange={(e) => this.onSelectMinute(e)}
                                                        placeholder="select last minute">
                                                        {
                                                            this.minutes.map((option, index) => {
                                                                return (
                                                                    <option key={`arrival-trafic-${indX}-${index}`}
                                                                        value={option}>{option}</option>
                                                                )
                                                            })
                                                        }

                                                    </FormControl>
                                                </FormGroup>
                                            </div>
                                            {listV ?(listV.length?(
                                                <AirStatus list={listV} />
                                            ):<p>No Items Found!!!</p>):null}
                                        </div>
                                    )
                                })
                            }
                        </Modal.Body>
                    </Modal>
                )}

            </Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        loadAiroportData
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(AiroportItem) 
