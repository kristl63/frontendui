import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: acLessonById(id: $id) {
      __typename
      lastchange
      id
      topic {
        id
        lastchange
        created
      }
    }
  }`

export const FetchPspByIdAsyncAction = CreateAsyncActionFromQuery(query)