import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientFormA!: FormGroup;
  clientFormB!: FormGroup;
  clientFormC!: FormGroup
  public showTaxFieldY: boolean = false
  public showTaxFieldN: boolean = false
  public showForeignTaxFieldY: boolean = false
  public showForeignTaxFieldN: boolean = false
  constructor(private _fb: FormBuilder) { }
  ngOnInit(): void {
    this.clientFormA = this._fb.group({
      title: [null],
      givennames: [null],
      surname:[],
      dob:[],
      email:[],
      address:[],
      suburb:[],
      state:[],
      postcode:[],
      
    });
    this.clientFormB = this._fb.group({
      username: [null],
      password: [null]
    });
    this.clientFormC = this._fb.group({
      username: [null],
      password: [null]
    });
  }
  public list = [{
    type: "Individual / joint holding",
    value: "Individual"
  },
  {
    type: "Unregulated trust with individual trustee",
    value: "Unregulated"
  },
  {
    type: "Regulated trust with individual trustee",
    value: "Regulated"
  }]
  public responseList = [{
    type: "YES",
    value: "Y",
     checked: false,
  },
  {
    type: "NO",
    value: "N",
     checked: false,
  }]
  public AssetList =[{
    type: "Gain Employment",
    value: "Gain Employment"
  },
  {
    type: "Inheritance/gift ",
    value: "Inheritance/gift "
  },
  {
    type: "Financial investments",
    value: "Financial investments"
  },
  {
    type: "Superannuation savings",
    value: "Individual"
  },
  ]
  onClientIDSubmit() { }
  toggle(data: any) {
    debugger
  }

  taxValue(checkedData: any, item: any) {
   
    this.responseList.forEach(x => {
      if (x.value !== item) {
        x.checked = !x.checked
      }
    })
    this.showTaxFieldY = false
    this.showTaxFieldN = false
    if (item == 'Y' && checkedData.checked == true) {
      this.showTaxFieldY = true
    } else if(item == 'N' && checkedData.checked == true) {
      this.showTaxFieldN =true
    }
  }
  foreignTaxValue(checkedData: any, item: any){
    debugger
    this.showForeignTaxFieldN = false
    this.showForeignTaxFieldY = false
    if (item == 'Y' && checkedData.checked == true) {
      this.showForeignTaxFieldY = true
    } else if(item == 'N' && checkedData.checked == true) {
      this.showForeignTaxFieldN =true
    }
  }
}
