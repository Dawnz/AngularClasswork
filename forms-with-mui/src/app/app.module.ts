import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleFormComponent } from './components/google-form/google-form.component';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './materials/materials.module';

//passes along metadata info for the module
@NgModule({
  //accepts an array of declarables
  // declarables includes Components, Pipes and Directives
  declarations: [
    AppComponent,
    GoogleFormComponent,
    ConfirmEqualValidatorDirective,
  ],
  //imports accepts an array of modules to be loaded when this module starts
  //imports by default are private to the module called
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialsModule,
  ],
  //providers accepts an array of services or guards to be accessed by declarables of this module
  providers: [],
  //Angular creates the EntryComponent(s) that is called by bootstrap.
  //This is usually AppComponent
  bootstrap: [AppComponent],
})
export class AppModule {}
