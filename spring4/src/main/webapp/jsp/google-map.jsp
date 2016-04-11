<!DOCTYPE html>
<html> 
<head> 
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/> 
    <title>Google Maps API Geocoding Demo</title> 
    <script src="//maps.google.com/maps?file=api&amp;v=2&amp;sensor=false"
            type="text/javascript"></script> 
  </head> 
  <body onunload="GUnload()"> 

    <div id="map_canvas" style="width: 650px; height: 300px"></div> 

    <script type="text/javascript"> 

    var userLocation = 'India';
    <%
    	String l = request.getParameter("l");
    	if(l != null) {
    %>
    		userLocation = "<%=l.replaceAll("\"", "\\\\\"")%>";
    <%
    	}
    %>

    if (GBrowserIsCompatible()) {
       var geocoder = new GClientGeocoder();
       geocoder.getLocations(userLocation, function (locations) {         
          if (locations.Placemark) {
             var north = locations.Placemark[0].ExtendedData.LatLonBox.north;
             var south = locations.Placemark[0].ExtendedData.LatLonBox.south;
             var east  = locations.Placemark[0].ExtendedData.LatLonBox.east;
             var west  = locations.Placemark[0].ExtendedData.LatLonBox.west;

             var bounds = new GLatLngBounds(new GLatLng(south, west), 
                                            new GLatLng(north, east));

             var map = new GMap2(document.getElementById("map_canvas"));
				
			//console.log(map.getBoundsZoomLevel(bounds));	
             map.setCenter(bounds.getCenter(), map.getBoundsZoomLevel(bounds));
             map.addOverlay(new GMarker(bounds.getCenter()));
          }
       });
    }
    </script> 
  </body> 
</html>