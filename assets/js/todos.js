//checking the todos
$("ul").on("click","li",function(){
	$(this).toggleClass("check");
});
//deleting tasks
$("ul").on("click","span","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//adding tasks
$("input").keypress(function(event){
	// var str=$(this).val()
	if(event.which==13)
	{
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> "+$("input").val()+"</li>");
		$("input").val("");
	}
});
