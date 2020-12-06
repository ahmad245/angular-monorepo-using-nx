import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'ahmad-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(authenticate){
    console.log(authenticate);
    
    this.authService.login(authenticate).subscribe((data)=>{
      console.log(data);
      
    });
   
  }

}
