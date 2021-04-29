import { Component, OnInit } from '@angular/core';
import { DeletescreenService } from './deletescreen.service';

@Component({
  selector: 'app-deletescreen',
  templateUrl: './deletescreen.component.html',
  styleUrls: ['./deletescreen.component.scss'],
})

export class DeletescreenComponent implements OnInit {
    public test = {
        name: '',
        email: '',
    }

    constructor (
        private deletescreenService: DeletescreenService,
    ) { }

    ngOnInit() {
    }
}