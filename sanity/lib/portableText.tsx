import { urlFor } from "./image";

// lib/portableTextComponents.ts
export const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <img src={urlFor(value).width(800).url()} alt="Post Image" className="my-6 rounded" />
    ),
  },
};
