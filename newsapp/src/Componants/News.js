import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

export class news extends Component {

    constructor(){
        super();
        console.log("I am constructor");
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
  
async componentDidMount(){

  let data=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a12e0c47a7004318995856ed387989ba&page=1&pageSize=${this.props.pageSize}`);
  let parseData=await data.json();

  this.setState({
    articles:parseData.articles,
    page:1,
    totalResults:parseData.totalResults
  })
  
}

handleNextClick = async ()=>{
  
if(this.state.page + 1 > Math.ceil(this.state.totalResults/3) )
{

}
else{
  let data=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a12e0c47a7004318995856ed387989ba&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
  let parseData=await data.json();
  this.setState({
    articles:parseData.articles,
    page:this.state.page + 1
  })
}
}

handlePrevClick = async ()=>{
  

  let data=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a12e0c47a7004318995856ed387989ba&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`);
  let parseData=await data.json();
  this.setState({
    articles:parseData.articles,
    page:this.state.page - 1
  })
}

static defaultProps={
  country:"in",
  category:"sport",
  pageSize:3
}

static propTypes=  {
  country:PropTypes.string,
  category:PropTypes.string,
  pageSize:PropTypes.number
}

  render() {
    return <div>
  <div className="container">
 
<h2 class="text-center">Welcome to NewsAPi</h2>

<div className="row">
            {/* col-md-4=column medium 3  */}
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>   
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}  newsUrl={element.url}/>
              </div>
            } ) }
        </div>
        <div  class="container d-flex justify-content-between"> 
        <button type="button" disabled={this.state.page<=1} class="btn btn-success my-3" onClick={this.handlePrevClick}>Previous</button>
        <button type="button"    class="btn btn-success my-3" onClick={this.handleNextClick}>Next</button>
        </div>
        </div>
    
    </div>;
  }
}

export default news;
