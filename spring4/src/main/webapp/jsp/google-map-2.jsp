<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
<meta charset="utf-8">
<title>Geocoding service</title>
<style>
html,body,#map-canvas {
	height: 100%;
	margin: 0px;
	padding: 0px
}

#panel {
	position: absolute;
	top: 5px;
	left: 50%;
	margin-left: -180px;
	z-index: 5;
	background-color: #fff;
	padding: 5px;
	border: 1px solid #999;
}
</style>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
<script>
//Don't do this
//"use strict";

	var infowindow;
	var geocoder;
	//var map;
	function initialize() {
		infowindow = new google.maps.InfoWindow();	
	  	geocoder = new google.maps.Geocoder();
	  	map = new google.maps.Map(document.getElementById('map-canvas'));
	  	getCountry();
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
	function getCountry() {
		var address = document.getElementById('address').value;
	    geocoder.geocode( { 'address': address }, function(results, status) {
	        console.log(results);
	    	if (status == google.maps.GeocoderStatus.OK) {
	            var marker = new google.maps.Marker({
	                map: map,
	                title: ""+results[0].geometry.viewport,
	                position: results[0].geometry.location
	            });
	            google.maps.event.addDomListener(marker, 'click', function () {
	            	infowindow.setContent(results[0].formatted_address);
	                infowindow.open(map, this);
	            });
	          //-------------------------------------------
	           	var resultBounds = new google.maps.LatLngBounds(
	            	results[0].geometry.viewport.getSouthWest(), 
	            	results[0].geometry.viewport.getNorthEast()
	            );
	            map.fitBounds(resultBounds);
	            
	            //-------------------------------------------
	            //map.fitBounds(results[0].geometry.bounds);
	
	        } else if(status === google.maps.GeocoderStatus.ZERO_RESULTS) {
	        	console.log("ZERO_RESULTS");
	        	map.setZoom(2);
	        	map.setCenter(new google.maps.LatLng(52.40, -3.61));
	        } else if(status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
	            setTimeout(function() {
	                getCountry();
	            }, 10);
	        }
	    });
	}
</script>

</head>
<body>
	<div id="panel">
		<input id="address" type="text" value="Gurgaon" />
		<input type="button" value="Geocode" onclick="getCountry()" />
	</div>

	<div id="map-canvas"></div>
</body>
</html>