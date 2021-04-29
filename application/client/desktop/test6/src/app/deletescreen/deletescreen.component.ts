import { Component, OnInit } from '@angular/core';
import { DeletescreenService } from './deletescreen.service';

@Component({
  selector: 'app-deletescreen',
  templateUrl: './deletescreen.component.html',
  styleUrls: ['./deletescreen.component.scss'],
})

export class DeletescreenComponent implements OnInit {
    queryId: any;
    public test = {
        name: '',
        email: '',
    }

    constructor (
        private deletescreenService: DeletescreenService,
    ) { }

    ngOnInit() {
    }
    GpDelete() {
        this.deletescreenService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
}