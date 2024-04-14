/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */
export interface EpisodeItem {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: {
    link: string
    type: string
    length: number
    duration: number
    rating: { scheme: string; value: string }
  }
  categories: string[]
}


export interface MovieItem {
  "#TITLE": string
  "#YEAR": number
  "#IMDB_ID": string
  "#RANK": number
  "#ACTORS": string
  "#AKA": string
  "#IMDB_URL": string
  "#IMDB_IV": string
  "#IMG_POSTER": string
  "photo_width": number
  "photo_height": number
}

export interface MovieFeedResponse {
    ok: boolean
    description: MovieItem[]
    error_code: number
}

export interface ApiFeedResponse {
  status: string
  feed: {
    url: string
    title: string
    link: string
    author: string
    description: string
    image: string
  }
  items: EpisodeItem[]
}

/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}
