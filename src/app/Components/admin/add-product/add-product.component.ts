import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product = {
    model_number: '',
    model_name: '',
    description: '',
    amount: 0
  };
  submitted = false;

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    const timestamp = new Date();
    const payload = {
      ...this.product,
      created_at: timestamp,
      updated_at: timestamp
    };

    this.http.post('http://your-api-url.com/products', payload).subscribe({
      next: () => {
        this.submitted = true;
        this.product = { model_number: '', model_name: '', description: '', amount: 0 };
      },
      error: (err) => console.error('Failed to add product:', err)
    });
    }
}
