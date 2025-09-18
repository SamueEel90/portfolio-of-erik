'use client';
import React from "react";
import Image from "next/image";

// Example type for a photo
interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
}

// Example data - you can replace this with dynamic data
const photos: Photo[] = [
  {
    id: 1,
    src: "/pictures/placeholder1.jpg",
    title: "Photo 1",
    description: "Description for photo 1",
  },
  {
    id: 2,
    src: "/pictures/placeholder2.jpg",
    title: "Photo 2",
    description: "Description for photo 2",
  },
  {
    id: 3,
    src: "/pictures/placeholder3.jpg",
    title: "Photo 3",
    description: "Description for photo 3",
  },
  {
    id: 4,
    src: "/pictures/placeholder4.jpg",
    title: "Photo 4",
    description: "Description for photo 4",
  },
  {
    id: 5,
    src: "/pictures/placeholder5.jpg",
    title: "Photo 5",
    description: "Description for photo 5",
  },
  {
    id: 6,
    src: "/pictures/placeholder6.jpg",
    title: "Photo 6",
    description: "Description for photo 6",
  },  
  {
    id: 7,
    src: "/pictures/placeholder7.jpg",
    title: "Photo 7",
    description: "Description for photo 7",
  },
  {
    id: 8,
    src: "/pictures/placeholder8.jpg",
    title: "Photo 8",
    description: "Description for photo 8",
  },
    {
    id: 9,
    src: "/pictures/placeholder1.jpg",
    title: "Photo 1",
    description: "Description for photo 1",
  },
  {
    id: 10,
    src: "/pictures/placeholder2.jpg",
    title: "Photo 2",
    description: "Description for photo 2",
  },
  {
    id: 11,
    src: "/pictures/placeholder3.jpg",
    title: "Photo 3",
    description: "Description for photo 3",
  },
  {
    id: 12,
    src: "/pictures/placeholder4.jpg",
    title: "Photo 4",
    description: "Description for photo 4",
  },
  {
    id: 13,
    src: "/pictures/placeholder5.jpg",
    title: "Photo 5",
    description: "Description for photo 5",
  },
  {
    id: 14,
    src: "/pictures/placeholder6.jpg",
    title: "Photo 6",
    description: "Description for photo 6",
  },  
  {
    id: 15,
    src: "/pictures/placeholder7.jpg",
    title: "Photo 7",
    description: "Description for photo 7",
  },
  {
    id: 16,
    src: "/pictures/placeholder8.jpg",
    title: "Photo 8",
    description: "Description for photo 8",
  }
];

const CategoryPage: React.FC = () => {
  return (
    <div className="md:max-w-10/12 mx-auto p-6">
    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="rounded-lg shadow-md overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.title}
              width={400}
              height={300}
              className="w-full h-100 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{photo.title}</h2>
              <p className="text-gray-600 text-sm">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
