"use client";

import Card from "./card";

export default function Grid({ animales }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">
      {animales.map((animal) => (
        <Card key={animal.id} animal={animal} />
      ))}
    </div>
  );
}
