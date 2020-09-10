import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers:[LoggingService] // we want a logging service, provide it (tell angular how to create it)
})
export class NewAccountComponent {

  // get an instance of the logging service (overrides the instance from app componnt)
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // call the method in the accounts service
    this.accountsService.addAccount(accountName, accountStatus)
    // call the log status change method in the logging service
    // this.loggingService.logStatusChange(accountStatus);
  }
}
