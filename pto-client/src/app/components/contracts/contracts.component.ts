import { Component, OnInit } from '@angular/core';
import { Contract } from './contract';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  contracts: Contract[] = [];

  constructor() { }

  ngOnInit() {
    this.contracts.push(new Contract(-1, '+ Новый документ'));
    for (let i = 0; i < 42; i++) {
      this.contracts.push(new Contract(i, 'Документ ' + i));
    }
  }

  listDisplayShema(item: Contract) {
    return item.num;
  }

  listLinkShema(item: Contract) {
    return `/contracts/${item.id}`;
  }

  searchBySubString(subString: string) {
    console.log(subString);
  }
}
