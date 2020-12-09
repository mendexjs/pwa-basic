import { ToastService } from './services/toast/toast.service';
import { Component } from '@angular/core';

// import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private toastService: ToastService,
    private updates: SwUpdate
  ) {
    this.initializeApp();
  }

  initializeApp() {
      this.verifyUpdateApp();
  }

  verifyUpdateApp(){
    this.updates.available.subscribe(event => {
      this.updates.activateUpdate().then(() => {
        document.location.reload();
        this.toastService.present({message: "Nova versão disponível, atualizando...", duration: 2000});
      });
    });
  }

}
