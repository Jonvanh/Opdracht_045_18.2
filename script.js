
// Page start

var createdMovieStart = function() { 
    movies.map(item => {

    var g = document.createElement("li");
        g.className = 'movieelement';
        g.id = item.title
        document.getElementById('movielist').appendChild(g)
        var _img = document.createElement('img');
        _img.src = item.poster;
        _img.onclick = function() {
            window.location.href = "https://www.imdb.com/title/" + item.imdbID + "/";
       };
        //document.getElementById(g.id).addEventListener("click", NewFilms)
        document.getElementById(g.id).appendChild(_img)
        
    });
    return
}
    

createdMovieStart()


// useful functions

var del_movielist = function() {
    var myList = document.getElementById('movielist');
        myList.innerHTML = '';
}


// event-functions

var latest_movies = function() {
    del_movielist();
    
    movies.map(item => {
        num = Number(item.year)    
        if (num >= 2014) {
            var g = document.createElement("li");
                g.className = 'movieelement';
                g.id = item.title
                document.getElementById('movielist').appendChild(g)
            var _img = document.createElement('img');
                _img.src = item.poster;
                _img.onclick = function() {
                    window.location.href = "https://www.imdb.com/title/" + item.imdbID + "/";
                    };
        
        document.getElementById(g.id).appendChild(_img)  
        }
    })
}

var Avenger_movies = function() {
    del_movielist();
    movies.map(item => {
        
        if (item.title.includes("Avengers")) {
            var g = document.createElement("li");
                g.className = 'movieelement';
                g.id = item.title
                document.getElementById('movielist').appendChild(g)
            var _img = document.createElement('img');
                _img.src = item.poster;
                _img.onclick = function() {
                    window.location.href = "https://www.imdb.com/title/" + item.imdbID + "/";
                    };
        document.getElementById(g.id).appendChild(_img)  
        }
    })
}
    
var XMen_movies = function() {
    del_movielist();
    movies.map(item => {
        
        if (item.title.includes("X-Men")) {
            var g = document.createElement("li");
                g.className = 'movieelement';
                g.id = item.title
                document.getElementById('movielist').appendChild(g)
            var _img = document.createElement('img');
                _img.src = item.poster;
                _img.onclick = function() {
                    window.location.href = "https://www.imdb.com/title/" + item.imdbID + "/";
                    };          
        document.getElementById(g.id).appendChild(_img)  
        }
    })
}
    

var Princess_movies = function() {
    del_movielist();
    movies.map(item => {
        
        if (item.title.includes("Princess")) {
            var g = document.createElement("li");
            g.className = 'movieelement';
            g.id = item.title
            document.getElementById('movielist').appendChild(g)
            var _img = document.createElement('img');
            _img.src = item.poster;
            _img.onclick = function() {
                window.location.href = "https://www.imdb.com/title/" + item.imdbID + "/";
                };
        document.getElementById(g.id).appendChild(_img)  
        }
    })
}

var Batman_movies = function() {
    del_movielist();
    movies.map(item => {
        
        if (item.title.includes("Batman")) {
            var g = document.createElement("li");
                g.className = 'movieelement';
                g.id = item.title
                document.getElementById('movielist').appendChild(g)
            var _img = document.createElement('img');
                _img.src = item.poster;
                _img.onclick = function() {
                    window.location.href = "https://www.imdb.com/title/" + item.imdbID + "/";
                    };
        document.getElementById(g.id).appendChild(_img)  
        }
    })
}


// event-listeners

document.getElementById("latest_movies").addEventListener("click" , latest_movies)
document.getElementById("avengers_movies").addEventListener("click" , Avenger_movies)
document.getElementById("x-men_movies").addEventListener("click" , XMen_movies)
document.getElementById("Princess_movies").addEventListener("click" , Princess_movies)
document.getElementById("Batman_movies").addEventListener("click" , Batman_movies)