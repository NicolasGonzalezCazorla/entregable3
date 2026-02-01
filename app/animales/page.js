"use client";

import Animales from "./animales";
import Footer from "../Footer";
import Header from "../Header";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F6F7F3]">
      <Header />
      <div className="pt-24">
        <Animales />
        <Footer />
      </div>
    </div>
  );
}
