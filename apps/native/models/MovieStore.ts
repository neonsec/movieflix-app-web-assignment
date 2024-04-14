import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { api, movieApi } from "@repo/api"
import { Movie, MovieModel } from "./Movie"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const MovieStoreModel = types
  .model("MovieStore")
  .props({
    movies: types.array(MovieModel),
    favorites: types.array(types.reference(MovieModel)),
    favoritesOnly: false,
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    async getMovies(params: any) {
        const response = await movieApi.getMovies(params?.q)
        // const response = { kind: "ok", episodes: []}
        if (response.kind === "ok") {
            console.log("respnse", response)
          store.setProp("movies", response?.movies)
        } else {
          console.error(`Error fetching movies: ${JSON.stringify(response)}`)
        }
      },
    addFavorite(movie: Movie) {
      store.favorites.push(movie)
    },
    removeFavorite(movie: Movie) {
      store.favorites.remove(movie)
    },
  }))
  .views((store) => ({
    get moviesForList() {
      return store.favoritesOnly ? store.favorites : store.movies
    },

    hasFavorite(movie: Movie) {
      return store.favorites.includes(movie)
    },
  }))
  .actions((store) => ({
    toggleFavorite(movie: Movie) {
      if (store.hasFavorite(movie)) {
        store.removeFavorite(movie)
      } else {
        store.addFavorite(movie)
      }
    },
  }))

export interface MovieStore extends Instance<typeof MovieStoreModel> {}
export interface MovieStoreSnapshot extends SnapshotOut<typeof MovieStoreModel> {}
