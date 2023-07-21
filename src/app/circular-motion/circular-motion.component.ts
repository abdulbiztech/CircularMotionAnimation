import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-circular-motion',
  templateUrl: './circular-motion.component.html',
  styleUrls: ['./circular-motion.component.css'],
  animations: [
    trigger('rotateImages', [
      state('0', style({ transform: 'rotate(0deg)' })),
      state('60', style({ transform: 'rotate(60deg)' })),
      state('120', style({ transform: 'rotate(120deg)' })),
      state('180', style({ transform: 'rotate(180deg)' })),
      state('240', style({ transform: 'rotate(240deg)' })),
      state('300', style({ transform: 'rotate(300deg)' })),
      state('360', style({ transform: 'rotate(360deg)' })),
      transition('* => *', animate('1s ease-out'))
    ])
  ]
})
export class CircularMotionComponent implements OnInit {
  currentDegree = 0;
  imageSrcArray = [
    'assets/image1.png',
    'assets/image2.png',
    'assets/image3.png'
  ];
  imageSrc = this.imageSrcArray[0];

  ngOnInit() {
    this.rotateImages();
  }

  rotateImages() {
    setInterval(() => {
      this.currentDegree += 60;
      if (this.currentDegree === 360) {
        this.currentDegree = 0;
      }
      const imageIndex = Math.floor(this.currentDegree / 60);
      this.imageSrc = this.imageSrcArray[imageIndex];
    }, 1000);
  }

  onClickCircle() {
    this.currentDegree += 60;
    if (this.currentDegree === 360) {
      this.currentDegree = 0;
    }
    const imageIndex = Math.floor(this.currentDegree / 60);
    this.imageSrc = this.imageSrcArray[imageIndex];
    console.log("imageSrc",this.imageSrc);
    console.log("currentDegree",this.currentDegree);

  }


}
