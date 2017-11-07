import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
import { TopComponent } from './common/top/top.component';
import { FootComponent } from './common/foot/foot.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionComponent } from './question/question.component';

import { ZoomingPicDirective } from './common/directive/zooming-pic';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    CommonComponent,
    TopComponent,
    FootComponent,
    QuestionComponent,
    ZoomingPicDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
