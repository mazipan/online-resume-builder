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
	 });
	 
	 $("#input-43").fileinput({
		showPreview: false,
		allowedFileExtensions: ["zip", "rar", "gz", "tgz"],
		elErrorContainer: "#errorBlock43"
			// you can configure `msgErrorClass` and `msgInvalidFileExtension` as well
	});

 });


