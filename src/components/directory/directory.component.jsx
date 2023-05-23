import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles.jsx";

const categories = [
  {
    id: 1,
    title: "Tops",
    imageUrl:
      "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/63d7a0d47ce24900146c0d88/800x.webp?source_format=jpg",
    route: "shop/tops",
  },
  {
    id: 2,
    title: "Buttoms",
    imageUrl:
      "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/62d432af4609a20017a51a44/800x.webp?source_format=jpg",
    route: "shop/bottoms",
  },
  {
    id: 3,
    title: "Suits",
    imageUrl:
      "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/62502ff02e6026002d79e5f2/800x.webp?source_format=png",
    route: "shop/suits",
  },
  {
    id: 4,
    title: "Outer",
    imageUrl:
      "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/6326f0671421bd002278d774/800x.webp?source_format=jpg",
    route: "shop/outers",
  },
  {
    id: 5,
    title: "Accessories",
    imageUrl:
      "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/6182ad446ae532002902159d/800x.webp?source_format=jpg",
    route: "shop/accessories",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
