$(document).ready(function(){
	var num = 0;
	var count = 0;
	var cancel = false;

	$("#start").click(function(){
		var read = $("#input").val();
		if(!read.match(/^\d+$/)){
			alert("Please input a number");
		}
		else{
			num = parseInt(read);	
			fingertoe(count,num);
		}
	});



	$("#restart").click(function(){
		var read2 = $("#input").val();
		if(!read2.match(/^\d+$/)){
			alert("Please input a number");
		}
		else{
			count = 0;
			clearTimeout(t);
			$("#counter").text(0);
			fingertoe(count,num);
		}
	});

	$("#reset").click(function(){
		clearTimeout(t);
		count = 0;

		$("#finger").removeClass("bold");
		$("#toe").removeClass("bold");
		$("#counter").text(0);
		$("#input").val("");
		$("#input").focus();
	});


});

function fingertoe(count,num){
	if(count>num) 
		return;
	t = setTimeout(function(){
		$("#counter").text(count);
		if(count % 3 == 0){
			$("#finger").addClass("bold");
		}else{
			$("#finger").removeClass("bold");
		}
		if(count % 5 == 0){
			$("#toe").addClass("bold");
		}else{
			$("#toe").removeClass("bold");
		}
		fingertoe(++count,num);
	},1000);

}

