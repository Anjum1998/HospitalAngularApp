import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-deleteh',
  templateUrl: './patient-deleteh.component.html',
  styleUrls: ['./patient-deleteh.component.css']
})
export class PatientDeletehComponent {

  id=""

  readValue=()=>
  {
    let data:any={
      "id":this.id
    }
    console.log(data)
  }

}
