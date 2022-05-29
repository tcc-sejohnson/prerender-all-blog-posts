import type { RequestHandler } from './__types';

// This is just simulating your DB -- this JSON array is what you'd fetch
const postRoutes = [
  "2022-01-01/my-article/sub-article",
  "2022-01-02/my-other-article",
  "2022-01-03/turtles-seen",
  "2022-01-04/potato",
  "2022-01-05/complex/route/for/some/reason",
  "2022-01-06/my-article/blah",
  "2022-01-07/insane",
  "2022-01-08/how-to-prerender-a-blog",
]

export const get: RequestHandler = () => {
  return {
    body: {
      postRoutes: postRoutes
    }
  }
}
