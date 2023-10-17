import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html'
})
export class InfoComponent {
  infoMessage = toSignal(
    this.http.get<{status: string}>(`${environment.API_PREFIX}/info`).pipe(
      map(res => res.status)
    )
  )

  constructor(private http: HttpClient) {}
}
