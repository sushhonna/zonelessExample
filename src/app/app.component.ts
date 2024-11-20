import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private cdr : ChangeDetectorRef){}
  title = 'change-detection-cycle';
  http = inject(HttpClient);
  name = 'user name';
  users : any[] = [];

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.users = res;
      this.name = 'changed name';
      this.cdr.detectChanges();
    })
  }
}
