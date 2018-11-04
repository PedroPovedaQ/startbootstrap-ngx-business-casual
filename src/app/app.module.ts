import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { StoreComponent } from './pages/store/store.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		CardComponent,
		StoreComponent,
		ProductsComponent,
		AboutComponent,
		HomeComponent,
		NavbarComponent
	],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
