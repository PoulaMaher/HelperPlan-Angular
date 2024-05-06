import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeCarouselComponent } from "../home-carousel/home-carousel.component";
import { HomeFeaturesComponent } from "../home-features/home-features.component";
import { HomePlacesComponent } from "../home-places/home-places.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NgbCarouselModule, HomeCarouselComponent, HomeFeaturesComponent, HomePlacesComponent]
})
export class HomeComponent {

}
