import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
 images:string[] = ["organic1.jpg","organic2.jpg","organic3.jpg","organic4.jpg","organic5.jpg"];
 current:string ="https://storageblobcommerce.blob.core.windows.net/imagesecommerceclient/organic1.jpg";
  constructor() { }

  ngOnInit(): void {
    setInterval(()=> this.current ="https://storageblobcommerce.blob.core.windows.net/imagesecommerceclient/" +this.images[Math.round(Math.random()*4)]
    ,2000)
  }

}
