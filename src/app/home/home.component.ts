import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../service/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  



  constructor(private constantsService : ConstantsService) { }

  ngOnInit(): void {
  }

  email = this.constantsService.email;

}
