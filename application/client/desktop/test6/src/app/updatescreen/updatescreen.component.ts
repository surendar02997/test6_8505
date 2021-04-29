import { Component, OnInit } from '@angular/core';
import { UpdatescreenService } from './updatescreen.service';

@Component({
  selector: 'app-updatescreen',
  templateUrl: './updatescreen.component.html',
  styleUrls: ['./updatescreen.component.scss'],
})

export class UpdatescreenComponent implements OnInit {
    queryId: any;
    public test = {
        name: '',
        email: '',
    }

    constructor (
        private updatescreenService: UpdatescreenService,
    ) { }

    ngOnInit() {
    }
    GpDelete() {
        this.updatescreenService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updatescreenService.GpUpdate(this.test).subscribe(data => {
            this.test.name = ''
 	 	this.test.email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}