import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Tops",
      imageUrl:
        "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/63d7a0d47ce24900146c0d88/800x.webp?source_format=jpg",
    },
    {
      id: 2,
      title: "Buttoms",
      imageUrl:
        "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/62d432af4609a20017a51a44/800x.webp?source_format=jpg",
    },
    {
      id: 3,
      title: "SUITS",
      imageUrl:
        "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/62502ff02e6026002d79e5f2/800x.webp?source_format=png",
    },
    {
      id: 4,
      title: "Outer",
      imageUrl:
        "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/6326f0671421bd002278d774/800x.webp?source_format=jpg",
    },
    {
      id: 5,
      title: "ACCESSORIES",
      imageUrl:
        "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/6182ad446ae532002902159d/800x.webp?source_format=jpg",
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
