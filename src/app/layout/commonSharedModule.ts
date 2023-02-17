import { CommonModule } from '@angular/common'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AdminDashboardComponent } from '../dashboard/admin-dashboard/admin-dashboard.component'
import { DashboardFooterComponent } from '../Dialogs/dashboard-footer/dashboard-footer.component'
import { ViewFormDialogComponent } from '../Dialogs/view-form-dialog/view-form-dialog.component'
import { MaterialModule } from '../material.module'

@NgModule({
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [AdminDashboardComponent,DashboardFooterComponent,ViewFormDialogComponent],
  exports: [AdminDashboardComponent,DashboardFooterComponent,ViewFormDialogComponent],
  //entryComponents: [MatLoaderComponent]
})
export class CommonSharedModule {
  static forRoot(): ModuleWithProviders<CommonSharedModule> {
    return {
      ngModule: CommonSharedModule,
    }
  }
}
