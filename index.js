$( function() {
    $("#btn").click(function(){
    if($("#inputdefault").val()!= ''){
        $('#list').append('<li class="list-group-item">'+$("#inputdefault").val()+'</li>');
    }

    else {
        alert("You have not written task!");
    }

    });
    $('.todo-list-container li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
            return
        }
        $(this).addClass('active')
    })
    console.log("Ready")

    console.log($("ul li"))

})

