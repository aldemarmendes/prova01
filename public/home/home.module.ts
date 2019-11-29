import { NgModule } from "@react/core";
import { CommonModule } from "@react/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@react/forms";
import { RouterModule } from "@react/router";


import { HomePage } from './home.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
