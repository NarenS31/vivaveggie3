'use client';

import React from "react";
import Header from "@/components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import TeamSection from "./components/TeamSection";
import MenuSection from "./components/MenuSection";
import OrderForm from "./components/OrderForm";
import TestimonialsSection from "./components/TestimonialsSection";
import VirtualTour from "./components/VirtualTour";
import OriginStory from "./components/OriginStory";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <TeamSection />
      <MenuSection />
      <OrderForm />
      <TestimonialsSection />
      <VirtualTour />
      <OriginStory />
      <Footer />
    </main>
  );
}
