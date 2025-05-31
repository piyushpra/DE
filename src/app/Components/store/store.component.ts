import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
declare var jQuery: any;
import { products } from './products';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

  storeAnimation: boolean = false;
  rotateAnimation: boolean = false;
  productList: products[] = [
    {
      pName: "product1",
      pAmount: 1000
    },
    {
      pName: "product2",
      pAmount: 1000
    },
    {
      pName: "product3",
      pAmount: 1000
    },
    {
      pName: "product4",
      pAmount: 1000
    },
    {
      pName: "product5",
      pAmount: 1000
    },
    {
      pName: "product6",
      pAmount: 1000
    }
  ];

  ngOnInit(): void {

    fetch("../../database.php")
    .then((response) => console.log(response));

  }

}
