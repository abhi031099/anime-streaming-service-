$(document).ready(function(){
    $("form.searchbar").submit(function(event){
        event.preventDefault();
        var searchQuery = $("#searchbox").val();   
        console.log("http://sidanmor.com/"+searchQuery)
        window.location.href ="/animepage/"+searchQuery
    });
});
