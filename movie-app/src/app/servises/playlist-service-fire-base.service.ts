import { Injectable } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { addDoc, deleteDoc, doc, Firestore, getDoc, getDocs, onSnapshot, query, where } from "@angular/fire/firestore";
import { Movie } from "../models/movie.model";
import { collection } from "firebase/firestore";
import { from, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PlaylistFireBaseServise {

    uid: string =''

    constructor(
        private firestore: Firestore,
        private auth: Auth,
        
    ) { }

    getUid(uid:string) {
        this.uid = uid
        console.log(this.uid)
    }

    // Favorits

    async setMovieToFavorites(movie: Movie) {
        const user = this.auth.currentUser
        if (user) {
            const ref = collection(this.firestore, `users/${user.uid}/favorites`)
            const q = query(ref, where('movie.id', '==', movie.id))
            const querySnapshot = await getDocs(q)
            if (querySnapshot.empty) {
                await addDoc(ref, { movie })
            }
            
        }
    }

    async putMovieFromFavorites(movie: Movie) {
        const user = this.auth.currentUser
        if (user) {
            const ref = collection(this.firestore, `users/${user.uid}/favorites`)
            const q = query(ref, where('movie.id', '==', movie.id))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach(async (docSnap) => {
                const docRef = doc(this.firestore, `users/${user.uid}/favorites/${docSnap.id}`)
                await deleteDoc(docRef)
            })
        }
    }

    getFavoriteMovies(uid: string): Observable<Movie[]> {
        // const user = this.auth.currentUser
       const ref = collection(this.firestore, `users/${uid}/favorites`);
        return from(getDocs(ref).then(snapshot => {
            const movies: Movie[] = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                movies.push(data["movie"] as Movie)

            })
            return movies
        }))
    }

    // Wathlist

    async setMovieToWachlist(movie: Movie) {
        const user = this.auth.currentUser
        if (user) {
            const ref = collection(this.firestore, `users/${user.uid}/wachlist`)
            const q = query(ref, where('movie.id', '==', movie.id))
            const querySnapshot = await getDocs(q)
            if (querySnapshot.empty) {
                await addDoc(ref, { movie })
            }
            
        }
    }

    async putMovieFromWachlist(movie: Movie) {
        const user = this.auth.currentUser
        if (user) {
            const ref = collection(this.firestore, `users/${user.uid}/wachlist`)
            const q = query(ref, where('movie.id', '==', movie.id))
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach(async (docSnap) => {
                const docRef = doc(this.firestore, `users/${user.uid}/wachlist/${docSnap.id}`)
                await deleteDoc(docRef)
            })
        }
    }
   
    getWachlist(uid: string): Observable<Movie[]> {
        const ref = collection(this.firestore, `users/${uid}/wachlist`);
        return from(getDocs(ref).then(snapshot => {
            const movies: Movie[] = []
            snapshot.forEach(doc => {
                const data = doc.data()
                movies.push(data["movie"] as Movie)
            })
            return movies
        }))
    }
}