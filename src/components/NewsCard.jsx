import React from 'react'

import defaultThumbnail from '../assets/news_thumbnail.jpg'
import './NewsCard.css'

const NewsCard = ({article}) => {
    const {name, description, datePublished, image, url} = article
    // console.log(article?.image?.thumbnail.contentUrl)
  return (

    <div className='news-card'>
        <div className='news-card-header'>
            <h3>{name}</h3>
            <img src={image ? image?.thumbnail.contentUrl : defaultThumbnail} alt='Cypto Logo'/>
        </div>
        <div className='news-card-details'>
           <p> {description.length > 100 ? description.substring(0,100) + '...' : description} </p>
           <div className='news-card-footer'>

           </div>
        </div>
        

    </div>
  )
}

export default NewsCard