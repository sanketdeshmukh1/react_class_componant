import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class news extends Component {

    constructor(){
        super();
        console.log("I am constructor");
        this.state={
            articles:[],
            loading:false
        }
    }
async componentDidMount(){
let data=await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a12e0c47a7004318995856ed387989ba");
let parseData=await data.json();
this.setState({articles:parseData.articles})
}


  render() {
    return <div>
  <div className="container">
<h2>Welcome to NewsAPi</h2>


<div className="row">
            {/* col-md-4=column medium 3  */}
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>   
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}  newsUrl={element.url}/>
              </div>
              
            } ) }
        </div>
        </div>
    
    </div>;
  }
}

export default news;
