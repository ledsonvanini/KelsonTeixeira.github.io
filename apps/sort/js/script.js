

//------------------variables-------------
var options = [];

var verify = 0;

var verify_2 = false;



//------------------functions----------------

function add() {
    $(".the_list").css("color", "#2c3e50");
    var op = document.forms["get_option"]["new_option"].value;
    options.push(" "+op);
    console.log(options);
    $(".the_list").text(options)
    document.forms["get_option"]["new_option"].value = "";
}

function new_list(rnd){
    var more = [];
    for (var i = 0; i < options.length; i++){
        if (options[i] != options[rnd]){
            more.push(options[i]);
        }
    }
    return more;
}

function define (rnd){
    if (options.length == 0){
        $("h5").text("Sem Opção");
        $(".the_list").css("color", "transparent");
    }else{
        $("h5").text(options[rnd]);
    }
}

function show (rnd){
    define(rnd);
    options = new_list(rnd);
    if (options.length == 0){
        $(".the_list").css("color", "transparent");
        $(".the_list").text("vazio");
    }else{
        $(".the_list").text(options);
    }    
    $(".show").css("display", "block");
}

function vanish (){
    $("h3").text("Restante:");
    $(".the_list").css("margin-bottom", "0");
    $(".vanish").css("display", "none");
}


function luck(){
    var rnd = Math.floor(Math.random() * options.length);
    console.log(rnd);
    show(rnd);
    vanish();
}

function reload_sort(){
        location.reload();
}


function display_text(){
    if (!verify){
        $("#doubt").css("display","block");
        verify = 1;
    }else{
        $("#doubt").css("display","none");
        verify = 0;
    }
}

//---------------------Event--------------

$('form').keypress(
  function(event){
    if (event.which == '13') {
        add();
        event.preventDefault();
    }
});

$(".doubt").mouseout(function(){
    if (verify){
        verify_2 = true;
    }
})

$(".doubt").mouseover(function(){
    verify_2 = false;
})

$("body").click(function(){
    if (verify_2){
        $("#doubt").css("display","none");
        verify = 0;
        verify_2 = false;
    }
})
