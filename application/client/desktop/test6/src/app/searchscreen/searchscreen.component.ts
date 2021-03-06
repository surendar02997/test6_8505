import { Component, OnInit } from '@angular/core';
import { SearchscreenService } from './searchscreen.service';
import { Router } from '@angular/router';

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
        private router: Router,
    ) { }

    ngOnInit() {
    }
    GpSearch() {
        this.searchscreenService.GpSearch(this.test).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./updatescr'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}