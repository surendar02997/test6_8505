import { Component, OnInit } from '@angular/core';
import { UpdatescrService } from './updatescr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatescr',
  templateUrl: './updatescr.component.html',
  styleUrls: ['./updatescr.component.scss'],
})

export class UpdatescrComponent implements OnInit {
    queryId: any;
    public test = {
        name: '',
        email: '',
    }

    constructor (
        private updatescrService: UpdatescrService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    GpGetNounById() {
        this.updatescrService.GpGetNounById(this.queryId).subscribe(data => {
            this.test = data
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updatescrService.GpUpdate(this.test).subscribe(data => {
            this.test.name = ''
 	 	this.test.email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.updatescrService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
}