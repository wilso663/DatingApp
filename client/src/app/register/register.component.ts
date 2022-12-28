import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Toast, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  constructor(private accountService: AccountService, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => {
        this.toastrService.error(error.error);
        console.log(error);
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
