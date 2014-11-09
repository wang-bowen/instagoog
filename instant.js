$(document).ready(function(){
  $('#searchBox').keyup(function(){


    var searchBox = document.getElementById("searchBox");
  var currentSearch = searchBox.value;
  var keyword = currentSearch;

  var the_url = "https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q="+encodeURIComponent(keyword)+"&callback=cb";
    

//$.getJSON('https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=Paris%20Hilton&jsonp=21', function(jd) {
  //           document.write(2121);
    //      });
var url="http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q="+keyword+"&callback=?";

$.getJSON(url, function(data) {
    document.getElementById("page").src=(data.responseData.results[0].unescapedUrl);
    document.getElementById("link").href=data.responseData.results[0].unescapedUrl;
    document.getElementById("link").innerHTML=data.responseData.results[0].unescapedUrl;
  });


 // newurl=the_url;
 // document.getElementById("page").src=newurl;


  })

})