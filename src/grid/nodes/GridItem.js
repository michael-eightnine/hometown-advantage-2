import React from 'react'

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

export default GridItem
