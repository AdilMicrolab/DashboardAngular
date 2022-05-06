import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './10th.svg',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements AfterViewInit {
  room = "No Room Selected"
  linkqual_1 = 0;
  linkqual_2 = 0;
  linkqual_3 = 0;
  linkqual_4 = 0;
  constructor() {
  }

  ngAfterViewInit(): void {

  let rect_el = Array.from(document.querySelectorAll("rect"))
  let space_el = rect_el.filter(el => el.id.includes("space"))
  space_el.forEach(element => {
    element.addEventListener('click', (e: any) =>
    {;
      let spacename: String = element.id;
      this.room = "Office " + spacename.replace("space", "") + " selected"
      this.linkqual_1  = Math.floor(Math.random() * 90);
      this.linkqual_2  = Math.floor(Math.random() * 90);
      this.linkqual_3  = Math.floor(Math.random() * 90);
      this.linkqual_4  = Math.floor(Math.random() * 90);
      console.log("testing clicked " + spacename)
    })
  });
  }

}
