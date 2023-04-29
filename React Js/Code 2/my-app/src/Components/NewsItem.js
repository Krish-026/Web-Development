import React, { Component } from 'react'

export class NewsItem extends Component {
  // constructor(){
  //   super();
  //   // console.log("I'm constructor from NewsItem");
  // }
  render() {
    const IMAGE = "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg";
    // const IMAGE = "my-app/src/Images/news.jpg";
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{ width: '18rem',background: '#b6b6b6'}}>
          <img src={imageUrl?imageUrl:IMAGE} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl}  target = "_blank" rel = "noopner noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>

      </div>
    )
  }
}

export default NewsItem
