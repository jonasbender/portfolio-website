import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../service/constants.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private constantsService : ConstantsService) { }

  ngOnInit(): void {
  }

  email = this.constantsService.email;

}
