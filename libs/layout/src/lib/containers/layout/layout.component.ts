import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../../data-models';
import { AuthService } from '../../../../../auth/src';

@Component({
  selector: 'ahmad-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

}
