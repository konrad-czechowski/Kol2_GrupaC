import {Component, OnInit} from '@angular/core';
import {KCDataService} from '../../services/kc-data.service';

@Component({
  selector: 'app-shop-kc',
  templateUrl: './shop-kc.component.html',
  styleUrls: ['./shop-kc.component.css']
})
export class ShopKCComponent implements OnInit {

  public items$: any;

  constructor(private service: KCDataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
