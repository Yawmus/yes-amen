import React from 'react'

class Home extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="home">
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
    </div>
    )
  }
}
export default Home
