import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://run.mocky.io';

interface PersonDTO {
  firstName: string;
  lastName: string;
  city: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTableData(): Observable<PersonDTO[]> {
    return this.http.get<PersonDTO[]>(
      `${BASE_URL}/v3/30d4f36e-ee0d-4eba-8a47-e9562947c7b8`
    );
  }
}
