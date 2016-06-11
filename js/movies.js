var yMovies = new Array();

var movies = ["Troy", "The Godfather", "3 Idiots", "Iron Man", "National Treasure","The Greatest Game Ever Played","Catch Me If You Can","The Fast and the Furious: Tokyo Drift","Kill Bill","Kung Fu Panda","How to Train Your Dragon","The Shawshank Redemption", "The Art of Getting By","The Avengers", "The Wolf of Wall Street", "Good Will Hunting", "Shooter", "Limitless", "The A-Team", "Harry Potter"];

function loadjs() {
	for(var i=0;i<20;i++){
	  	document.getElementById("main").innerHTML+= '<div class="col s6 l4 m6"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img id="Poster'+i+'"></div><div class="card-content"><Table><thead><tr><th class="title" id="Title'+i+'" colspan="2"></th></tr></thead><tr><td>IMDB</td><td id="imdbRating'+i+'"></td></tr><tr><td>Year</td><td class="date" id="Released'+i+'"></td></tr><tr><td>Genre</td><td id="Genre'+i+'"></td></tr></Table></div></div></div>';
		Ajax(movies[i],i);
	}  	
}

function Ajax(mov,i){
	var xhttp;
	if (window.XMLHttpRequest) {
	    xhttp = new XMLHttpRequest();
	}
	xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
		    info = xhttp.responseText;
			eval('var obj='+info);
			document.getElementById('Title'+i).innerHTML = obj.Title;
			document.getElementById('Released'+i).innerHTML = obj.Year;
			yMovies[obj.Title] = obj.Year;
		    document.getElementById('Genre'+i).innerHTML = obj.Genre;
			document.getElementById('imdbRating'+i).innerHTML = obj.imdbRating;
			document.getElementById('Poster'+i).src=obj.Poster;
		}
	}
  	xhttp.open("GET", "http://www.omdbapi.com/?t="+mov, true);
  	xhttp.send();
}

function sortTits(){
	newlist = movies.sort();
	document.getElementById("main").innerHTML="";
	for(var i=0;i<20;i++){
	  	document.getElementById("main").innerHTML+= '<div class="col s6 l4 m6"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img id="Poster'+i+'"></div><div class="card-content"><Table><thead><tr><th class="title" id="Title'+i+'" colspan="2"></th></tr></thead><tr><td>IMDB</td><td id="imdbRating'+i+'"></td></tr><tr><td>Year</td><td class="date" id="Released'+i+'"></td></tr><tr><td>Genre</td><td id="Genre'+i+'"></td></tr></Table></div></div></div>';
		Ajax(newlist[i],i);
	}
}
function sortYear(){
document.getElementById("main").innerHTML="";
var sortable = [];
for (var year in yMovies)
      sortable.push([year, yMovies[year]])
var aYear = sortable.sort(function(a, b) {return b[1] - a[1]});
for(var i=0;i<20;i++){
	  	document.getElementById("main").innerHTML+= '<div class="col s6 l4 m6"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img id="Poster'+i+'"></div><div class="card-content"><Table><thead><tr><th class="title" id="Title'+i+'" colspan="2"></th></tr></thead><tr><td>IMDB</td><td id="imdbRating'+i+'"></td></tr><tr><td>Year</td><td class="date" id="Released'+i+'"></td></tr><tr><td>Genre</td><td id="Genre'+i+'"></td></tr></Table></div></div></div>';
		Ajax(aYear[i][0],i);
	}
}

function sortAge(){
document.getElementById("main").innerHTML="";
var sortable = [];
for (var age in yMovies)
      sortable.push([age, yMovies[age]])
var aAge = sortable.sort(function(a, b) {return a[1] - b[1]});
for(var i=0;i<20;i++){
	  	document.getElementById("main").innerHTML+= '<div class="col s6 l4 m6"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img id="Poster'+i+'"></div><div class="card-content"><Table><thead><tr><th class="title" id="Title'+i+'" colspan="2"></th></tr></thead><tr><td>IMDB</td><td id="imdbRating'+i+'"></td></tr><tr><td>Year</td><td class="date" id="Released'+i+'"></td></tr><tr><td>Genre</td><td id="Genre'+i+'"></td></tr></Table></div></div></div>';
		Ajax(aAge[i][0],i);
	}
}
