
function callAstroAPI() {
    const request = new XMLHttpRequest();
    const url = 'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0';
    request.open("GET", url);
    request.send();

    request.onload = (e) => {
        console.log(request.response);
    }    
}

function cocktailRecipes() {
    const request = new XMLHttpRequest();
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    request.open("GET", url);
    request.send();

    request.onload = (e) => {
        console.log(request.response);
    }    
}

function faviconGrabber() {
    const request = new XMLHttpRequest();
    const url = 'https://favicongrabber.com/api/grab/github.com';
    request.open("GET", url);
    request.send();

    request.onload = (e) => {
        console.log(request.response);
    }    
}

function telePort() {
    const request = new XMLHttpRequest();
    const url = 'https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/scores/';
    request.open("GET", url);
    request.send();

    request.onload = (e) => {
        console.log(request.response);
    }    
}

function cryptoData() {
    const request = new XMLHttpRequest();
    const url = 'https://api.wazirx.com/sapi/v1/tickers/24hr';
    request.open("GET", url);
    request.send();

    request.onload = (e) => {
        console.log(request.response);
    }    
}