import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "2lh70sn3",
  dataset: "production",
  apiVersion: "2022-11-12",
  useCdn: true,
  token:
    "skoLaZDwwJ1et4vvd1OR1OlK5EJbGs4qPOpospjQaHW3ZycVe6OkYmGdLWM96Gq6oulxs2oOYMaZALOm4w5eurLnC7q0kyexZqmCTHqHnvQMzyFdEvyAfgaNXBbx1roRwnMXGOtdouEL02NTsgIKCEqvURW7ry6mbWQ2lYCgIiBEhfKw9hvq",
});

const imageUrl = imageUrlBuilder(client);

export const urlFor = (source) => imageUrl.image(source);
