import { ImageCard } from './image-card';

export function MasonryGrid(){
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ImageCard 
        project={{
          title: "Walnut Island Kitchen",
          category: "Kitchen",
          image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=85",
          location: "Jaipur",
          size: "tall",
        }} 
      />
          <ImageCard 
            project={{
              title: "Stone TV Lounge",
              category: "Furniture",
              image: "/images/furniture/StoneTVLounge.jpg",
              location: "Mansarovar",
            }} 
            />
      <ImageCard 
        project={{
          title: "Muted Walk-In Wardrobe",
          category: "Wardrobes",
          image: "/images/wardrobes/Wardrobes.jpg",
          location: "C-Scheme",
          size: "tall",
        }} 
      />
      <ImageCard 
        project={{
          title: "Linear Parallel Kitchen",
          category: "Kitchen",
          image: "/images/kitchens/parallel.jpg",
          location: "Vaishali Nagar",
        }} 
      />
      <ImageCard 
        project={{
          title: "Soft Gold Storage Wall",
          category: "Wardrobes",
          image: "/images/wardrobes/SoftGoldStorageWall.jpg",
          location: "Jagatpura",
          size: "tall",
        }} 
      />
      <ImageCard 
        project={{
          title: "Executive Office Table",
          category: "Furniture",
          image: "/images/furniture/officetables.jpg",
          location: "Malviya Nagar",
        }} 
      />
    </div>
  );
}
