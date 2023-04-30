import React, { Component } from 'react'

export class NewsItem extends Component {
  // constructor(){
  //   super();
  //   // console.log("I'm constructor from NewsItem");
  // }
  render() {
    const IMAGE = "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg";
    // const IMAGE = "my-app/src/Images/news.jpg";
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ background: 'rgb(206 206 206)' }}>
          <img src={imageUrl ? imageUrl : IMAGE} className="card-img-top" alt="..." />
          <div className="card-body">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              {/* <span class="visually-hidden">unread messages</span> */}
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noopner noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>

      </div>
    )
  }
}

export default NewsItem
