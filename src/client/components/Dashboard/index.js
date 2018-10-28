import React, { PureComponent } from 'react'; 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 


class Dashboard extends PureComponent {

    constructor(props) {
        super(props) 
    }
    render() { 
        return (
            <div className="container">
                test
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) 
