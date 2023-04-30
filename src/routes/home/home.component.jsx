import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Tops",
      imageUrl:
        "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/642ad43f24621f0011030d3e/800x.webp?source_format=jpg",
    },
    {
      id: 2,
      title: "Bottoms",
      imageUrl:
        "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/6273f15114c53f002aeee44c/800x.webp?source_format=png",
    },
    {
      id: 3,
      title: "Outers",
      imageUrl:
        "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/6326f0671421bd002278d774/800x.webp?source_format=jpg",
    },
    {
      id: 4,
      title: "Suits",
      imageUrl:
        "https://shoplineimg.com/5e8e921c65b7fe001a2e1c7f/62502ff02e6026002d79e5f2/800x.webp?source_format=png",
    },
    {
      id: 5,
      title: "Accesories",
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
