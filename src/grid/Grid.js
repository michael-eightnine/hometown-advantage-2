import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import GridList from './GridList'
import GridModal from './extras/GridModal'
import gridContent from './../data/content'

class Grid extends Component {
  constructor() {
    super()
		this.state = {
			activeItem: null,
		}
  }

  // Filter the JSON data that describes the grid content
  // If no filterBy value is provided, return all streamable items
  // Otherwise we're on a collection specific page
  // So filter the content to be only that collection and remove any promos
  filterContent = () => {
    if(!this.props.filterBy) {
      return gridContent.filter((item) =>
        !item.noStream
      )
    } else {
      return gridContent.filter((item) =>
        item.type === this.props.filterBy && !item.isPromo
      )
    }
  }

  // Updates state to show or hide the GridModal
  // Passing `null` to this function hides the GridModal
  updateActiveItem = (item) => {
		this.setState({activeItem: item})
	}

  render() {
    const filterBy = this.props.filterBy || 'content stream'
    const gridItems = this.filterContent()
    const isCollection = this.props.filterBy ? true : false

    return (
      <div className='width-container'>
        <h1 className='grid-header' data-filter-by={filterBy}>
          {filterBy}
        </h1>
        <GridList
          gridItems={gridItems}
          onItemClick={this.updateActiveItem}
          isCollection={isCollection}

        />
        <CSSTransitionGroup
          transitionName='modal-fade'
          transitionEnterTimeout={350}
          transitionLeaveTimeout={350}
        >
          {this.state.activeItem != null
            ? <GridModal
                item={this.state.activeItem}
                onClick={this.updateActiveItem}
              />
            : null
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

Grid.propTypes = {
  filterBy: PropTypes.string,
}

export default Grid
