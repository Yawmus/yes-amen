import React from 'react'
import games from './schoolGames'
import Gallery from 'react-grid-gallery'

class Game extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    let props = this.props;
    let game = games().filter(({ id }) => id === props.match.params.id)

    return (
      <div className="game">
        {game.map(( {name, images, type, desc2, bullets, playLink, gitLink } ) => {
          let paragraphs = bullets.map((para) => {
            return (
              <li>
                {para}
              </li>
            )
          })
          return (
            <div className="portfolioItem">
              <div className='gallery'>
                <Gallery images={images} float='left'/>
              </div>
              <br/>
              <h3 align="center">
                { name }
              </h3>
              <h6>
                <i>
                  { type }
                </i>
              </h6>
              <br/>
              <p align='center'>
                { desc2 }
              </p>
              <ul>
                { paragraphs }
              </ul>
              <div align='center'>
                {
                  playLink !== undefined ?
                  <a href={playLink}>
                    Play the game!
                  </a> : null
                }
              </div>
              <br/>
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
export default Game

