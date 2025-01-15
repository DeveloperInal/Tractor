'use client'

import { Unbounded } from 'next/font/google'
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {useTranslations} from "next-intl";

const manrope = Unbounded({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-manrope',
})

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const t = useTranslations("MainPage");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const progress = (scrollPosition / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
      <section
          id="hero"
          className="relative min-h-[120vh] pt-64 bg-[#2A2C2B] overflow-hidden"
      >
        <div
            className="absolute top-0 right-0 w-1/2 h-full bg-white transform skew-x-12 translate-x-1/3 hidden lg:block"
        />
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 h-full">
          <div className="relative h-full flex flex-col lg:flex-row items-center py-20 lg:py-0">
            <div className="w-full lg:max-w-xl z-10 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#FCA311] mb-4">
                <span className="text-sm sm:text-base" style={manrope.style}>{t("hero.subtitle")}</span>
                <Image
                    src="/arrow-right.svg"
                    alt="Tractor"
                    width={128}
                    height={128}
                />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FCA311] mb-4 sm:mb-6"
                  style={manrope.style}>
                {t("hero.title")}
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 px-4 lg:px-0" style={manrope.style}>
                {t("hero.description")}
              </p>
              <Link href='https://wa.me/+994518999521'>
                <button
                    className="bg-[#FCA311] hover:bg-[#FCA311]/90 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl text-sm sm:text-base transition-colors"
                    style={manrope.style}>
                  {t("modal.contact")}
                </button>
              </Link>
            </div>

            {/* Правая часть с изображением */}
            <div
                className="relative w-full lg:absolute lg:right-[10px] lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-[800px] mt-8 lg:mt-0">
              <div className="relative w-[99%] h-[300px] sm:h-[400px] lg:h-[400px]">
                <Image
                    src="/hero-excavator.svg"
                    alt="Traktor"
                    width={1000}
                    height={1000}
                    className="object-contain left-16"
                    priority
                />
              </div>
              {/* Номера слайдов */}
              <div className="absolute -right-28 bottom-4 flex flex-col items-end">
                <span className="text-3xl font-bold -my-8 text-gray-500">01</span>
                <div className="relative w-1 h-80 my-8 mt-5">
                  <div className="absolute top-5 right-3 w-full h-full bg-gray-300" />
                  <div
                      className="absolute -left-3 -top-3 mt-8 w-full bg-[#FCA311] transition-all duration-200 ease-out"
                      style={{ height: `${scrollProgress}%` }}
                  />
                </div>
                <span className="text-3xl font-bold text-gray-500">05</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

