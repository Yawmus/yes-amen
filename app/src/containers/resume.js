import React from 'react'

class Home extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="resume">
        <iframe title="resume" src="https://docs.google.com/document/d/189JPT2MbAhRR7aEKCUEmcoBbz-6JPUK5pi8hXogkUlU/preview" frameBorder='0' width='100%' height='600'></iframe>

      </div>
    )
  }
}
export default Home

