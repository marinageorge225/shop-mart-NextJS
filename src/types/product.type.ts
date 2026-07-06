interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface ProductInterface {
  _id: string;
  id: string;

  title: string;
  description: string;
  slug: string;

  price: number;
  quantity: number;
  sold: number;

  ratingsAverage: number;
  ratingsQuantity: number;

  imageCover: string;
  images: string[];

  brand: Brand;
  category: Category;
  subcategory: Subcategory[];

  createdAt: string;
  updatedAt: string;
}
