import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input('userForm.value') public: any;
  users: any;
  list: Array<any> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data :any)=> {
      this.list=data;

    });
  }
  deleteUser(index:number) {
   this.list.splice(index,1);
   console.log(this.list);
  }
  updateUsers(){
    this.apiService.updateUsers().subscribe(data=>{
      console.log('user update successfuly'+data);
    },(err:string)=>{
      console.log('unable to update'+err)
    })
  }

}
