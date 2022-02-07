import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class news extends Component {

    articles= [{
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Chris Isidore, CNN Business",
        "title": "Spirit and Frontier Airlines plan to merge - CNN",
        "description": "Spirit and Frontier Airlines on Monday announced a $6.6 billion merger, a combination of low-fare carriers that would create America's fifth-largest airline.",
        "url": "https://www.cnn.com/2022/02/07/investing/spirit-frontier-airlines-merger/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220207121822-spirit-frontier-merger-file-restricted-080621-super-tease.jpg",
        "publishedAt": "2022-02-07T13:38:00Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Matthew J. Belvedere",
        "title": "5 things to know before the stock market opens Monday - CNBC",
        "description": "U.S. stock futures edged up Monday after the S&P 500 and the Nasdaq Composite logged their best weeks of the year.",
        "url": "https://www.cnbc.com/2022/02/07/5-things-to-know-before-the-stock-market-opens-monday-february-7.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107011386-1643992910594-abd.jpg?v=1643992963",
        "publishedAt": "2022-02-07T13:24:20Z",
        "content": "Here are the most important news, trends and analysis that investors need to start their trading day: 1. Wall Street looks higher after S&amp;P 500, Nasdaq's best weeks of 2022 Traders work on the … [+4564 chars]"
        }]

    constructor(){
        super();
        console.log("I am constructor");
        this.state={
            article:this.article,
            loading:false
        }
    }
 
  render() {
    return <div>
  <div className="container">
<h2>Welcome to NewsAPi</h2>
<div className="row">
           {/* column medium 3 */}
        <div className="col-md-4">   
        <NewsItem title="i am title" description="I am description1" imageUrl="https://cdn.cnn.com/cnnnext/dam/assets/220207121822-spirit-frontier-merger-file-restricted-080621-super-tease.jpg"  newsUrl="Need to added"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="i am title" description="I am description2"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="i am title" description="I am description3"/>
        </div>
        </div>
        </div>
    
    </div>;
  }
}

export default news;
