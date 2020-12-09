import { ToastService } from './../../services/toast/toast.service';
import { Component, OnInit } from '@angular/core';
import { YourService } from 'src/app/services/your.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {  
  constructor(
    private toast: ToastService,
    private dtService: YourService,
  ) {
  }

  ngOnInit() {

  }  

}
