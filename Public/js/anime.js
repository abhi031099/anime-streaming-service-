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
    if(pageNo.length >= 3 || pageNo>63){
        alert('Seriously? ')
    } else{
        window.location.href =urlName + myelement + '/'+ pageNo
    }
    
}

function redirectPage(){
    
}