import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../DatabaseService/connection.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent {
  // private dataService: ConnectionService
  constructor(private dataService: ConnectionService) {
    console.log(this.dataService.getAll())
  //   this.dataService.Get("http://localhost:3306").subscribe((data: {}) => {console.log(data);}

  // document.location.href = ;
  // fetch("./database.php")
  // .then((response) => response.json())
  // .then((result) => console.log(result))
  // console.log()
  }
}