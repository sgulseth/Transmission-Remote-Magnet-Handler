var url;
if(username) {
	url = 'http://'+username+':'+password+'@'+host+':'+port+'/transmission/rpc';		
}
else {
	url = 'http://'+host+':'+port+'/transmission/rpc';	
}
var token = '';

var sendRequest = (function(magnet) {
	console.log(magnet);
	$.ajax({
		url : url,
		type: 'POST',
		contentType: 'json',
		dataType: 'json',
		cache: false,
		data: '{"method":"torrent-add","arguments":{"paused":false,"filename":"'+magnet+'"}}',
		beforeSend: function(XHR){ XHR.setRequestHeader('X-Transmission-Session-Id', token); },
		error: function(request, error_string, exception){
			if(request.status == 401) {
				alert("Error: Wrong username/password. Please check the options page.");
			}
			else if(request == 'timeout') {
				alert("Connection to transmission remote timed out. Wrong host/port?");
			}
			else if (request.status === 409 && (token = request.getResponseHeader('X-Transmission-Session-Id'))) {
				console.log(token);
				sendRequest(magnet);
			}
			else {
				alert('Something went wrong :(');
			}
		},
		success: function() {
			
		},
		context: this,
	});
});

$("a").each(function () {
	var src = $(this).attr("href");
	if(src != undefined) {
		if(src.indexOf("magnet:") == 0) {
			$(this).click(function(e) {
				if(host) {
					e.preventDefault();
					sendRequest($(this).attr("href"));
				}
				else {
					alert("Transmission Remote Handler Extension is not configured properly");
				}
			});
		}
	}
});