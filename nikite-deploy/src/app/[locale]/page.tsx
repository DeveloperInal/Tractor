'use client'
import HeroSection from "@/components/HeroSection";
import ProductCards from "@/components/ProductCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import {useRef} from "react";
import PopularProductCards from "@/components/PopularProductCards";

export default function Home() {
    const popularProductCardsRef = useRef<HTMLElement>(null);

    const handleShowMore = () => {
        if (popularProductCardsRef.current) {
            popularProductCardsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <HeroSection />
            <ProductCards onShowMore={handleShowMore} />
            <WhyChooseUs />
            <PopularProductCards ref={popularProductCardsRef} />
            <Stats />
            <Testimonials />
            <Partners />
            <Footer />
        </>
    );
}
