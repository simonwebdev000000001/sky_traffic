import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import {
    Table
} from 'react-bootstrap';


import { loadAllAirports } from '../../redux/actions/dashboard';
import AiroportItem from './AiroportItem';


class Dashboard extends PureComponent {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadAllAirports();
    }

    render() {

        const { airportList } = this.props;

        return (
            <div className="container">
                {airportList.length && (
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>icao</th>
                                <th>Name</th>
                                <th>State</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                airportList.map((el, index) => {
                                    return (
                                        <AiroportItem el={el} key={el.woeid} />
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                )}

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    airportList: state.dashboard.airportList
})
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        loadAllAirports
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) 
