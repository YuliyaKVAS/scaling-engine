$( function() {
    $("#btn").click(function(){
    $("ul").append('<li class="list-group-item">'+$("#inputdefault").val()+'</li>');
    });
    $('.todo-list-container li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
            return
        }
        $(this).addClass('active')
    })
    console.log("Ready")


})

