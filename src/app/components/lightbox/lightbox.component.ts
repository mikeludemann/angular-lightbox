import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'lightbox',
	templateUrl: './lightbox.component.html',
	styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }
	//@Input() images: any;

	@ViewChild('mainLightbox', { read: ElementRef , static: true}) el: ElementRef;
	@ViewChild('mainModal', { static: false }) private mainModal: any;

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit(){
		var body = document.getElementsByTagName("body")[0];

		var defaultIndex = 1;

		function showSlides(n) {

			var i: number;
				var slides = document.getElementsByClassName("mySlides");

			if (n > slides.length) {

				defaultIndex = 1;

			}

			if (n < 1) {

				defaultIndex = slides.length;

			}

			for (i = 0; i < slides.length; i++) {

				slides[i].setAttribute("style", "display:none");

			}

			slides[defaultIndex-1].setAttribute("style", "display:block");

		}

		showSlides(defaultIndex);

		function openModal(n) {

			document.getElementById("lightboxImage").setAttribute("style", "display:block");
			body.setAttribute("style", "position:'fixed'");

			showSlides(defaultIndex = n);

		}

		var col = document.getElementsByClassName("column");
		var i = 0;

		for(i; i < col.length; i++){

			col[i].children[0].addEventListener("click", function(){ (function(i){

				return function(){

					openModal(i+1);
					console.log(i);

				}

			})(i); });

		}

		var prev = document.getElementsByClassName("prev")[0];
		var next = document.getElementsByClassName("next")[0];
		var close = document.getElementsByClassName("close")[0];

		prev.addEventListener("click", function(){

			showSlides(defaultIndex -= 1);

		});

		next.addEventListener("click", function(){

			showSlides(defaultIndex += 1);

		});

		close.addEventListener("click", function(){

			document.getElementById("lightboxImage").setAttribute("style", "display:none");
			body.setAttribute("style", "position:''");

		});

		var dw = document || window;

		dw.onclick = function (event) {

			var modal = document.getElementById("lightboxImage");

			if (event.target == modal) {

				modal.style.display = "none";
				body.style.position = "";

			}

		}
	}

}
