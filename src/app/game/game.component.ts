import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  private images: string[] = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png'
  ];
  imageBox1: string;
  imageBox2: string;
  imageBox3: string;



  async startSlider() {
    for (let i = 0; i < this.getRandomInt(6, 10); i++) {
      this.imageBox1 = "../../assets/" + this.images[this.getRandomInt(0, 4)]
      this.imageBox2 = "../../assets/" + this.images[this.getRandomInt(0, 4)]
      this.imageBox3 = "../../assets/" + this.images[this.getRandomInt(0, 4)]
      await this.delay(200);
    }

  }



  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(number);
    return number
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
