import { Component, OnInit } from '@angular/core';
import { MedicineClass } from '../MedicineClass';
import { DataService } from '../data.service';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  medicine:MedicineClass[];
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getAllMedicine().subscribe(result1=>this.medicine=result1);
  }

}
