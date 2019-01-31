/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

/** GraphQL and Apollo Module */

import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';

/**Material Module **/

import { MaterialModule } from './app.material-module';

/** Components **/

import { DemoListComponent } from './demo-list/demo-list.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoListComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ApolloModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
