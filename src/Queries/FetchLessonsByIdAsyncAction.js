import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

// const query = `query ($id: UUID!) {
//   result: planById(id: $id){
//     __typename
//     id
//     name
//     lessons {
//       id
//       name
//       order
//       type { id name }
//       length
//       users {id fullname}
//       groups {id name}
//       facilities {id name}
//     }
//     semester { 
//       id 
//       order
//       subject { 
//         id 
//         name 
//       }
//     }
//   }
//   }`

const query = `query ($id: UUID!) {
  result: planById(id: $id) {
    __typename
    id
    semester {
      id
      order
      subject {
        id
        name
      }
    }
  }
}`
export const FetchPlanByIdAsyncAction = CreateAsyncActionFromQuery(query)