
class Renderer{
    constructor(){}
    render(data){
        const source = $('#recipes-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(data);
        $('.row').append(newHTML);   

    }
}
 let renderer = new Renderer()
const fetchData = function(){
    $('.row').empty()
    let ingredient=$("#ingredient-input").val()
    $.get(`/recipes/${ingredient}`,function(data){
        renderer.render({ recipes:data.recipes})
        
    })
}
const notify = function(){
    
}
$(".img").on("click", function(){
    alert("tt")
  })
  $("body").on("click", ".img", function() {
    alert($(this).closest("div").find("ul").find("li").text())

  });  