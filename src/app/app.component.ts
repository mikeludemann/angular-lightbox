import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-lightbox';

	images = [
		{
			source: "../assets/doctor-mario-world.jpg", alttext: "Doctor Mario World"
		},
		{
			source: "../assets/mario-kart-tour.png", alttext: "Mario Kart Tour"
		}
	]
}
