import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    Button, Form, FormGroup,
    FormControl, Checkbox, ControlLabel,
    Grid,
    Col,
    Row,
    Alert

} from 'react-bootstrap';

import { onLogIn } from '../../redux/actions/auth';

class CenterView extends PureComponent {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={1} md={4}></Col>
                    <Col xs={4} md={4}>{this.props.children}</Col>
                    <Col xs={1} md={4}></Col>
                </Row>
            </Grid>
        )
    }
}
class Login extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
        this.onLogin = this.onLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDismiss = this.handleDismiss.bind(this);
    }
    onLogin(e) {
        e.preventDefault();
        try {
            this.props.onLogIn(this.state);
        } catch (e) {
            this.setState({
                error: e.message
            })
        }

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleDismiss() {
        this.setState({ error: '' })
    }

    render() {
        const { email, password, error } = this.state;

        return (
            <CenterView>
                <Form horizontal onSubmit={this.onLogin}>
                    <FormGroup controlId="formHorizontalEmail" >
                        <Col componentClass={ControlLabel} sm={2}> Email </Col>
                        <Col sm={10}>
                            <FormControl
                                type="text"
                                placeholder="UserName"
                                value={email}
                                name="email"
                                onChange={this.handleChange}
                                required />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}> Password </Col>
                        <Col sm={10}>
                            <FormControl

                                value={password}
                                name="password"
                                onChange={this.handleChange}
                                type="password"
                                placeholder="Password"
                                required />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit"  >Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>

                {error && (
                    <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                        <p>{error}</p>
                    </Alert>
                )}
            </CenterView>
        );
    }
}
const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        onLogIn
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(Login) 
