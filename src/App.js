import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import star from './assets/star.svg';
import trending from './assets/trending.svg'
import search from './assets/search.svg'
import movieCoverBg from './assets/Shawshank.jpg'
import moviePoster from './assets/Shawshank_Poster.jpg'


class App extends Component {
  state={
    searchMovieAPI: "https://api.themoviedb.org/3/search/movie?api_key=6716a15deac14be3f3a24aaa9552c266",
    detailedMovieAPI: "https://api.themoviedb.org/3/movie/",
    APIKey:"6716a15deac14be3f3a24aaa9552c266",
    genreAPI:"https://api.themoviedb.org/3/genre/movie/list?api_key=6716a15deac14be3f3a24aaa9552c266&language=en-US",
    query: "&query=",
    imageURL: "https://image.tmdb.org/t/p/original/",
    backdropURL: "https://image.tmdb.org/t/p/original/",
    popularDownloadAPI: "https://api.themoviedb.org/3/movie/popular?api_key=6716a15deac14be3f3a24aaa9552c266&language=en-US&page=1",
    movieCoverSec: React.createRef()
  }
  
  scrollToMovieCover(){
    window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  }
  
  findGenre(genre){
    return axios.get(`${this.state.genreAPI}`)
          .then(res => {
            var foundGenre = res.data.genres.find(elem => elem.id == genre)
            return foundGenre
            }
          )
          .catch(err =>{
            console.log(err)
          })
  }
  
  getMovieInfo(movie){
    return axios.get(`${this.state.searchMovieAPI}${this.state.query}${movie}`)
      .then(res => { const results = {
        ID: res.data.results[0].id,
        Title: res.data.results[0].title,
        Release_Date: res.data.results[0].release_date,
        Poster_path : `${this.state.imageURL}${res.data.results[0].poster_path}`,
        Genres: `${res.data.results[0].genre_ids}`,
        Image: `${this.state.backdropURL}${res.data.results[0].backdrop_path}`,
        Rating: res.data.results[0].vote_average,
        Description: res.data.results[0].overview,
      }
      return results
    })
    .catch(err => console.error(err))
  }
  
  changeMovieCover(searchedMovie){
    this.getMovieInfo(searchedMovie).then(movie => {
      const movieCoverBg = document.querySelector('.movieCoverBg');
      const movieCoverPosterImg = document.querySelector('.movieCoverPosterImg');
      const movieCoverTitle = document.querySelector('.movieCoverTitle');
      const movieCoverGenre = document.querySelector('.movieCoverGenre');
      const movieCoverRatingNum = document.querySelector('.movieCoverRating-Num');
      const movieCoverDescription = document.querySelector('.movieCoverDescription');
  
      var genres = []
  
      movieCoverGenre.textContent=''
  
      genres = movie.Genres.split(",")
      genres.forEach(key =>{
        this.findGenre(key).then(res => {
          console.log(res)
          movieCoverGenre.append(`${res.name} | `)
        })
        .catch(err => console.log(err))
      })
  
      movieCoverBg.src = `${movie.Image}`;
      movieCoverPosterImg.src = `${movie.Poster_path}`
      movieCoverPosterImg.classList.add('animateBg')
      movieCoverBg.classList.add('animateBg');
      movieCoverTitle.textContent = movie.Title;
      movieCoverRatingNum.textContent = movie.Rating
      movieCoverDescription.textContent = movie.Description;
      
      this.forceUpdate();
  
      setTimeout(()=>{movieCoverBg.classList.remove('animateBg')
                      movieCoverPosterImg.classList.remove('animateBg')},1500)
    })
  }
  
  searchMovie() {
    const searchBar = document.querySelector('.searchBar');
    const searchedMovie = searchBar.value.split(/( )/).join("");
  
    this.changeMovieCover(searchedMovie);
  }
  
  getPopularMovies(){
    return axios.get(`${this.state.popularDownloadAPI}`)
      .then(res => {
        var movies = []
        res.data.results.forEach(movie => movies.push({
        Image: `${this.state.imageURL}${movie.poster_path}`,
        Title: movie.title})
        )
        return movies;
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  async popularMovies(){
    var movies = await this.getPopularMovies();
  
    const popularMovies = (
      <div className="popularMovie-wrapper">
        <div className="movie" onClick={()=>this.scrollToMovieCover()}>
                <img src={movies[0].Image} className="movie-poster" alt=""></img>
                <p className="movie-title movie-title-0">{movies[0].Title}</p>
        </div>
  
        <div className="movie" onClick={()=>this.scrollToMovieCover()}>
                <img src={movies[1].Image} className="movie-poster" alt=""></img>
                <p className="movie-title movie-title-1">{movies[1].Title}</p>
        </div>
  
        <div className="movie" onClick={()=>this.scrollToMovieCover()}>
                <img src={movies[2].Image} className="movie-poster" alt=""></img>
                <p className="movie-title movie-title-2">{movies[2].Title}</p>
        </div>
  
        <div className="movie" onClick={()=>this.scrollToMovieCover()}>
                <img src={movies[3].Image} className="movie-poster" alt=""></img>
                <p className="movie-title movie-title-3">{movies[3].Title}</p>
        </div>
  
        <div className="movie" onClick={()=>this.scrollToMovieCover()}>
                <img src={movies[4].Image} className="movie-poster" alt=""></img>
                <p className="movie-title movie-title-4">{movies[4].Title}</p>
        </div>
        <div className="movie" onClick={()=>this.scrollToMovieCover()}>
                <img src={movies[5].Image} className="movie-poster" alt=""></img>
                <p className="movie-title movie-title-5">{movies[5].Title}</p>
        </div>
  
        <div className="movie" onClick={()=>this.scrollToMovieCover()}>
                <img src={movies[6].Image} className="movie-poster" alt=""></img>
                <p className="movie-title movie-title-6">{movies[6].Title}</p>
        </div>
  
        <div className="movie" onClick={()=>this.scrollToMovieCover()}>
                <img src={movies[7].Image} className="movie-poster" alt=""></img>
                <p className="movie-title movie-title-7">{movies[7].Title}</p>
        </div>
  
        <div className="movie" onClick={()=>this.scrollToMovieCover()}>
                <img src={movies[8].Image} className="movie-poster" alt=""></img>
                <p className="movie-title movie-title-8">{movies[8].Title}</p>
        </div>
  
        <div className="movie" onClick={()=>this.scrollToMovieCover()}>
                <img src={movies[9].Image} className="movie-poster" alt=""></img>
                <p className="movie-title movie-title-9">{movies[9].Title}</p>
        </div>
      </div>
  )
  ReactDOM.render(popularMovies,document.querySelector('.popularDownloads'))
  
  }
  
  onEnterPress = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      this.searchMovie();
    }
  }
  
  componentDidMount(){
    this.popularMovies()
    setTimeout(()=>{
      const movies = document.querySelectorAll('.movie')
  
    
      movies.forEach(movie => {
        movie.addEventListener('onClick',()=>{
          this.scrollToMovieCover()
        })
  
        movie.addEventListener('click',()=>{
          const movieName = movie.children[1].textContent
          console.log(movieName)
          this.changeMovieCover(movieName)
        })
      })
    },1000)
  
  }
  
  
  
  render(){
      return (
        <div>
          <section className="movieCover">
            <img src={movieCoverBg} className="movieCoverBg" alt=""></img>
            <div className="tag">
              <div className="nav-wrapper">
                      <textarea name="searchBar" placeholder="Search" className="searchBar" onKeyDown={this.onEnterPress}></textarea>
                      <img className="searchIcon" src={search} alt=""></img>
              </div>
              <section className="movieCoverDetails row">
              <div className="movieCover-wrapper" ref={this.movieCoverSec}>
                <div className="movieCoverPoster">
                      <img src={moviePoster} className="movieCoverPosterImg" alt=""></img>
                </div>
                <div className="movieCoverInfo">
                  <h1 className="movieCoverTitle">SHAWSHANK REDEMPTION</h1>
                  <div className="movieCoverRating">
                      <img className=""src={star} alt=""></img>
                      <p className="movieCoverRating-Num">8.7</p>
                  </div>
                  <p className="movieCoverGenre">Drama | Crime |  </p>
                  <p className="movieCoverDescription">Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.</p>
                </div>
              </div>
              </section>
              <section className="popularMovies">
                <div className="row">
                    <div className="popularMoviesIntro">
                        <img src={trending} alt=""></img>
                        <p className="pd">Popular Downloads</p>
                    </div>
                    <div className="popularDownloads">  
                    </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      );
    }
}

export default App;
