import React, { Component } from 'react'
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

  updateActiveItem = (item) => {
		this.setState({activeItem: item})
	}

  render() {
    const filterBy = this.props.filterBy || 'content stream'
    const activeItem = this.state.activeItem
    const gridItems = this.filterContent()
    const isCollection = this.props.filterBy

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
          {activeItem != null
            ? <GridModal item={activeItem} onClick={this.updateActiveItem} />
            : null
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Grid
