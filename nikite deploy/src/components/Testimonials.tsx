'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from "next/image"
import {useTranslations} from "next-intl";

const testimonials = [
  {
    id: 1,
    name: "Aleksandr",
    date: "14.02.2024",
    content: "Əla sayt, geniş çeşidli ixtisaslaşdırılmış avadanlıq! Hər şey incəliklərə qədər düşünülüb: rahat naviqasiya, modelin detallı təsvirləri və menecerlərdən sürətli geri əlaqə.",
    rating: 4,
  },
  {
    id: 2,
    name: "Vladislav",
    date: "1.01.2024",
    content: "Əla xidmət və sürətli çatdırılma! Avadanlıq tam olaraq təsvirə uyğundur. Əməkdaşlıqdan məmnun qaldıq, yenə sifariş verməyi planlaşdırırıq.",
    rating: 4,
  },
  {
    id: 3,
    name: "Aleksey",
    date: "21.05.2024",
    content: "Şirkətlə birinci dəfə işləyirik. Həmişə dəqiq, etibarlı və əlavə gecikmələr olmadan. Avadanlıq uzun müddət və effektiv işləyir.",
    rating: 4,
  },
]


function StarRating({ rating }: { rating: number }) {
  return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-5 h-5 ${
                    index < rating ? "text-[#FCA311] fill-[#FCA311]" : "text-gray-200"
                }`}
            />
        ))}
      </div>
  )
}

export default function Testimonials() {
  const t = useTranslations('MainPage');

  return (
      <section className="py-20 bg-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
          <span className="text-[#FCA311] font-medium mb-2 block">
            {t("reviews.say")}
          </span>
            <h2 className="text-3xl font-bold">
              {t("reviews.testimonials")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                        <Image
                            src="/placeholder.png"
                            alt=''
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.date}</p>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} />
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {t(`reviews.${testimonial.name}`)}
                    </p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

