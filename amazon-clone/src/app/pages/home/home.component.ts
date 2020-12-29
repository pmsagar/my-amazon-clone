import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private items:any[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.api.getProductJson().subscribe((resp)=>{
      this.items = resp;
    });
  }



}
