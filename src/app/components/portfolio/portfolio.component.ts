import { Component } from '@angular/core';
import { InfoComponent } from "../info/info.component";

@Component({
  selector: 'app-portfolio',
  imports: [InfoComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imageList: string[] = [
    "/images/portfolio/poert1.png",
    "/images/portfolio/port2.png",
    "/images/portfolio/port3.png",
    "/images/portfolio/poert1.png",
    "/images/portfolio/port2.png",
    "/images/portfolio/port3.png"
  ]

  // control when hover toggle
  display: boolean = false

  // display layout
  displayLayout(hoverName: HTMLElement): void {

    let elem = hoverName.querySelector('.layout');
    elem?.classList.remove('d-none');

  }

  // hide layout
  hideLayout(hoverName: HTMLElement): void {

    let elem = hoverName.querySelector('.layout');
    elem?.classList.add('d-none');
  }

  // image section
  imageSection: boolean = false;
  defaultImg: string = "/images/portfolio/poert1.png"

  // toggle to show the image selected
  toggleSection(imageUrl: string): void {
    console.log(imageUrl)
    this.defaultImg = imageUrl
    this.imageSection = !this.imageSection;
  }

  // dismiss the layout if i press any where , but the image
  dismissLayout(selectedImage: any): void {
    if (selectedImage.target.src === undefined ) {
      this.imageSection = false
    }

  }
}
