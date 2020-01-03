import { gql } from "apollo-boost";

export const animeList = gql`
  query(
    $page: Int = 1
    $id: Int
    $type: MediaType
    $isAdult: Boolean = false
    $search: String
    $format: MediaFormat
    $status: MediaStatus
    $countryOfOrigin: CountryCode
    $source: MediaSource
    $season: MediaSeason
    $year: String
    $onList: Boolean
    $yearLesser: FuzzyDateInt
    $yearGreater: FuzzyDateInt
    $licensedBy: [String]
    $includedGenres: [String]
    $excludedGenres: [String]
    $includedTags: [String]
    $excludedTags: [String]
    $sort: [MediaSort]
  ) {
    Page(page: $page, perPage: 20) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      ANIME: media(
        id: $id
        type: $type
        season: $season
        format: $format
        status: $status
        countryOfOrigin: $countryOfOrigin
        source: $source
        search: $search
        onList: $onList
        startDate_like: $year
        startDate_lesser: $yearLesser
        startDate_greater: $yearGreater
        licensedBy_in: $licensedBy
        genre_in: $includedGenres
        genre_not_in: $excludedGenres
        tag_in: $includedTags
        tag_not_in: $excludedTags
        sort: $sort
        isAdult: $isAdult
      ) {
        id
        title {
          userPreferred
        }
        coverImage {
          large: extraLarge
          color
        }
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        bannerImage
        season
        description
        type
        format
        status
        genres
        isAdult
        averageScore
        popularity
        mediaListEntry {
          id
          status
        }
        nextAiringEpisode {
          airingAt
          timeUntilAiring
          episode
        }
        studios(isMain: true) {
          edges {
            isMain
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`;
