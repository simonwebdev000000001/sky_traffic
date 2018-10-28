import React, { Component, Fragment } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom'

// react-router-dom
import { Route } from 'react-router-dom'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Login from './components/Login'
import Dashboard from './components/Dashboard'



import { isLogedIn } from './redux/actions/auth'

class AppRoutes extends Component {

    constructor(props) {
        super(props)
        this.inter = 0;
        this.state = {
            isLocalStorageChecked: false
        }
    }
    componentWillMount() {
        this.props.isLogedIn();
    }
    render() {
        let { user } = this.props;
        if (this.inter++ < 1) {
            setTimeout(() => {
                this.setState({ isLocalStorageChecked: true })
            }, 1000)
            return null;
        }

        return (
            <BrowserRouter>
                {
                    user ? (
                        <Switch>
                            <Route path='/' component={Dashboard} />
                        </Switch>
                    ) : (
                            <Switch>
                                <Route path='/' component={Login} />
                            </Switch>
                        )
                }
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => ({
    user: state.auth.user
})
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        isLogedIn
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes) 
