import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, EmailAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile, UserCredential } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { PlaylistFireBaseServise } from "./playlist-service-fire-base.service";


@Injectable({
    providedIn: 'root'
})
export class AuthFireBase {

    constructor(
        private auth: Auth,
        private router: Router,
        private dbPlaylistService: PlaylistFireBaseServise
    ) {}


    // Create and login methids whis EMAIL & PASSWORD

    async createNewUser(userName: string, email: string, password: string): Promise<UserCredential> {
        const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
        await updateProfile(userCredential.user, {
            displayName: userName
        });
        return userCredential;
    }

    async emailSignIn(email: string, password: string) {
        const userSignedIn = await signInWithEmailAndPassword(this.auth, email, password)
        return userSignedIn
    }

    // Google Login

    async googleSignIn(): Promise<string> {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const credentials = await signInWithPopup(this.auth, provider)
            this.dbPlaylistService.getUid(credentials.user.uid)
            return credentials.user.uid
        } catch (error) {
            const firebaseError = error as { code?: string; message?: string };
            console.error('Error: during Google sign-in:', error)

            return firebaseError.message || 'An unknown error occurred during Google sign-in';
        }
    }

   

    checkUser(): Promise<string | null> {
        return new Promise((resolve) => {
            onAuthStateChanged(this.auth, user => {
                if (user) {
                    resolve(user.uid)
                } else {
                    resolve('not login')
                }
            })
        })
    }

    async logout() {
        await signOut(this.auth)
        this.router.navigate(['/'])
    }
}