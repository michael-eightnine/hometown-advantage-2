import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import invalidImage from './../../../svg/affirmation/noImageFace.svg'

class Uploader extends Component {
  constructor() {
    super()
    this.state = {
      dragActive: false,
      invalidUpload: false,
      uploadComplete: false,
    }
  }

  prevent = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }
  dragEnter = (e) => {
    this.prevent(e)
    this.setState({dragActive: true})
  }
  dragOver = (e) => {
    this.prevent(e)
  }
  dragLeave = (e) => {
    this.prevent(e)
    this.setState({dragActive: false})
  }

  drop = (e, wasDropped) => {
    this.prevent(e)
    let targetFile

    if(wasDropped) {
      this.setState({ dragActive: false })
      targetFile = e.dataTransfer.files[0]
    } else {
      targetFile = this.fileUpload.files[0]
    }

    const imageType = /^image\//
    if (imageType.test(targetFile.type)) {
      this.setComplete(targetFile)
    } else {
      this.showInvalid()
    }
  }

  setComplete = (file) => {
    this.setState({uploadComplete: true})
    setTimeout(() => {
      this.props.onDrop(file)
    }, 500)
  }

  showInvalid = () => {
		this.setState({ invalidUpload: true })
		setTimeout(() => {
			this.setState({ invalidUpload: false })
		}, 2250)
	}

	forceInputClick = () => {
		this.fileUpload.click()
	}

  render() {
		const dropboxClass = this.state.dragActive ? 'dropbox active' : 'dropbox'

		return (
			<div className={dropboxClass}
				onDragEnter={(e) => this.dragEnter(e)}
				onDragOver={(e) => this.dragOver(e)}
				onDragLeave={(e) => this.dragLeave(e)}
				onDrop={(e) => this.drop(e, true)}
			>
				<div className='dropbox-prompt'>
					<h3>Drag &amp; Drop an Image</h3>
					<div className='divider'>or</div>
					<button className='btn btn-standard btn-block' onClick={(e) => this.forceInputClick(e)}>
            Select an Image
          </button>
					<input
            type='file'
            id='fileInput'
            accept='image/*'
            style={{display: 'none'}}
						onChange={(e) => this.drop(e, false)}
						ref={(input) => this.fileUpload = input}
					/>
				</div>
				<CSSTransitionGroup
					transitionName='error-fade'
					transitionEnterTimeout={350}
					transitionLeaveTimeout={350}
				>
					{this.state.invalidUpload &&
						<div className='dropbox-prompt dropbox-error'>
							<img src={invalidImage} alt='Invalid Upload' />
							<h3>That's not an image...</h3>
						</div>
					}
				</CSSTransitionGroup>
				<div className='dropbox-guideline'>
					Square images &amp; images under 1MB work best...
				</div>
			</div>
		)
	}
}

export default Uploader
