import { Component, OnInit } from '@angular/core';
import { GetallscreenService } from './getallscreen.service';

@Component({
  selector: 'app-getallscreen',
  templateUrl: './getallscreen.component.html',
  styleUrls: ['./getallscreen.component.scss'],
})

export class GetallscreenComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'email', field: 'email'  },];
    public test = {
        name: '',
        email: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallscreenService: GetallscreenService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallscreenService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}