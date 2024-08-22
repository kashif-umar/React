import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components.js/header';
import Footer from './components.js/footer';

function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://saurav.tech/NewsAPI/everything/fox-news.json')
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function show(news) {
    return (
      <div className='container'>

        <div className="card align-item-start mt-5 shadow-lg">
          <div className='row'>
            <div className='col-md-6'>
              <img className="card-img-top" src={news.urlToImage} />
            </div>
            <div className='col-md-6 mt-5'>
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <hr></hr>
                <p className="card-text">{news.description}</p>
                <p className="card-text" align="right">~{news.author}</p>
                <a href={news.url} className="btn btn-primary">Read More</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Header/>
      {console.log(news)}
      {news.map(show)}
      <Footer/>
    </div>
  );

}

export default App;
