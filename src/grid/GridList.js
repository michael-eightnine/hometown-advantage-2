import React from 'react'
import LazyLoad from 'react-lazyload'
import GridItem from './nodes/GridItem'
import GridPromo from './nodes/GridPromo'
import Placeholder from './nodes/Placeholder'
import StreamFooter from './extras/StreamFooter'
import CollectionFooter from './extras/CollectionFooter'

const GridList = ({gridItems, onItemClick, isCollection}) => {

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
    <section className='grid-list'>
      {generateList()}
      {isCollection === true
        ? <CollectionFooter />
        : <StreamFooter />
      }
    </section>
  )
}

export default GridList
