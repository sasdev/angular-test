import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  constructor() { }
  public data = [
    { id: 1, name: "John", number: "01234567" }, 
    { id: 2, name: "Mary", number: "01234567"  },
    { id: 3, name: "Joe", number: "01234567"  },
    { id: 4, name: "Andy", number: "01234567"  },
    { id: 5, name: "Claire", number: "01234567"  },
    { id: 6, name: "Jane", number: "01234567"  }
  ];
  public a() {
    this.data.push({id:1,name:'test',number:'1232134'})
    console.log('added record')
    console.log(JSON.stringify(this.data))
  }

  columnsToDisplay = ['id', 'name', 'number','actions'];
  ngOnInit() {
    
  }

}

