import React from 'react'
import blogs from './blogEntry'

class Blog extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="blog">
        {blogs().map(( {name, date, id, body, image, imageLocation,  } ) => {
          let imageOrientation = parseInt(id) % 2 === 0 ? 'right' : 'left';
          let paragraphs = body.map((para) => {
            return (
              <p>
                {para}
              </p>
            )
          })
          return (
            <div>
              <br/>
              <h4 align="center">
                {name}
              </h4>
              <p align="center">
                <i>
                  {date}
                </i>
              </p>
              <br/>
              <img src={require(`./images/${image}`)} alt="A beautiful speciment" height="220px" align={imageOrientation}/>
              <p className='blogBody'>
                {paragraphs}
              </p>
              <br/>
            </div>
          )
        })}
    </div>
    )
  }
}
export default Blog

