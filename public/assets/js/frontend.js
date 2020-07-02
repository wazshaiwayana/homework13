
$(document).ready(function(){
   

$(".devour-burger-form").on("submit", function(){
    //alert("hello");
    var burgerId =$(this).children(".burger_Id").val();

    $.ajax({

    method : "PUT",
    url : "/burgers/" + burgerId,


    }).then(function(data){
        location.reload();
    })
});










});

