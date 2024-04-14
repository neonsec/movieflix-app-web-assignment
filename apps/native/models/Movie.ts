import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { translate } from "../i18n"




/**
 * This represents an episode of React Native Radio.
 */
export const MovieModel = types
  .model("Movie")
  .props({
    
    guid:types.identifier,
    title: "",
    year: types.number, 
    imdbId: "",
    rank: types.number,
    actors: "",
    aka: "",
    imdbUrl: "",
    imdbIv: "",
    imgPoster: ""
  })
  .actions(withSetPropAction)
  .views((movie) => ({
    get movieDatas(){
        return movie
    },
  }))

export interface Movie extends Instance<typeof MovieModel> {}
export interface MovieSnapshotOut extends SnapshotOut<typeof MovieModel> {}
export interface MovieSnapshotIn extends SnapshotIn<typeof MovieModel> {}
