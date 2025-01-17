import {
  BulkUrlMapping,
  StorableFile,
  StorableUrl,
  UrlDirectoryPaginated,
} from '../types'
import { DirectoryQueryConditions } from '../../modules/directory'

/**
 * A url repository that handles access to the data store of Urls.
 */
export interface UrlRepositoryInterface {
  findByShortUrlWithTotalClicks(shortUrl: string): Promise<StorableUrl | null>

  /**
   * Updates the input url with the input changes and file (if any) in the data store.
   * @param  {StorableUrl} url The url to modify.
   * @param  {object} changes The key value pairs contained in this object will overwrite those in the original url.
   * @param  {StorableFile} file? The file to change to (if any).
   * @returns Promise.
   */
  update(
    url: StorableUrl,
    changes: object,
    file?: StorableFile,
  ): Promise<StorableUrl>

  /**
   * Create a new Url in the data store.
   * @param  {{userId:number;shortUrl:string;longUrl?:string;tags?:string[]}} properties Properties of new Url.
   * @param  {StorableFile} file? File that this Url leads to, if any.
   * @returns Promise that resolves to the newly created url.
   */
  create(
    properties: {
      userId: number
      shortUrl: string
      longUrl?: string
      tags?: string[]
    },
    file?: StorableFile,
  ): Promise<StorableUrl>

  /**
   * Looks up the longUrl given a shortUrl from the cache, falling back
   * to the database. The cache is re-populated if the database lookup is
   * performed successfully.
   * @param {string} shortUrl The shortUrl.
   * @returns Promise that resolves to the longUrl.
   * @throws {NotFoundError}
   */
  getLongUrl: (shortUrl: string) => Promise<string>

  /**
   * Performs search for email and plain text search.
   * @param  {DirectoryQueryConditions} conditions The search query conditions.
   * @returns Promise of total no. Of search results and the results on the current page.
   */
  rawDirectorySearch: (
    conditions: DirectoryQueryConditions,
  ) => Promise<UrlDirectoryPaginated>

  bulkCreate(properties: {
    userId: number
    urlMappings: BulkUrlMapping[]
    tags?: string[]
  }): Promise<void>
}
