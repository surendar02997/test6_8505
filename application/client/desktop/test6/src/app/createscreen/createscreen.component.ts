import { Component, OnInit } from '@angular/core';
import { CreatescreenService } from './createscreen.service';

@Component({
  selector: 'app-createscreen',
  templateUrl: './createscreen.component.html',
  styleUrls: ['./createscreen.component.scss'],
})

export class CreatescreenComponent implements OnInit {
    public test = {
        name: '',
        email: '',
    }

    constructor (
        private createscreenService: CreatescreenService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createscreenService.GpCreate(this.test).subscribe(data => {
            this.test.name = ''
 	 	this.test.email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}