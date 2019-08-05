import React from 'react'
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import setActions from './../store/setActions';

const mapStateToProps = (state) => {
    let props = {
      email:state.email,
      error: state.error
    };
    return props;
};

const mapDispatchToProps = (dispatch, location) => {
    return {
      sendEmail: payload => {
        dispatch(setActions.sendEmail(payload));
      },
    }
}

class Contact extends React.Component {
  onSubmit = () => {
    const email = this.refs.email.value;
    const subject = this.refs.subject.value;
    const body = this.refs.body.value;

    this.props.sendEmail({
      from: `Rando looking at your portfolio <${email}>`,
      to: "peter.jacobsen55@gmail.com",
      subject: subject,
      text: body
    })
    //alert('Sent email');
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.error.message)
    {
      alert(this.props.error.message)
    }
    if(!prevProps.email.sent && this.props.email.sent)
    {
      alert('Email successfully sent')
    }
  }

  render() {
    return (
      <div className="contact">
        <br/>
        <p>
          <img src={require('./images/animal.jpg')} height="300px" align="right"/>
          Hello! My name is Peter and I live in Salt Lake City. I'm a Computer Science (emphasis in Entertainment Arts & Engineering) graduate from the University of Utah. My interests include rock climbing, gaming, photograpy, tennis and film. I program primarily in Javascript (fullstack), C# and PHP.
        </p>
        <p>
          If you're a recruiter or are intersted in hiring me for freelance work, shoot me an email!
        </p>
        <br/>
        <br/>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control ref='email' type="email" placeholder="Your email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control ref='subject' type="email" placeholder="Subject" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control ref='body' as="textarea" rows="3" placeholder="Body" />
          </Form.Group>
          <Button onClick={this.onSubmit} variant="primary" type="button">
            Send
          </Button>
        </Form>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
