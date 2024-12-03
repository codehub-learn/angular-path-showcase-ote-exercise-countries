import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { FormExampleComponent } from './pages/form-example/form-example.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomepageComponent
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "about-us",
        component: AboutUsComponent
    },
    {
        path: "about-us/:id/edit",
        component: AboutUsComponent
    },
    {
        path: "form-example",
        component: FormExampleComponent
    },
    {
        path: "**",
        component: NotFound404Component
    },
];
