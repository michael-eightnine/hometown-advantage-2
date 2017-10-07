import React from 'react'
import PropTypes from 'prop-types'

const GridModal = ({item, onClick}) => {
	const itemTitle = item.title
  const itemMedia = `${process.env.PUBLIC_URL}/imgContent/${item.previewMedia}`

	return (
		<div
      className='grid-modal'
      onClick={() => onClick(null)}
    >
			<div className='grid-modal-content'>
				<div className='grid-modal-content-text'>
					{itemTitle}
				</div>
				<div className='grid-modal-content-image'>
					<img src={itemMedia} alt='enlarge' />
				</div>
			</div>
		</div>
	)
}

GridModal.propTypes = {
	item: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default GridModal
