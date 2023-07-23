import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { MedicineClass } from './MedicineClass';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="http://localhost:8082/api/mymedicine/";

  //inject the DI
  constructor(private http:HttpClient) { }

  //get all users
  getAllMedicine():Observable<MedicineClass[]>{
    return this.http.get<MedicineClass[]>(this.url);
  }
 
  //get Medicine by id
   getMedicineById(id:number):Observable<MedicineClass>{
    return this.http.get<MedicineClass>(this.url+id);
  }
//   //get user by email
//   getUserByEmail(email:string):Observable<UserClass>{
//     return this.http.get<UserClass>(this.url+email);
//   }
//   //create record
//   create(data:any ):Observable<any>{
//     return this.http.post(this.url,data).pipe();
//   }
//   //deleteById
//   deleteById(id:number){
//     let myid=id;
//     this.http.delete(this.url+myid).subscribe(data=>{
//       return this.getAllUser();
//     });
//   }

//   //update user
//   updateUser(cust:UserClass,id:number){
//     return this.http.put(this.url+id,cust);
//   }
}
