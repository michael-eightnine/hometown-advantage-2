import React from 'react'
import { Link } from 'react-router-dom'

const GridPromo = ({item}) => {
  const linkRef = '/collections/' + item.type.replace(/\s+/g, '-').toLowerCase()
  const {promoType, title, itemCount, cta} = item

  return (
    <Link to={linkRef} className="grid-list-item grid-list-promo" title={cta}>
      <div className="promo-content">
        <h4 className="promo-content-label">{promoType}</h4>
        <h3 className="promo-content-title">{title}</h3>
        <div className="promo-content-count"><span>{itemCount}</span></div>
        <button className="promo-content-btn btn btn-standard">{cta}</button>
      </div>
    </Link>
  )
}

export default GridPromo
