import type { RequestHandler } from './__types/[...route]';

// You'd fetch the details for the blog from your db using the
// params.route from the spread route
const text = `Pellentesque volutpat hendrerit eros in eleifend. Proin ac suscipit ligula. Praesent lectus dui, tincidunt vel odio in, efficitur feugiat felis. Vestibulum vel commodo justo, sit amet feugiat lacus. Curabitur erat purus, blandit at dolor id, varius vulputate odio. Cras eget felis sodales, commodo magna eu, posuere tellus. Curabitur vestibulum pharetra massa a ultricies. Fusce convallis nibh ac ornare viverra. Phasellus erat felis, sollicitudin dapibus felis non, hendrerit porttitor purus. Nulla ullamcorper libero sit amet orci rutrum, tincidunt vehicula ante aliquet. Sed erat nulla, consectetur in dolor ac, lobortis fermentum leo. Donec non metus eu sapien suscipit lacinia at id lacus. Sed hendrerit eros ut tempus eleifend. Praesent porttitor velit ut ante posuere semper.`

export let get: RequestHandler = ({ params }) => {
  console.log(params.route);
  return {
    body: {
      text
    }
  }
}