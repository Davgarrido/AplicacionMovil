import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private usuario: string | null = null;
  
  getUsername(): string | null {
    return this.usuario;
  }

  setUsername(usuario: string) {
    this.usuario = usuario;
  }

  
}