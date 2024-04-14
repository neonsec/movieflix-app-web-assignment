/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://docs.infinite.red/ignite-cli/boilerplate/app/services/Services.md)
 * documentation for more details.
 */
import { ApiResponse, ApisauceInstance, create } from "apisauce"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem"
import type { ApiConfig, MovieFeedResponse } from "./api.types"


/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_MOVIE_CONFIG: ApiConfig = {
  url: 'https://search.imdbot.workers.dev',
  timeout: 10000,
}



/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class MovieApi {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_MOVIE_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  

  /**
   * Gets a list of recent React Native Radio episodes.
   */
  async getMovies(q: string): Promise<{ kind: "ok"; movies: any[] } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<MovieFeedResponse> = await this.apisauce.get(
      `?q=${q}`,
    )

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data
      console.log("raw", rawData)
      // This is where we transform the data into the shape we expect for our MST model.
      const movies: any[] =
        rawData?.description.map((raw) => ({
          guid: (raw?.["#IMDB_ID"]),
          title: raw?.['#TITLE'],
          year: raw?.['#YEAR'], 
          imdbId: raw?.["#IMDB_ID"],
          rank: raw?.["#RANK"],
          actors: raw?.["#ACTORS"],
          aka: raw?.["#AKA"],
          imdbUrl: raw?.["#IMDB_URL"],
          imdbIv: raw?.["#IMDB_ID"],
          imgPoster: raw?.["#IMG_POSTER"],
        })) ?? []

      return { kind: "ok", movies }
    } catch (e) {
      if (__DEV__ && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
}
 

 


// Singleton instance of the API for convenience
export const movieApi = new MovieApi()
