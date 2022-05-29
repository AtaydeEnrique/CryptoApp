import React from 'react'
import moment from 'moment'

import defaultThumbnail from '../assets/news_thumbnail.jpg'
import './NewsCard.css'

const NewsCard = ({article}) => {
    const {name, description, datePublished, image, url} = article

    return (

    <div className='news-card'>
        <div className='news-card-header'>
            <h3>{name.length > 100 ? name.substring(0,100) + '...'  : name}</h3>
            <img src={image ? image?.thumbnail.contentUrl : defaultThumbnail} alt='Cypto Logo'/>
        </div>
        <div className='news-card-details'>
           <p> {description.length > 100 ? description.substring(0,100) + '...' : description} </p>
        </div>
        <div className='news-card-footer'>
                <p>{moment(datePublished).startOf('ss').fromNow()}</p>
                <a href={url} target='_blank' rel="noreferrer">To full article</a>
        </div>
        

    </div>
  )
}

export default NewsCard