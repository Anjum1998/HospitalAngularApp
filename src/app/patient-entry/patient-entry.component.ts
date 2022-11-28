import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  name=""
  id=""
  address=""
  number=""
  doa=""
  image=""
  dname=""

  readValue=()=>
  {
    let data:any={
      "name":this.name,"id":this.id,"address":this.address,"number":this.number,"doa":this.doa,"image":this.image,"dname":this.dname
    }
    console.log(data)
  }

}
