import { Injectable    } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public isLoggedIn(): boolean {
        let user = this.get();
        if (!user) {
            return false;
        }
        
        return user.token.token.length > 0;
    }

    public logout(): void {
        localStorage.removeItem('user');
    }

    public store(user: any) {
        if (user === undefined) {
            return;
        }
        localStorage.setItem('user', JSON.stringify(user));
    }

    public get() {
        let json = localStorage.getItem('user');
        if (json === null) {
            return false;
        }
        let user = JSON.parse(json);
        return user;
    }

    public getToken(): string {
        return this.get().token.token;
    }
}
