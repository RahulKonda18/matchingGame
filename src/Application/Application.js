import {Component} from 'react'
import TabItem from '../TabItem/TabItem'
import ThumbnailItem from '../ThumbnailItem/ThumbnailItem'
import './Application.css'

const getRandomImage = x => x[Math.floor(Math.random() * 30)].imageUrl

class Application extends Component {
  state = {
    imagesUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    activeTab: 'FRUIT',
    score: 0,
    timer: 60,
    isGameOver: 0,
  }

  componentDidMount() {
    console.log('Component did mount')
    this.timerID = setInterval(this.tim, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tim = () => {
    const {timer} = this.state
    if (timer >= 1) {
      this.setState(prev => ({timer: prev.timer - 1}))
      console.log('Component did mount')
    } else {
      this.setState({isGameOver: 1})
    }
  }

  check = id => {
    const {imagesUrl} = this.state
    if (imagesUrl === id) {
      const {imagesList} = this.props
      const y = getRandomImage(imagesList)
      this.setState(prev => ({imagesUrl: y, score: prev.score + 1}))
    } else {
      this.setState({
        isGameOver: 1,
      })
    }
  }

  getThumbnails = (x, activeTab) =>
    x.filter(each => each.category === activeTab)

  reset = () => {
    this.setState({score: 0, timer: 60, isGameOver: 0})
    this.render()
  }

  changeTab = id => this.setState({activeTab: id})

  render() {
    const {activeTab, score, timer, isGameOver, imagesUrl} = this.state
    const {tabsList, imagesList} = this.props
    const thumbnails = this.getThumbnails(imagesList, activeTab)
    const randomUrl = imagesUrl
    if (isGameOver === 1) {
      return (
        <div>
          <div className="navbar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="logo"
            />
            <ul className="score-box">
              <li>
                <p className="text">
                  Score: <span>{score}</span>
                </p>
              </li>
              <li>
                <div className="time">
                  <img
                    className="timer"
                    src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                    alt="timer"
                  />
                  <p>
                    <span>{timer} sec</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg">
            <div className="score-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt="trophy"
                className="trophy"
              />
              <p className="score">YOUR SCORE</p>
              <p className="final-score">{score}</p>
              <button
                onClick={this.reset}
                type="button"
                className="try-again-button"
              >
                <img
                  className="reset"
                  alt="reset"
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                />
                <p className="score">PLAY AGAIN</p>
              </button>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
          <ul className="score-box">
            <li>
              <p className="text">
                Score: <span>{score}</span>
              </p>
            </li>
            <li>
              <div className="time">
                <img
                  className="timer"
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                  alt="timer"
                />
                <p className="span">{timer} sec</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="center">
          <div className="">
            <img className="random-image" src={randomUrl} alt="match" />
            <ul className="tabs">
              {tabsList.map(each => (
                <TabItem
                  key={each.tabId}
                  click={this.changeTab}
                  details={each}
                  active={activeTab}
                />
              ))}
            </ul>
            <ul className="thumbnails">
              {thumbnails.map(each => (
                <ThumbnailItem
                  check={this.check}
                  details={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Application
