(this["webpackJsonpmovie-finder"]=this["webpackJsonpmovie-finder"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/star.8a005637.svg"},18:function(e,t,a){e.exports=a.p+"static/media/trending.46075f74.svg"},19:function(e,t,a){e.exports=a.p+"static/media/search.19142cc5.svg"},20:function(e,t,a){e.exports=a.p+"static/media/Shawshank.44564d4f.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/Shawshank_Poster.a21be835.jpg"},24:function(e,t,a){e.exports=a(49)},29:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(2),c=a.n(r),i=(a(29),a(4)),s=a.n(i),l=a(14),m=a(15),v=a(16),u=a(23),p=a(22),d=a(3),g=a.n(d),h=(a(48),a(17)),f=a.n(h),E=a(18),N=a.n(E),C=a(19),k=a.n(C),y=a(20),M=a.n(y),I=a(21),T=a.n(I),w=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchMovieAPI:"https://api.themoviedb.org/3/search/movie?api_key=6716a15deac14be3f3a24aaa9552c266",detailedMovieAPI:"https://api.themoviedb.org/3/movie/",APIKey:"6716a15deac14be3f3a24aaa9552c266",genreAPI:"https://api.themoviedb.org/3/genre/movie/list?api_key=6716a15deac14be3f3a24aaa9552c266&language=en-US",query:"&query=",imageURL:"https://image.tmdb.org/t/p/original/",backdropURL:"https://image.tmdb.org/t/p/original/",popularDownloadAPI:"https://api.themoviedb.org/3/movie/popular?api_key=6716a15deac14be3f3a24aaa9552c266&language=en-US&page=1",movieCoverSec:n.a.createRef()},e.onEnterPress=function(t){13==t.keyCode&&0==t.shiftKey&&(t.preventDefault(),e.searchMovie())},e}return Object(v.a)(a,[{key:"scrollToMovieCover",value:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},{key:"findGenre",value:function(e){return g.a.get("".concat(this.state.genreAPI)).then((function(t){return t.data.genres.find((function(t){return t.id==e}))})).catch((function(e){console.log(e)}))}},{key:"getMovieInfo",value:function(e){var t=this;return g.a.get("".concat(this.state.searchMovieAPI).concat(this.state.query).concat(e)).then((function(e){return{ID:e.data.results[0].id,Title:e.data.results[0].title,Release_Date:e.data.results[0].release_date,Poster_path:"".concat(t.state.imageURL).concat(e.data.results[0].poster_path),Genres:"".concat(e.data.results[0].genre_ids),Image:"".concat(t.state.backdropURL).concat(e.data.results[0].backdrop_path),Rating:e.data.results[0].vote_average,Description:e.data.results[0].overview}})).catch((function(e){return console.error(e)}))}},{key:"changeMovieCover",value:function(e){var t=this;this.getMovieInfo(e).then((function(e){var a=document.querySelector(".movieCoverBg"),o=document.querySelector(".movieCoverPosterImg"),n=document.querySelector(".movieCoverTitle"),r=document.querySelector(".movieCoverGenre"),c=document.querySelector(".movieCoverRating-Num"),i=document.querySelector(".movieCoverDescription");r.textContent="",e.Genres.split(",").forEach((function(e){t.findGenre(e).then((function(e){console.log(e),r.append("".concat(e.name," | "))})).catch((function(e){return console.log(e)}))})),a.src="".concat(e.Image),o.src="".concat(e.Poster_path),o.classList.add("animateBg"),a.classList.add("animateBg"),n.textContent=e.Title,c.textContent=e.Rating,i.textContent=e.Description,t.forceUpdate(),setTimeout((function(){a.classList.remove("animateBg"),o.classList.remove("animateBg")}),1500)}))}},{key:"searchMovie",value:function(){var e=document.querySelector(".searchBar").value.split(/( )/).join("");this.changeMovieCover(e)}},{key:"getPopularMovies",value:function(){var e=this;return g.a.get("".concat(this.state.popularDownloadAPI)).then((function(t){var a=[];return t.data.results.forEach((function(t){return a.push({Image:"".concat(e.state.imageURL).concat(t.poster_path),Title:t.title})})),a})).catch((function(e){console.log(e)}))}},{key:"popularMovies",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,o=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPopularMovies();case 2:t=e.sent,a=n.a.createElement("div",{className:"popularMovie-wrapper"},n.a.createElement("div",{className:"movie",onClick:function(){return o.scrollToMovieCover()}},n.a.createElement("img",{src:t[0].Image,className:"movie-poster",alt:""}),n.a.createElement("p",{className:"movie-title movie-title-0"},t[0].Title)),n.a.createElement("div",{className:"movie",onClick:function(){return o.scrollToMovieCover()}},n.a.createElement("img",{src:t[1].Image,className:"movie-poster",alt:""}),n.a.createElement("p",{className:"movie-title movie-title-1"},t[1].Title)),n.a.createElement("div",{className:"movie",onClick:function(){return o.scrollToMovieCover()}},n.a.createElement("img",{src:t[2].Image,className:"movie-poster",alt:""}),n.a.createElement("p",{className:"movie-title movie-title-2"},t[2].Title)),n.a.createElement("div",{className:"movie",onClick:function(){return o.scrollToMovieCover()}},n.a.createElement("img",{src:t[3].Image,className:"movie-poster",alt:""}),n.a.createElement("p",{className:"movie-title movie-title-3"},t[3].Title)),n.a.createElement("div",{className:"movie",onClick:function(){return o.scrollToMovieCover()}},n.a.createElement("img",{src:t[4].Image,className:"movie-poster",alt:""}),n.a.createElement("p",{className:"movie-title movie-title-4"},t[4].Title)),n.a.createElement("div",{className:"movie",onClick:function(){return o.scrollToMovieCover()}},n.a.createElement("img",{src:t[5].Image,className:"movie-poster",alt:""}),n.a.createElement("p",{className:"movie-title movie-title-5"},t[5].Title)),n.a.createElement("div",{className:"movie",onClick:function(){return o.scrollToMovieCover()}},n.a.createElement("img",{src:t[6].Image,className:"movie-poster",alt:""}),n.a.createElement("p",{className:"movie-title movie-title-6"},t[6].Title)),n.a.createElement("div",{className:"movie",onClick:function(){return o.scrollToMovieCover()}},n.a.createElement("img",{src:t[7].Image,className:"movie-poster",alt:""}),n.a.createElement("p",{className:"movie-title movie-title-7"},t[7].Title)),n.a.createElement("div",{className:"movie",onClick:function(){return o.scrollToMovieCover()}},n.a.createElement("img",{src:t[8].Image,className:"movie-poster",alt:""}),n.a.createElement("p",{className:"movie-title movie-title-8"},t[8].Title)),n.a.createElement("div",{className:"movie",onClick:function(){return o.scrollToMovieCover()}},n.a.createElement("img",{src:t[9].Image,className:"movie-poster",alt:""}),n.a.createElement("p",{className:"movie-title movie-title-9"},t[9].Title))),c.a.render(a,document.querySelector(".popularDownloads"));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.popularMovies(),setTimeout((function(){document.querySelectorAll(".movie").forEach((function(t){t.addEventListener("onClick",(function(){e.scrollToMovieCover()})),t.addEventListener("click",(function(){var a=t.children[1].textContent;console.log(a),e.changeMovieCover(a)}))}))}),1e3)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("section",{className:"movieCover"},n.a.createElement("img",{src:M.a,className:"movieCoverBg",alt:""}),n.a.createElement("div",{className:"tag"},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("textarea",{name:"searchBar",placeholder:"Search",className:"searchBar",onKeyDown:this.onEnterPress}),n.a.createElement("img",{className:"searchIcon",src:k.a,alt:""})),n.a.createElement("section",{className:"movieCoverDetails row"},n.a.createElement("div",{className:"movieCover-wrapper",ref:this.movieCoverSec},n.a.createElement("div",{className:"movieCoverPoster"},n.a.createElement("img",{src:T.a,className:"movieCoverPosterImg",alt:""})),n.a.createElement("div",{className:"movieCoverInfo"},n.a.createElement("h1",{className:"movieCoverTitle"},"SHAWSHANK REDEMPTION"),n.a.createElement("div",{className:"movieCoverRating"},n.a.createElement("img",{className:"",src:f.a,alt:""}),n.a.createElement("p",{className:"movieCoverRating-Num"},"8.7")),n.a.createElement("p",{className:"movieCoverGenre"},"Drama | Crime |  "),n.a.createElement("p",{className:"movieCoverDescription"},"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.")))),n.a.createElement("section",{className:"popularMovies"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"popularMoviesIntro"},n.a.createElement("img",{src:N.a,alt:""}),n.a.createElement("p",{className:"pd"},"Popular Downloads")),n.a.createElement("div",{className:"popularDownloads"}))))))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.3bd18ba5.chunk.js.map