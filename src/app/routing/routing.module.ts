import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { GeneralNoticesComponent } from '../notice/general-notices/general-notices.component';
import { UsualNoticeComponent } from '../notice/usual-notice/usual-notice.component';
import { NoticeCreatorComponent } from '../notice/notice-creator/notice-creator.component';
import { WrapperNoticesComponent } from '../notice/wrapper-notices/wrapper-notices.component';
import { NoticeEditorContainerComponent } from '../notice/notice-editor-container/notice-editor-container.component';
import { ContainerNoticesComponent } from '../notice/container-notices/container-notices.component';
import { NoticeContainerWrapperComponent } from '../notice/notice-container-wrapper/notice-container-wrapper.component';
import { PageNotFoundComponent } from '../app-common/page-not-found/page-not-found.component';
import { AboutComponent } from '../app-common/about/about.component';

const routes: Routes  = [
  { path: '', redirectTo: 'notices', pathMatch: 'full' },
  { path: 'notices', component: GeneralNoticesComponent, children: [
    { path: '', redirectTo: 'all-notices', pathMatch: 'full' },
    { path: 'all-notices', component: WrapperNoticesComponent },
    { path: 'search', component: NoticeContainerWrapperComponent },
    { path: 'edit/:id', component: NoticeEditorContainerComponent }
  ]},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
