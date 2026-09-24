export type MenuItem = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  id: string;
};

export type CartItem = {
  item: MenuItem;
  count: number;
};
