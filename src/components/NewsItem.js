import React from 'react'

const NewsItem =(props)=> {

   
        let { title, description, imageurl, newsUrl, author, date } = props;

        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageurl ? imageurl : "https://www.nicepng.com/png/full/307-3077738_paper-clipart-png.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}
                        </p>
                        <p className="card-text"><small className="text-body-secondary">by {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">
                            Readmore
                        </a>
                    </div>
                </div>

            </div>
        )
    
}

export default NewsItem
