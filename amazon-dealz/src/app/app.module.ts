import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { FeaturesComponent } from './component/features/features.component';
import { HotDealsComponent } from './component/hot-deals/hot-deals.component';
import { PopDealsComponent } from './component/pop-deals/pop-deals.component';
import { AmzAdsComponent } from './component/amz-ads/amz-ads.component';
import { BlogComponent } from './component/blog/blog.component';
import { FooterComponent } from './component/footer/footer.component';
import { CopyrightComponent } from './component/copyright/copyright.component';
import { ScreenSizeService } from './services/screen-size.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    FeaturesComponent,
    HotDealsComponent,
    PopDealsComponent,
    AmzAdsComponent,
    BlogComponent,
    FooterComponent,
    CopyrightComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
