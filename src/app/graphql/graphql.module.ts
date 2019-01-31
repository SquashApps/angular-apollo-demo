import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { resolvers, defaults, typeDefs } from './schema';


@NgModule({
  imports: [HttpClientModule, ApolloModule],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory() {
      const cache = new InMemoryCache();

      return {
        link: withClientState({
          cache,
          resolvers,
          defaults,
          typeDefs
        }),
        cache
      };
    }
  }]
})
export class GraphQLModule {}
