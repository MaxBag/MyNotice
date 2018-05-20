import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeCreatorComponent } from './notice-creator/notice-creator.component';
import { ColorPalleteComponent } from './color-pallete/color-pallete.component';
import { SetCoordDirective } from './Directives/set-coord.directive';
import { DataAndFlagsService } from './Services/data-and-flags.service';
import { SelectedColorDirective } from './Directives/selected-color.directive';
import { MatSelectModule } from '@angular/material/select';
import { LabelComponent } from './label/label.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { UsualNoticeComponent } from './usual-notice/usual-notice.component';
import { ContainerNoticesComponent } from './container-notices/container-notices.component';
import { HorizontalScrollFieldDirective } from './Directives/horizontal-scroll-field.directive';
import { GeneralNoticesComponent } from './general-notices/general-notices.component';
import { RouterModule } from '@angular/router';
import { WrapperNoticesComponent } from './wrapper-notices/wrapper-notices.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './Services/http.service';
import { NoticeEditorComponent } from './notice-editor/notice-editor.component';
import { NoticeEditorContainerComponent } from './notice-editor-container/notice-editor-container.component';
import { NoticeContainerWrapperComponent } from './notice-container-wrapper/notice-container-wrapper.component';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    RouterModule.forChild([]),
    HttpClientModule
  ],
  declarations: [
    NoticeCreatorComponent,
    ColorPalleteComponent,
    SetCoordDirective,
    SelectedColorDirective,
    LabelComponent,
    LabelComponent,
    UsualNoticeComponent,
    ContainerNoticesComponent,
    HorizontalScrollFieldDirective,
    GeneralNoticesComponent,
    WrapperNoticesComponent,
    NoticeEditorComponent,
    NoticeEditorContainerComponent,
    NoticeContainerWrapperComponent,
    FormatDatePipe
  ],
  exports: [
    NoticeCreatorComponent,
    ColorPalleteComponent,
    SetCoordDirective,
    LabelComponent,
    UsualNoticeComponent,
    ContainerNoticesComponent,
    GeneralNoticesComponent,
    NoticeEditorComponent,
    NoticeEditorContainerComponent,
    NoticeContainerWrapperComponent
  ],
  providers: [
    DataAndFlagsService, HttpService
  ]
})
export class NoticeModule {}
