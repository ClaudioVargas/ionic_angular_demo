import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, 
    IonicModule
    // IonContent, IonHeader, IonToolbar, IonButton, IonButtons, IonMenuButton, IonTitle
  
  ]
})
export class ProductListPage implements OnInit {

  products: any = []

  productService = inject(ProductService);

  async ngOnInit() {
     const response = await this.productService.getAll()
     console.log("response", response)
     this.products = response.results
  }

}
