function initialize() {
				var latlng = new google.maps.LatLng(51.546325,5.089472);
				var settings = {
					zoom: 15,
					center: latlng,
					mapTypeControl: true,
					mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
					navigationControl: true,
					navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
					mapTypeId: google.maps.MapTypeId.ROADMAP};
				var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
				var contentString = '<div id="content">'+
					'<div id="siteNotice">'+
					'</div>'+
					'<h6 id="firstHeading" class="firstHeading">Fotostudio Harvey van der Meer</h6>'+
					'<div id="bodyContent">'+
					'<p>Groenstraat 139-155'+
					'<br/>5021 LL Tilburg</p>'+
					'</div>'+
					'</div>';
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				
				var companyImage = new google.maps.MarkerImage('/images/map-marker.png',
					new google.maps.Size(169,69),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);

				var companyShadow = new google.maps.MarkerImage('/images/map-marker-shadow.png',
					new google.maps.Size(130,75),
					new google.maps.Point(0,0),
					new google.maps.Point(55, 50));

				var companyPos = new google.maps.LatLng(51.546525,5.089372);

				var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: companyImage,
					shadow: companyShadow,
					title:"Fotostudio Harvey van der Meer",
					zIndex: 3});
				
				
				google.maps.event.addListener(companyMarker, 'click', function() {
					infowindow.open(map,companyMarker);
				});
			}
