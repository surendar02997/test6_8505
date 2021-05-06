import { Component, OnInit } from '@angular/core';
import { UpdatescrService } from './updatescr.service';

@Component({
  selector: 'app-updatescr',
  templateUrl: './updatescr.component.html',
  styleUrls: ['./updatescr.component.scss'],
})

export class UpdatescrComponent implements OnInit {
    public test = {
        name: '',
        email: '',
    }

    constructor (
        private updatescrService: UpdatescrService,
    ) { }

    ngOnInit() {
    }
}