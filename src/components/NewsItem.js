import React from 'react'
import '../styles/NewsItem.css'

const NewsItem = (props) => {
    let { title, description, imageurl, readmore, time, source } = props;
    return (
        <div>
            <div className="card" style={{ height: '420px' }}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary styling">{source}</span>
                <img src={imageurl} className="card-img-top" alt="..." width={286.4} height={161.1} />
                <div className="card-body btn-dark">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text">{new Date(time).toGMTString()}</p>
                    <a href={readmore} className="btn btn-secondary " target='_blank'>Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem