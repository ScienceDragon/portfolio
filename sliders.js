// JavaScript Document

// JavaScript Document

window.onload = function () {

/*--------------------PRINT SLIDER------------------*/
	var print_slider = document.getElementsByClassName('print_slider')[0],
		title = document.getElementById('print_title'),
		subtitle = document.getElementById('print_subtitle'),
		images = print_slider.getElementsByTagName('div'),
		imagesLabel = print_slider.getElementsByTagName('img'),
		counter = 0,
		nextBtn = print_slider.getElementsByClassName('next')[0],
		prevBtn = print_slider.getElementsByClassName('prev')[0];
	
	function showImage (index) {
		//Set classname on the image-elements (hide them)
		for (var i = 0; i <images.length; i += 1) {
			images[i].className = 'hideImage';
		}
		
		//Add the showImage classname to the img-element you want
		images[index].className = 'showImage';
		
		//take the content of the alt tag an write it inside the title div element
		title.innerHTML = imagesLabel[index].name;
		subtitle.innerHTML = imagesLabel[index].alt;
	}
		
	function nextImg () {
		//counter variable gets the current img selected
		//if we have the last img, we switch back to the first one again
		
		if (counter < images.length -1) {
			counter += 1;
		} else {
			counter =0;
		}
		showImage(counter);
	}
	
	function prevImg () {
		//counter variable gets the current img selected
		//if we have the first img, we switch back to the last one again
		
		if (counter > 0) {
			counter -= 1;
		} else {
			counter = images.length -1;
		}
		showImage(counter);
	}
		
	//give the buttons an onclick event
	nextBtn.onclick = nextImg;
	prevBtn.onclick = prevImg;	
	
	//Says for the nextImg method to be called automatically every _ milliseconds)
	//window.setInterval(nextImg, 6000);
	
	//start the slider
	showImage(counter);	



/*--------------------WEB SLIDER------------------*/
	var web_slider = document.getElementsByClassName('web_slider')[0],
		web_title = document.getElementById('web_title'),
		web_subtitle = document.getElementById('web_subtitle'),
		web_images = web_slider.getElementsByTagName('div'),
		web_imagesLabel = web_slider.getElementsByTagName('img'),
		web_counter = 0,
		web_nextBtn = web_slider.getElementsByClassName('next')[0],
		web_prevBtn = web_slider.getElementsByClassName('prev')[0];
	
	function web_showImage (index) {
		//Set classname on the image-elements (hide them)
		for (var i = 0; i <web_images.length; i += 1) {
			web_images[i].className = 'hideImage';
		}
		
		//Add the showImage classname to the img-element you want
		web_images[index].className = 'showImage';
		
		//take the content of the alt tag an write it inside the title div element
		web_title.innerHTML = web_imagesLabel[index].name;
		web_subtitle.innerHTML = web_imagesLabel[index].alt;
	}
		
	function web_nextImg () {
		//counter variable gets the current img selected
		//if we have the last img, we switch back to the first one again
		
		if (web_counter < web_images.length -1) {
			web_counter += 1;
		} else {
			web_counter =0;
		}
		web_showImage(web_counter);
	}
	
	function web_prevImg () {
		//counter variable gets the current img selected
		//if we have the first img, we switch back to the last one again
		
		if (web_counter > 0) {
			web_counter -= 1;
		} else {
			web_counter = web_images.length -1;
		}
		web_showImage(web_counter);
	}
			
	//give the buttons an onclick event
	web_nextBtn.onclick = web_nextImg;
	web_prevBtn.onclick = web_prevImg;	
	
	//Says for the nextImg method to be called automatically every _ milliseconds)
	//window.setInterval(nextImg, 6000);
	
	//start the slider
	web_showImage(web_counter);	
	
	/*--------------------MULTIMEDIA SLIDER------------------*/
	var multimedia_slider = document.getElementsByClassName('multimedia_slider')[0],
		multimedia_title = document.getElementById('multimedia_title'),
		multimedia_subtitle = document.getElementById('multimedia_subtitle'),
		multimedia_images = multimedia_slider.getElementsByTagName('div'),
		multimedia_imagesLabel = multimedia_slider.getElementsByTagName('img'),
		multimedia_counter = 0,
		multimedia_nextBtn = multimedia_slider.getElementsByClassName('next')[0],
		multimedia_prevBtn = multimedia_slider.getElementsByClassName('prev')[0];
	
	function multimedia_showImage (index) {
		//Set classname on the image-elements (hide them)
		for (var i = 0; i <multimedia_images.length; i += 1) {
			multimedia_images[i].className = 'hideImage';
		}
		
		//Add the showImage classname to the img-element you want
		multimedia_images[index].className = 'showImage';
		
		//take the content of the alt tag an write it inside the title div element
		multimedia_title.innerHTML = multimedia_imagesLabel[index].name;
		multimedia_subtitle.innerHTML = multimedia_imagesLabel[index].alt;
	}
		
	function multimedia_nextImg () {
		//counter variable gets the current img selected
		//if we have the last img, we switch back to the first one again
		
		if (multimedia_counter < multimedia_images.length -1) {
			multimedia_counter += 1;
		} else {
			multimedia_counter =0;
		}
		multimedia_showImage(multimedia_counter);
	}
	
	function multimedia_prevImg () {
		//counter variable gets the current img selected
		//if we have the first img, we switch back to the last one again
		
		if (multimedia_counter > 0) {
			multimedia_counter -= 1;
		} else {
			multimedia_counter = multimedia_images.length -1;
		}
		multimedia_showImage(multimedia_counter);
	}
			
	//give the buttons an onclick event
	multimedia_nextBtn.onclick = multimedia_nextImg;
	multimedia_prevBtn.onclick = multimedia_prevImg;	
	
	//Says for the nextImg method to be called automatically every _ milliseconds)
	//window.setInterval(nextImg, 6000);
	
	//start the slider
	multimedia_showImage(multimedia_counter);	
	
	/*--------------------ILLUSTRATION SLIDER------------------*/
	var illustration_slider = document.getElementsByClassName('illustration_slider')[0],
		illustration_title = document.getElementById('illustration_title'),
		illustration_subtitle = document.getElementById('illustration_subtitle'),
		illustration_images = illustration_slider.getElementsByTagName('div'),
		illustration_imagesLabel = illustration_slider.getElementsByTagName('img'),
		illustration_counter = 0,
		illustration_nextBtn = illustration_slider.getElementsByClassName('next')[0],
		illustration_prevBtn = illustration_slider.getElementsByClassName('prev')[0];
	
	function illustration_showImage (index) {
		//Set classname on the image-elements (hide them)
		for (var i = 0; i <illustration_images.length; i += 1) {
			illustration_images[i].className = 'hideImage';
		}
		
		//Add the showImage classname to the img-element you want
		illustration_images[index].className = 'showImage';
		
		//take the content of the alt tag an write it inside the title div element
		illustration_title.innerHTML = illustration_imagesLabel[index].name;
		illustration_subtitle.innerHTML = illustration_imagesLabel[index].alt;
	}
		
	function illustration_nextImg () {
		//counter variable gets the current img selected
		//if we have the last img, we switch back to the first one again
		
		if (illustration_counter < illustration_images.length -1) {
			illustration_counter += 1;
		} else {
			illustration_counter =0;
		}
		illustration_showImage(illustration_counter);
	}
	
	function illustration_prevImg () {
		//counter variable gets the current img selected
		//if we have the first img, we switch back to the last one again
		
		if (illustration_counter > 0) {
			illustration_counter -= 1;
		} else {
			illustration_counter = illustration_images.length -1;
		}
		illustration_showImage(illustration_counter);
	}
			
	//give the buttons an onclick event
	illustration_nextBtn.onclick = illustration_nextImg;
	illustration_prevBtn.onclick = illustration_prevImg;	
	
	//Says for the nextImg method to be called automatically every _ milliseconds)
	//window.setInterval(nextImg, 6000);
	
	//start the slider
	illustration_showImage(illustration_counter);
	
	/*--------------------PHOTOGRAPHY SLIDER------------------*/
	var photography_slider = document.getElementsByClassName('photography_slider')[0],
		photography_title = document.getElementById('photography_title'),
		photography_subtitle = document.getElementById('photography_subtitle'),
		photography_images = photography_slider.getElementsByTagName('div'),
		photography_imagesLabel = photography_slider.getElementsByTagName('img'),
		photography_counter = 0,
		photography_nextBtn = photography_slider.getElementsByClassName('next')[0],
		photography_prevBtn = photography_slider.getElementsByClassName('prev')[0];
	
	function photography_showImage (index) {
		//Set classname on the image-elements (hide them)
		for (var i = 0; i <photography_images.length; i += 1) {
			photography_images[i].className = 'hideImage';
		}
		
		//Add the showImage classname to the img-element you want
		photography_images[index].className = 'showImage';
		
		//take the content of the alt tag an write it inside the title div element
		photography_title.innerHTML = photography_imagesLabel[index].name;
		photography_subtitle.innerHTML = photography_imagesLabel[index].alt;
	}
		
	function photography_nextImg () {
		//counter variable gets the current img selected
		//if we have the last img, we switch back to the first one again
		
		if (photography_counter < photography_images.length -1) {
			photography_counter += 1;
		} else {
			photography_counter =0;
		}
		photography_showImage(photography_counter);
	}
	
	function photography_prevImg () {
		//counter variable gets the current img selected
		//if we have the first img, we switch back to the last one again
		
		if (photography_counter > 0) {
			photography_counter -= 1;
		} else {
			photography_counter = photography_images.length -1;
		}
		photography_showImage(photography_counter);
	}
			
	//give the buttons an onclick event
	photography_nextBtn.onclick = photography_nextImg;
	photography_prevBtn.onclick = photography_prevImg;	
	
	//Says for the nextImg method to be called automatically every _ milliseconds)
	//window.setInterval(nextImg, 6000);
	
	//start the slider
	photography_showImage(photography_counter);


};