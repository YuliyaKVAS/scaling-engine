var initItems = function($items) {
    $items.click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
            return
        }
        $(this).addClass('active')
    })
}
$( function() {
    $("#btn").click(function(){
        if($("#inputdefault").val()!= ''){
            var $newItemElement = $('<li class="list-group-item">'+$("#inputdefault").val()+'<button class="delete" style="width:21px;height:21px;border:0">-</button>'+'</li>')//Create new element using jQuery
            initItems($newItemElement)//We have to bind click to newly created item, that is why it was not working before
            $('#list').append($newItemElement);//Append new element to the list
            $("#inputdefault").val("")// After adding newItemElement clear textbox

            $(".delete").on("click", function(){
            var $parent = $(this).parent();

            setTimeout(function(){
            $parent.remove();
            }, 295);

            })
        }else {
            alert("You have not written task!");
        }



    });
    initItems($('.todo-list-container li'))
    console.log("Ready")

    console.log($("ul li"))

})

