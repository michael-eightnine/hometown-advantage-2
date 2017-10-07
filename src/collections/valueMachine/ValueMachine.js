import React, { Component } from 'react'
import Uploader from './upload/Uploader'
import FileDisplay from './fileDisplay/FileDisplay'
import Affirm from './affirm/Affirm'

class ValueMachine extends Component {
  constructor() {
    super()
    this.state = {
      image: null,
      complete: false,
    }
  }

  // Accepts a file object from the <Uploader /> component
  // Uses a FileReader() to convert the image to a dataURL
  // Then stores that dataURL in state via a reader.onload event
  setUploadedFile = (file) => {
    const reader = new FileReader()

    reader.onload = (upload) => {
      this.setState({
        image: upload.target.result,
      })
    }

    reader.readAsDataURL(file)
  }

  // Sets the Value Machine's state to complete
  // Indicates the success/affirmation message can be shown
  setComplete = () => {
    this.setState({
      complete: true,
    })
  }

  render() {
    const {image, complete} = this.state
    const valueMachineClass = complete ? 'value-machine value-machine-complete' : 'value-machine'
    return (
      <section className={valueMachineClass}>
        {image === null && !complete &&
          <Uploader onDrop={this.setUploadedFile} />
        }

        {image !== null && !complete &&
          <FileDisplay image={image} onComplete={this.setComplete} />
        }

        {complete &&
          <Affirm />
        }
      </section>
    )
  }
}

export default ValueMachine
