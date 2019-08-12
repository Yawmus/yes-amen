import React from 'react'
import YouTube from 'react-youtube';
import games from './schoolGames';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    const opts = {
      height: '305',
      width: '520',
      playerVars: {
        autoplay: 0
      }
    };
    let gameList = games();
    let highlight = gameList[0];
    gameList.shift();
    console.log(gameList);

    return (
      <div className="home">
        <div className="flawsOuter">
          <div className="flawsInner">
            <YouTube float="left"
              videoId="CEo4JYssQRI"
              opts={opts}
              onReady={this._onReady}
            />
            <div className="highlighted">
            <h3>
              { highlight.name }
            </h3>
            <h6>
              <i>
                { highlight.type }
              </i>
            </h6>
            <br/>
            <p>
              { highlight.desc }
            </p>
            <div>
              {
                highlight.playLink !== undefined ?
                <a href={highlight.playLink}>
                  Play the game!
                </a> : null
              }
            </div>
            <div>
              {
                highlight.gameLink !== undefined ?
                <Link to={highlight.gameLink}>
                  More information
                </Link> : null
              }
            </div>
          </div>
        </div>
        </div>
      <br/>
      <br/>
        {
          gameList.map(( { name, type, desc, gameLink, playLink } ) => {
            return (
              <div className="portfolioItem">
                <h3 align="center">
                  { name }
                </h3>
                <h6>
                  <i>
                    { type }
                  </i>
                </h6>
                <p>
                  { desc }
                </p>
                <div>
                  {
                    playLink !== undefined ?
                    <a href={playLink}>
                      Play the game!
                    </a> : null
                  }
                </div>
                <div>
                  {
                    gameLink !== undefined ?
                    <Link to={gameLink}>
                      More information
                    </Link> : null
                  }
                </div>
              <br/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default Home
