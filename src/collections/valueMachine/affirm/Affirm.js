import React from 'react'
import ThumbsUp from './../../../svg/affirmation/thumbsUp.svg'
import CollectionFooter from './../../../grid/extras/CollectionFooter'

const Affirm = () => {
	return (
		<div className='affirm-display'>
			<img src={ThumbsUp} alt='GJ!' className='thumbs-up' />
			<h2>!SELF AFFIRMATION! VERY IMPRESSIVE GOOD JOB !GREAT!</h2>
			<CollectionFooter />
		</div>
  )
}

export default Affirm
