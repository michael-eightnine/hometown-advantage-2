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

  setUploadedFile = (file) => {
    const reader = new FileReader()

    reader.onload = (upload) => {
      this.setState({
        image: upload.target.result,
      })
    }

    reader.readAsDataURL(file)
  }

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
        {image === null && !complete
          ? <Uploader onDrop={this.setUploadedFile} />
          : null
        }

        {image !== null && !complete
          ? <FileDisplay image={image} onComplete={this.setComplete} />
          : null
        }

        {complete &&
          <Affirm />
        }
      </section>
    )
  }
}

export default ValueMachine
