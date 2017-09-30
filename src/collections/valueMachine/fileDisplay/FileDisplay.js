import React, { Component } from 'react'
import ActionBar from './ActionBar'

class FileDisplay extends Component {
  constructor() {
    super()
    this.state = {
      liked: false,
    }
  }

  setLiked = () => {
		this.setState({ liked: true })
		setTimeout(() => {
			this.props.onComplete()
		}, 1750)
	}

  render() {
    const beenLiked = this.state.liked
    const imgSrc = this.props.image

    return (
      <div className="file-display">
        <div className="file-display-image">
          <img src={imgSrc} alt="Your Upload" onDoubleClick={this.setLiked} />
          {/* TODO: Fix this
            {beenLiked &&
            <div className="heart-overlay">
              <img src={HeartOverlay} alt="liked" />
            </div>
          } */}
        </div>
        <div className="file-display-actions">
          <ActionBar
            onLike={this.setLiked}
            beenLiked={beenLiked}
          />
        </div>
      </div>
    )
  }
}

export default FileDisplay
