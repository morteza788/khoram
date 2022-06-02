
	/* toggle menu */

	const bar = document.querySelector('#menu-toggle');
	const menu = document.querySelector('.menu-responsive');
	const close = document.querySelector('.btn-close');
	const drop = document.querySelector('.backdrop');

	bar.addEventListener('click', ()=> {
		menu.style.right = '0';
		drop.style.display = 'block';
	});

	close.addEventListener('click', ()=>{
		menu.style.right = '-320px';
		drop.style.display = 'none';
	});

	drop.addEventListener("click", ()=>{
		menu.style.right = '-320px';
		drop.style.display = 'none';
	})


    // blog carousel
    $('#blog').owlCarousel({
		rtl:true,
		loop: true,
		margin: 10,
		dots:true,
		responsive: {
		  0: {
			items: 1
		  },
		  768: {
			items: 2
		  },
		  1170: {
			items: 3
		  }
		}
	});

//map

	function init() {
		var mapOptions = {
			zoom: 11,
			scrollwheel: false,
			center: new google.maps.LatLng(35.6892, 51.3890),
			styles:
				[
					{
						"featureType": "landscape",
						"stylers": [
							{
								"hue": "#FFBB00"
							},
							{
								"saturation": 43.400000000000006
							},
							{
								"lightness": 37.599999999999994
							},
							{
								"gamma": 1
							}
						]
					},
					{
						"featureType": "road.highway",
						"stylers": [
							{
								"hue": "#FFC200"
							},
							{
								"saturation": -61.8
							},
							{
								"lightness": 45.599999999999994
							},
							{
								"gamma": 1
							}
						]
					},
					{
						"featureType": "road.arterial",
						"stylers": [
							{
								"hue": "#FF0300"
							},
							{
								"saturation": -100
							},
							{
								"lightness": 51.19999999999999
							},
							{
								"gamma": 1
							}
						]
					},
					{
						"featureType": "road.local",
						"stylers": [
							{
								"hue": "#FF0300"
							},
							{
								"saturation": -100
							},
							{
								"lightness": 52
							},
							{
								"gamma": 1
							}
						]
					},
					{
						"featureType": "water",
						"stylers": [
							{
								"hue": "#0078FF"
							},
							{
								"saturation": -13.200000000000003
							},
							{
								"lightness": 2.4000000000000057
							},
							{
								"gamma": 1
							}
						]
					},
					{
						"featureType": "poi",
						"stylers": [
							{
								"hue": "#00FF6A"
							},
							{
								"saturation": -1.0989010989011234
							},
							{
								"lightness": 11.200000000000017
							},
							{
								"gamma": 1
							}
						]
					}
				]
		};
		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(35.6892, 51.3890),
			map: map,
			icon: 'assets/img/icon-img/2.png',
			animation: google.maps.Animation.BOUNCE,
			title: 'Snazzy!'
		});
	}
	google.maps.event.addDomListener(window, 'load', init);




