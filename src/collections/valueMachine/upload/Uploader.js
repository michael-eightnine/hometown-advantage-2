import React, { Component } from 'react'
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

  // Dropbox related functions
  // Sets UI state to reflect drag activity
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

  // On file drop, prevent the default action and grab the target file
  // Drag & dropped vs. uploaded via dialog require different property access
  // One the file is assigned to `targetFile`, check that its type is an image
  // If it is, set complete. Otherwise show the "file invalid" error
  drop = (e, wasDropped) => {
    this.prevent(e)
    const imageType = /^image\//
    let targetFile

    if(wasDropped) {
      this.setState({ dragActive: false })
      targetFile = e.dataTransfer.files[0]
    } else {
      targetFile = this.fileUpload.files[0]
    }

    if (imageType.test(targetFile.type)) {
      this.setComplete(targetFile)
    } else {
      this.showInvalid()
    }
  }

  // Sets the UI state to indicate an upload is complete TODO: show loading window
  // Calls prop function `onDrop` after a timeout, to allow for completion animation to run
  setComplete = (file) => {
    this.setState({uploadComplete: true})
    setTimeout(() => {
      this.props.onDrop(file)
    }, 500)
  }

  // Called when a non-image file is uploaded
  // Sets the invalid state to true, then resets after a timeout
  // Timeout allows for CSS animation to fade out the invalid warning
  showInvalid = () => {
		this.setState({ invalidUpload: true })
		setTimeout(() => {
			this.setState({ invalidUpload: false })
		}, 2250)
	}

  // Used by the custom file upload button
  // When clicked, it forces a click on the real file upload input
  // To trigger the native file selection dialog
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
				{this.state.invalidUpload &&
					<div className='dropbox-prompt dropbox-error'>
						<img src={invalidImage} alt='Invalid Upload' />
						<h3>That's not an image...</h3>
					</div>
				}
				<div className='dropbox-guideline'>
					Square images &amp; images under 1MB work best...
				</div>
			</div>
		)
	}
}

export default Uploader
