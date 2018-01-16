var lang;

//translator page
function loadTranslator(){

	lang = getParameterByName("lang");		

	if (lang == "")
		lang = "pt-br";

	$.ajax({
	  url: "assets/lang/"+lang+".txt",
	  dataType: "json",

	}).done(function(j) {
		$( ".tls" ).each(function( index ) {			

			$(this).html(j[$(this).attr("id")]);

		});	
	});	

}

function getParameterByName(name) {
	
	var url = window.location;

    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if( results == null) return "";
    if (!results) return "";
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}