export const Qtestimonials = `*[ _type == "testimonial"]`;

export const Qfaqs = `*[ _type == "faqs"]`;

export const Qcategories = `*[ _type == "categories"]`;

export const Qproducts = `*[ _type == "products"]{
     title,
     secound_title,
     _createdAt,
     image,
     gallery,
     excerpt,
     content,
     categories->{
          name,
          slug
     }
}`;

export const QSingleCategory = ` *[ _type == "categories" && slug.current == $catSlug ][0]`;

export const QSingleProducts = ` *[ _type == "products" && slug.current == $productSlug ][0]`;
