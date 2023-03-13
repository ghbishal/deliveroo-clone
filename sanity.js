import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "css4lomt",
  dataset: "production",
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: "2022-01-12", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getPosts() {
//   const posts = await client.fetch('*[_type == "post"]');
//   return posts;
// }

// export async function createPost(post: Post) {
//   const result = client.create(post);
//   return result;
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({title});
//   return result;
// }
