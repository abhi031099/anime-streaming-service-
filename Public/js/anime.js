$(document).ready(function(){
    $("form.searchbar").submit(function(event){
        event.preventDefault();
        var searchQuery = $("#searchbox").val();   
        console.log("http://sidanmor.com/"+searchQuery)
        window.location.href ="/animepage/"+searchQuery
    });
});
function checkDigits(no){
    return no.toString().length;
}




function searchPage(){
   var pageNo = $('#pageno').val();
    var pathName = window.location.pathname;
    var urlName = '/animelist/'
    var alphaName = pathName.replace(urlName,'')
    var myelement = alphaName.slice(0,1)
  // console.log(myelement)
   window.location.href =urlName + myelement + '/'+ pageNo 
 // var k = checkDigits(pageno);
 //  if (k == 2){
 //   var res = str.slice(0, 5);
 //  }
  // console.log(pageno,globalvar);
  // window.location.replace('/animelist/0/'+ pageno)
  // window.location.href ='/animelist/0/' +pageno

}