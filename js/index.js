$(document).ready(function(){
  
  $("#target").submit(function(event) {
    event.preventDefault();
    
    var url = $("input[type=text]").val();
    
    $.ajax( {
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + url,
      dataType: 'jsonp',
      success: function(json) {
        var html = "";

        for(var i = 0; i < json[1].length; i++){
          html += "<a href=" + json[3][i] + ">"

            html += "<div class='article slide'>"

              html += "<h3>" + json[1][i] + "</h3>";

              html += "<div>" + json[2][i] + "</div>";

            html += "</div>"   

          html += "</a>";
        }
        $(".article-holder").html(html);
       }
    });      
  });
});