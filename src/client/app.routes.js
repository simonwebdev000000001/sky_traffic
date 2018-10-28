import React, { Component, Fragment } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom'

// react-router-dom
import { Route } from 'react-router-dom'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Login from './components/Login'
import Dashboard from './components/Dashboard'


class AppRoutes extends Component {

    constructor(props) {
        super(props) 
        this.inter = 0;
        this.state = {
            isLocalStorageChecked: false
        }
    }
    render() {
        let isAuth = false;
        if (this.inter++ < 1) {
            setTimeout(() => {
                this.setState({ isLocalStorageChecked: true })
            }, 1000)
            return null;
        }

        return (
            <BrowserRouter>
                {
                    isAuth ? (
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
})
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes) 
