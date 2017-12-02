$( function() {
    $('.todo-list-container li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
            return
        }
        $(this).addClass('active')
    })
    console.log("Ready")
})