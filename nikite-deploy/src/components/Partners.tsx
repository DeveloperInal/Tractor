import Image from "next/image";
import {useTranslations} from "next-intl";

export default function Partners() {
    const t = useTranslations("MainPage");

    return (
        <section className="py-8 sm:py-12 lg:py-16 bg-white border-t border-gray-100" id="partners">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8 lg:mb-10">
                    {t("trust-us")}
                </h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 items-center">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <Image
                                    src={`/images/partner${index + 1}.webp`}
                                    alt={`Партнер ${index + 1}`}
                                    width={120}
                                    height={40}
                                    className="transition-all w-full max-w-[120px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

