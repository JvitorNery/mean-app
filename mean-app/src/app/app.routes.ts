import {RouterModule, Routes} from '@angular/router';

import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [
  { path: '', component: PostsComponent}
];

export const routing = RouterModule.forRoot(appRoutes);