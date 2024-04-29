import { NgModule } from '@angular/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

const NZ_MODULES: Array<any> = [
  NzTabsModule,
  NzDescriptionsModule,
  NzIconModule,
  NzGridModule,
  NzTagModule,
  NzFormModule,
  NzTypographyModule,
  NzButtonModule,
  NzDropDownModule,
  NzInputModule,
  NzInputNumberModule,
  NzRadioModule,
  NzSelectModule,
  NzSwitchModule,
  NzCheckboxModule,
  NzDividerModule,
  NzTagModule,
  NzToolTipModule,
  NzPopconfirmModule,
  NzPopoverModule,
  NzSkeletonModule,
  NzSpinModule,
  NzModalModule,
  NzCardModule,
  NzEmptyModule,
  NzMessageModule,
  NzBreadCrumbModule,
  NzPaginationModule,
  NzTableModule,
  NzFlexModule,
];
@NgModule({
  declarations: [],
  imports: [...NZ_MODULES],
  exports: [...NZ_MODULES],
})
export class SharedModule {}
