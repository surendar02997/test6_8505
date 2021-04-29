import { Component, OnInit } from '@angular/core';
import { UpdatescreenService } from './updatescreen.service';

@Component({
  selector: 'app-updatescreen',
  templateUrl: './updatescreen.component.html',
  styleUrls: ['./updatescreen.component.scss'],
})

export class UpdatescreenComponent implements OnInit {
    public test = {
        name: '',
        email: '',
    }

    constructor (
        private updatescreenService: UpdatescreenService,
    ) { }

    ngOnInit() {
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