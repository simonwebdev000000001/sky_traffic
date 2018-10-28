import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Login extends PureComponent {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                Login
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


export default connect(mapStateToProps, mapDispatchToProps)(Login) 
