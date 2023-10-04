import { Injectable, inject } from '@angular/core';
import { Movie } from './movie';
import { FormsModule } from '@angular/forms';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, updateDoc, where } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private path = "movies"
  constructor (private db : Firestore) {
    db = inject(Firestore);
  }

  async getMovies() {
    const colRef = collection(this.db, this.path)
    const q = query(
      colRef,
      orderBy('name')
    )
    const docs = await getDocs(q);
    return docs.docs.map(
      (doc) => {
        return {
          id : doc.id,
          ...doc.data()
        } as Movie
      }
    )
  }

  async getMovieData(id: string) {
    const docRef = doc(this.db, this.path, id);
    const movieQuery = await getDoc(docRef);
    return {
      ...movieQuery.data(),
      id
    } as Movie

 
  }

  async addMovie(movie: Movie) {
    const { id, ...data } = movie;
    addDoc(collection(this.db, this.path), data)
  }
  
  async updateMovie(movie: Movie) {
    const { id, ...data } = movie
    updateDoc(doc(this.db, this.path, id), data);
  }
  
  async deleteMovie(id: string | undefined) {
    if(id != undefined) deleteDoc(doc(this.db, this.path, id))
  }
}
