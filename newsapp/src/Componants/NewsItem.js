import React, { Component } from 'react';

export class NewsItem extends Component {
    

    render() {
        let { title ,description,imageUrl,newsUrl,publishedAt,sourceName} = this.props;
    return <div>
    <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="Image not loaded"/>
  <p className="card-text"><small className="text-muted">Published on-{new Date(publishedAt).toGMTString() }</small></p>
  <p className="card-text"><small className="text-muted">Source-{sourceName} </small></p>
  <div className="card-body">
    <h5 className="card-title">{title}..</h5>
    <p className="card-text">{description}..</p>
    <a href={newsUrl} target="_blank" className="btn btn-primary bg-dark">More news</a>
  </div>
</div>

    </div>;
  }
}

export default NewsItem;
