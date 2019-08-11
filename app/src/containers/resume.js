import React from 'react'
import YouTube from 'react-youtube';

class Home extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    const opts = {
      height: '300',
      width: '520',
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <div className="resume">
        <iframe src="https://docs.google.com/document/d/189JPT2MbAhRR7aEKCUEmcoBbz-6JPUK5pi8hXogkUlU/preview" frameborder='0' width='100%' height='600'></iframe>

      </div>
    )
  }
}
export default Home

