import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string): void {
    this.toastr.success(message, 'Success', { closeButton: true });
    console.log('notification showSuccess: ', message);
  }

  showError(message: string): void {
    this.toastr.error(message, 'Error', { closeButton: true });
    console.log('notification showError: ', message);
  }
}
