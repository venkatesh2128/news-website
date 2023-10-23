const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const healthBtn = document.getElementById("health");
const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");
let newsDataArr = [];
let ads=[];
const API_KEY = "5ac41323bd1c41bcbd035909bc875d00";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const HEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};
function fetchHeadlines(){
    fetch(HEADLINES_NEWS+API_KEY)
    .then((res) => {
        return res.json();
    })
    .then((myJson) => {
        newsDataArr = myJson.articles;
        displayNews();
    })
    .catch(error => console.log("Hello"+error))
}
function fetchGeneralNews(){
    fetch(GENERAL_NEWS+API_KEY)
    .then((res) => {
        return res.json();
    })
    .then((myJson) => {
        newsDataArr = myJson.articles;
        displayNews();
    })
    .catch(error => console.log("Hello"+error))
}
function fetchBusinessNews(){
    fetch(BUSINESS_NEWS+API_KEY)
    .then((res) => {
        return res.json();
    })
    .then((myJson) => {
        newsDataArr = myJson.articles;
        displayNews();
    })
    .catch(error => console.log("Hello"+error))
}
function fetchEntertainmentNews(){
    fetch(ENTERTAINMENT_NEWS+API_KEY)
    .then((res) => {
        return res.json();
    })
    .then((myJson) => {
        newsDataArr = myJson.articles;
        displayNews();
    })
    .catch(error => console.log("Hello"+error))
}
function fetchSportsNews(){
    fetch(SPORTS_NEWS+API_KEY)
    .then((res) => {
        return res.json();
    })
    .then((myJson) => {
        newsDataArr = myJson.articles;
        displayNews();
    })
    .catch(error => console.log("Hello"+error))
}
function fetchTechnologyNews(){
    fetch(TECHNOLOGY_NEWS+API_KEY)
    .then((res) => {
        return res.json();
    })
    .then((myJson) => {
        newsDataArr = myJson.articles;
        displayNews();
    })
    .catch(error => console.log("Hello"+error))
}
function fetchHealthNews(){
    fetch(HEALTH_NEWS+API_KEY)
    .then((res) => {
        return res.json();
    })
    .then((myJson) => {
        newsDataArr = myJson.articles;
        displayNews();
    })
    .catch(error => console.log("Hello"+error))
}
function fetchQueryNews(){
    fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY)
    .then((res) => {
        return res.json();
    })
    .then((myJson) => {
        newsDataArr = myJson.articles;
        displayNews();
    })
    .catch(error => console.log("Hello"+error))
}
generalBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>General news</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Business</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Sports</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Technology</h4>";
    fetchTechnologyNews();
});

healthBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Health</h4>";
    fetchHealthNews();
});
function displayNews() {
    newsdetails.innerHTML = "";
    newsDataArr.forEach(news => {
        var date = news.publishedAt.split("T");
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";
        var card = document.createElement('div');
        card.className = "p-2";
        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;
        var cardBody = document.createElement('div');
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;
        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];
        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;
        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";
        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);
        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);
        newsdetails.appendChild(col);
    });
}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    };
    rawFile.send(null);
  }
  let adIndex = 0;
  function printAd() {
    cntOfAds = ads.length;
    console.log(cntOfAds);
    let op = "";
    adIndex = adIndex % cntOfAds;
    let ad = ads[adIndex];
    op += ` 
        <div style="text-align:center">
        <h5 class="card-title text-dark">${ad.heading}</h5>
            <p class="card-text">${ad.text}</p>
            <img src="${ad.linkofimage}"/ height="175px" width="300px">
        </div>
        </br>
      `;
    document.getElementById("advertisement").innerHTML = op;
    adIndex++;
  }
  
  readTextFile("advertisement.json", function (text) {
    var data = JSON.parse(text);
    ads = data;
    //displayAd();
    setInterval(printAd, 3000);
    console.log(data);
  });