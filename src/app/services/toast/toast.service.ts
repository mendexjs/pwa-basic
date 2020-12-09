import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  private toast;

  async present({ message, duration = 1500, options = {} }) {
    if (this.toast) this.toast.dismiss();

    this.toast = await this.toastCtrl.create({
      message,
      duration,
      ...options,
    });

    this.toast.present();
  }

  error(message, options = {}) {
    this.present({
      message,
      options: {
        cssClass: 'error-toast',
        position: 'bottom',
        duration: 3000,
        ...options,
      },
    });
  }
}
