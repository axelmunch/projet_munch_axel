import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { Client } from "./models/client";
import { environment } from "../environments/environment";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public loginClient(login: string, password: string): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    };
    data = "login=" + login + "&password=" + password;
    return this.http.post<Client>(
      environment.backendLoginClient,
      data,
      httpOptions
    );
  }

  public createClient(
    nom: string,
    prenom: string,
    email: string,
    telephone: string,
    login: string,
    password: string
  ): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    };
    data =
      "nom=" +
      nom +
      "&prenom=" +
      prenom +
      "&email=" +
      email +
      "&telephone=" +
      telephone +
      "&login=" +
      login +
      "&password=" +
      password;
    return this.http.post<Client>(
      environment.backendCreateClient,
      data,
      httpOptions
    );
  }
}
