import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MedicineClass } from '../MedicineClass';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  router: any;

  //inject the service
  constructor(private service:DataService) { }
  medicine:MedicineClass[];
  ngOnInit(): void {
    this.service.getAllMedicine().subscribe(result1=>this.medicine=result1);
  }
  btnClick() {
    this.router.navigateByUrl('/details');
  };
}
