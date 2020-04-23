//selectors
const datelement =document.querySelector("#date");
const starr=document.querySelector(".star");
const options = {weekday : "long" , month: "short" ,day :"numeric"};
const today= new Date();
datelement.innerHTML = today.toLocaleDateString("en-US",options);
$("ul").on("click", "#delete", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("ul").on("click", "#markcom", function(event){
	$(this).parent().toggleClass("completed");
});

$("ul").on("click", ".stare", function(){

	$(this).parent().append("<span name=\"bar\" id=\"start\" ><i class=\"fa fa-star\" aria-hidden=\"true\"></i></span>");
	$(this).toggleClass("stare");
	$(this).toggleClass("unstar");
	
});
$("ul").on("click", ".unstar", function(){

	$(this).parent().find("#start").remove();
	$(this).toggleClass("stare");
	$(this).toggleClass("unstar");
	
	
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span id=\"delete\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span><span id=\"markcom\"><i class=\"fas fa-check-circle\"></i></span><span class=\"stare\" class><i class=\"fas fa-heart\"></i></span>"+ todoText + "</li>");
		
	}
});