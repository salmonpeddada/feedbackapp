// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClick: true}

  onClickLove = () => this.setState({isClick: false})

  customer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="emoji-card">
        <h1>How satisfied are you with our customer support performance</h1>
        <ul className="emoji-container">
          {emojis.map(each => (
            <li key={each.id} className="emoji">
              <img
                src={each.imageUrl}
                alt={each.name}
                onClick={this.onClickLove}
              />
              <p>{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thank = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="emoji-card">
        <div className="emoji-container">
          <div className="emoji">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isClick} = this.state
    return (
      <div className="bg-container">
        {isClick ? this.customer() : this.thank()}
      </div>
    )
  }
}

export default Feedback
