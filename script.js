
function initMap() {
	var storeLocation = {lat: 34.1031131, lng: -118.326343};
    var anotherStore = {lat: 34.0739666, lng: -118.2407428};
    //youcanputanothercenterpoint to see both more clearly lol and put it in the center place lol 
	var map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center' : storeLocation,
		'zoom' : 12,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false
	});
	
    
    var popupContent = 'H+ Sport<br>';
        popupContent += '1750 Vine Street<br>';
        popupContent += 'Los Angeles, CA<br>';
    
    var infowindow = new google.maps.InfoWindow({
          content: popupContent 
        });

    
	var marker = new google.maps.Marker({
		'position': storeLocation,
		'map': map,
		'title': 'hplus sport in Los Angeles (actually Capitol Records in real life)'
	});
    
    marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    
    
    var popupContentTwo = 'H+ Sport<br>';
        popupContentTwo += '1000 Vin Scully Ave.<br>';
        popupContentTwo += 'Los Angeles, CA 90012<br>';
    
    
    var infowindowTwo = new google.maps.InfoWindow({
          content: popupContentTwo
        });
    
    	var markerTwo = new google.maps.Marker({
		'position': anotherStore,
		'map': map,
		'title': 'dodger center)'
	});
    
     markerTwo.addListener('click', function() {
          infowindowTwo.open(map, markerTwo);
        });

}