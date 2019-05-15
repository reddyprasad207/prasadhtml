import { Component } from '@angular/core';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class headerComponent {
    public aaa:any="hello";
    public fruits:any=[
      {
        name:"apple",
        value:"a" 
    },
    {
      name:"banana",
      value:"b"
    }
];
public employee:any=[
  {
    name:"prasad",
    sal:"15000"
  },
  {
    name:"reddy",
    sal:"20000"
  }
];
}
