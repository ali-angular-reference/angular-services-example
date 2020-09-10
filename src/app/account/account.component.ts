import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers:[LoggingService] //providers says what instance of the service I want - removing the account service means that the account service instance from app component is used
})
export class AccountComponent {
  // still receiving data from inside
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // new dependency injection (overrides instance from the app component)
  constructor(private loggingService: LoggingService, private accountService: AccountsService){}

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, this.account.status);
    // this.loggingService.logStatusChange(status);
  }
}
