import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLogoComponent } from './views/app-logo/app-logo.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { BannerComponent } from './views/banner/banner.component';
import { DepoimentosComponent } from './views/depoimentos/depoimentos.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { FaqComponent } from './views/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLogoComponent,
    AppHomeComponent,
    BannerComponent,
    DepoimentosComponent,
    ProdutosComponent,
    FaqComponent,

  ],
  imports: [
    [NgbModule],
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
