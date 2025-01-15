import { Unbounded } from "next/font/google"
import {useTranslations} from "next-intl";

const manrope = Unbounded({
  weight: '400',
  subsets: [ 'latin' ],
  variable: '--font-manrope',
})

const stats = [
  {
    id: 1,
    value: "253",
    label: "complete-project",
  },
  {
    id: 2,
    value: "324",
    label: "current-model",
  },
  {
    id: 3,
    value: "12+",
    label: "awards-won",
  },
  {
    id: 4,
    value: "63",
    label: "equipment-kits",
  },
];

export default function Stats() {
  const t = useTranslations('MainPage.stats');
  return (
    <section className="py-12 sm:py-20 lg:py-32 bg-gray-50 border-t border-gray-100" style={manrope.style}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto bg-white border-t border-gray-100 rounded-lg shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-6 sm:p-12 lg:p-24">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`text-center ${
                  index < stats.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0"
                    : index === 1
                    ? "border-b sm:border-b-0 pb-4 sm:pb-0"
                    : ""
                }`}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-2 sm:mb-3">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">{t(`${stat.label}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
