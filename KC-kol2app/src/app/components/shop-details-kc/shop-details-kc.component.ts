import {Component, Input, OnInit} from '@angular/core';
import {KCDataService} from '../../services/kc-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop-details-kc',
  templateUrl: './shop-details-kc.component.html',
  styleUrls: ['./shop-details-kc.component.css']
})
export class ShopDetailsKCComponent implements OnInit {

  id: number;
  title: string;
  text: string;
  image: string;
  price: string;

  constructor(private dataService: KCDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
    });
    this.dataService.getById(id).subscribe(res => {
      this.image = res['image'];
      this.text = res['text'];
      this.title = res['title'];
      this.id = res['id'];
      this.price = res['price'];
    });
  }

}
