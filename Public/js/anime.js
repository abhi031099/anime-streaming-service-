$(document).ready(function(){
    $("form.searchbar").submit(function(event){
        event.preventDefault();
        var searchQuery = $("#searchbox").val();   
        window.location.href ="/animepage/"+searchQuery
    });
});

function searchPage(){
   var pageNo = $('#pageno').val();
    var pathName = window.location.pathname;
    var urlName = '/animelist/'
    var alphaName = pathName.replace(urlName,'')
    var myelement = alphaName.slice(0,1)
   window.location.href =urlName + myelement + '/'+ pageNo 
}