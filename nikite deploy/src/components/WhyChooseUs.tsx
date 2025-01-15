import Image from "next/image";
import Link from "next/link";
import { Unbounded } from "next/font/google"
import {useTranslations} from "next-intl";

const manrope = Unbounded({
  weight: '400',
  subsets: [ 'latin' ],
  variable: '--font-manrope',
})

export default function WhyChooseUs() {
  const t = useTranslations("MainPage");

  return (
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50" id="advantages" style={manrope.style}>
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 lg:mb-10 text-center lg:text-left">
            {t("wcu.why-choose-us")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Галерея изображений */}
            <div className="lg:col-span-7 grid grid-cols-3 gap-2 sm:gap-4 h-[200px] sm:h-[300px] lg:h-auto">
              <div className="col-span-2">
                <div className="relative h-full">
                  <Image
                      src="/images/feature1.png"
                      alt={t("construction.site")}
                      fill
                      className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1 grid gap-2 sm:gap-4">
                <div className="relative h-full">
                  <Image
                      src="/images/feature2.png"
                      alt={t("construction.equipment")}
                      fill
                      className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative h-full">
                  <Image
                      src="/images/feature3.png"
                      alt={t("construction.works")}
                      fill
                      className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Текстовый контент */}
            <div className="lg:col-span-5">
              <div className="bg-white p-4 sm:p-6 rounded-lg h-full">
                <p className="text-base sm:text-lg font-medium text-orange-400 mb-3 sm:mb-4">
                  {t("wcu.subtitle")}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  {t("wcu.title")}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {t("wcu.desc")}
                </p>
                <Link href='https://mtraktor.ru/blog/traktor/sovremennye-traktory'>
                  <button className="text-orange-400 font-medium hover:text-orange-600 text-sm sm:text-base transition-colors">
                    {t("read-more")} →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
