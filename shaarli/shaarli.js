function shaarli(id) {
    try {
	var query = "?op=pluginhandler&plugin=shaarli&method=getShaarli&id=" + encodeURIComponent(id);
	
	console.log(query);
		
	new Ajax.Request("backend.php",	{
	    parameters: query,
	    onComplete: function(transport) {
		var ti = JSON.parse(transport.responseText);
		
		var share_url = ti.shaarli_url + "?post="+ encodeURIComponent(ti.link)+ "&title="+encodeURIComponent(ti.title)+encodeURIComponent(document.getSelection())+"&source=bookmarklet";
		console.log(share_url);
		window.open(share_url,'_blank','menubar=no,height=390,width=600,toolbar=no,scrollbars=no,status=no,dialog=1');
		
	    } });
    } catch (e) {
	exception_error("Shaarli", e);
    }
}

