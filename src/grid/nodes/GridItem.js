import React from 'react'
import PropTypes from 'prop-types'

const GridItem = ({item, onClick}) => {
	const itemTitle = item.title
	const itemMedia = `${process.env.PUBLIC_URL}/imgContent/${item.previewMedia}`

	return (
		<div
      className='grid-list-item'
      onClick={() => onClick(item)}
    >
			<img src={itemMedia} alt={itemTitle} />
		</div>
	)
}

GridItem.propTypes = {
	item: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default GridItem
