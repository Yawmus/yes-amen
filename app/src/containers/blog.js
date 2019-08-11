import React from 'react'
import blogs from './blogEntry'

class Blog extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="blog">
        {blogs().map(( {name, date, id, body, image } ) => {
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
              <h5 align="center">
                {name}
              </h5>
              <p align="center">
                <i>
                  {date}
                </i>
              </p>
              <br/>
              <img src={require(`./images/${image}`)} alt="A beautiful speciment" height="300px" align="right"/>
              {paragraphs}
            </div>
          )
        })}

        <br/>
        <p>
        </p>
        <p>
        </p>
        <p>
        </p>
        <br/>
        <br/>
    </div>
    )
  }
}
export default Blog

