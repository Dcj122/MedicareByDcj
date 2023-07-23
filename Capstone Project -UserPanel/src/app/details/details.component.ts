import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineClass } from '../MedicineClass';
import { DataService } from '../data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:DataService) { }

  medicine:MedicineClass
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id:",id);
    this.service.getMedicineById(Number(id)).subscribe(data=>this.medicine=data);
  }
  btnClick() {
    this.router.navigateByUrl('/ticket');
  };
}
