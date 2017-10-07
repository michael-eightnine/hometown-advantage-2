import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import GridItem from './nodes/GridItem'
import GridPromo from './nodes/GridPromo'
import Placeholder from './nodes/Placeholder'
import StreamFooter from './extras/StreamFooter'
import CollectionFooter from './extras/CollectionFooter'

const GridList = ({gridItems, onItemClick, isCollection}) => {

  // Generates the list of grid items
  // If the item is a Promo item, render the GridPromo component
  // Otherwise render the standard GridItem component
  const generateList = () => {
    return gridItems.map((item, i) => {
      return (
        <LazyLoad
  				key={i}
  				offset={100}
  				placeholder={<Placeholder />}
        >
          {item.isPromo === true
            ? <GridPromo item={item} onClick={onItemClick} />
            : <GridItem item={item} onClick={onItemClick} />
          }
        </LazyLoad>
      )
    })
  }

  return (
    <section className='grid-list fade-inner'>
      {generateList()}
      {isCollection === true
        ? <CollectionFooter />
        : <StreamFooter />
      }
    </section>
  )
}

GridList.propTypes = {
  gridItems: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func,
  isCollection: PropTypes.bool,
}

export default GridList
