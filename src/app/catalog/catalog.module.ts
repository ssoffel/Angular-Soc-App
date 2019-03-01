import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module'; 
import { RouterModule } from '@angular/router';

import { CatalogRepositoryService } from './catalog-repository.service';
import { CatalogComponent } from './catalog.component';



@NgModule({
    imports: [ RouterModule, SharedModule ], 
    exports: [], 
    declarations: [CatalogComponent],
    providers: [CatalogRepositoryService]
})

export class CatalogModule { };