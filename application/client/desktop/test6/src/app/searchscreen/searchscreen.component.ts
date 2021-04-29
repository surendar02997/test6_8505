import { Component, OnInit } from '@angular/core';
import { SearchscreenService } from './searchscreen.service';

@Component({
  selector: 'app-searchscreen',
  templateUrl: './searchscreen.component.html',
  styleUrls: ['./searchscreen.component.scss'],
})

export class SearchscreenComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'email', field: 'email'  },];
    public test = {
        name: '',
        email: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchscreenService: SearchscreenService,
    ) { }

    ngOnInit() {
    }
}