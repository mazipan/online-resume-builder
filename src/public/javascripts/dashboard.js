 $(document).ready(function () {

	 var remove = function removeAllActiveTab(){
		 $(".ts-sidebar-menu li").each(function () {
			 if ($(this).next().length > 0) {
				 $(this).removeClass("open");

			 };
		 });
	 };

	 $(".ts-sidebar-menu li").click(function (e) {
		 remove();
		 $(this).toggleClass('open');
		 var a = $(this).children(a);
		 if(a.length > 0){
			 var target = $(a).attr('data-target');
			 $('#' + target).show();
			 $('#' + target).siblings().hide();
		 }
	 });
	 
	 $("#input-43").fileinput({
		showPreview: false,
		allowedFileExtensions: ["zip", "rar", "gz", "tgz"],
		elErrorContainer: "#errorBlock43"
			// you can configure `msgErrorClass` and `msgInvalidFileExtension` as well
	});

 });


function changeLevelSlide(event){
	var target = event.target;
	var value = parseInt($(target).val());
	$("#skilllevel").val(value);
}

function submitNewSkill(){
	var skill = $("#skillname").val();
	var skillId = skill.toLowerCase().split(" ").join();
	var level = $("#skilllevel").val();

	$("#container-skill").append("<a class='btn btn-skill' title='Skill : "+ skill +", Level : "+ level +"' href='#"+ skillId +"'>"+ skill +" : "+ level +"</a>");

	$("#skillname").val("");
	$("#skilllevel").val(0);
	$("#skilllevelslider").val(0);
}
