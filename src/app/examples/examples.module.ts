import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from 'app/app.routing';
import { RouterModule } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        ProjectsListComponent,
        ProjectDetailsComponent
    ]
})
export class ExamplesModule { }
