import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-item-kc',
  templateUrl: './shop-item-kc.component.html',
  styleUrls: ['./shop-item-kc.component.css']
})
export class ShopItemKCComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() price: string;

  constructor() { }

  ngOnInit() {
  }

}
