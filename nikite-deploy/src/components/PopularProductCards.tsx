'use client'

import { forwardRef, useState } from 'react'
import Image from "next/image"
import { Unbounded } from 'next/font/google'
import { Modal } from './ModalProduct/ModalProduct'
import {useTranslations} from "next-intl";

const manrope = Unbounded({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-manrope',
})

interface Product {
    id: number
    name: string
    year: number
    price: string
    times: string
    weight: string
    description: string
    image: string
}

const PopularProductCards = forwardRef<HTMLElement>((props, ref) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const t = useTranslations("MainPage");

    const products: Product[] = [
        {
            id: 1,
            name: "Hyundai 220 LC-95",
            description: "Orta və böyük tikinti işləri üçün güclü ekskavator-çəkici",
            weight: "22 ton",
            price: "120.000 AZN",
            times: "956",
            year: 2021,
            image: "/tractor1.jpg",
        },
        {
            id: 2,
            name: "Komatsu PC 290 LC",
            description: "Şəhər tikintisi və işləri üçün universal ekskavator",
            weight: "29 ton",
            price: "150.000 AZN",
            times: "876",
            year: 2022,
            image: "/tractor2.jpg",
        },
        {
            id: 3,
            name: "Caterpillar 336",
            description: "Məhdud məkanda işləmək üçün kompakt ekskavator",
            weight: "33 ton",
            price: "210.000 AZN",
            times: "956",
            year: 2022,
            image: "/tractor3.jpg",
        },
        {
            id: 4,
            name: "DONGFENG",
            description: "Böyük miqyaslı layihələr üçün peşəkar ekskavator",
            weight: "6 ton",
            price: "Naməlum",
            times: "0 (Yeni)",
            year: 2024,
            image: "/tractor4.jpg",
        },
        {
            id: 5,
            name: "Hyundai 220 LC-95",
            description: "Kiçik və orta tikinti işləri üçün güclü ekskavator-çəkici",
            weight: "22 ton",
            price: "110.000 AZN",
            times: "921",
            year: 2021,
            image: "/tractor5.jpg",
        }
    ]

    const handleOrderClick = (product: Product) => {
        setSelectedProduct(product)
    }

    const handleCloseModal = () => {
        setSelectedProduct(null)
    }

    return (
        <section ref={ref} className="py-8 sm:py-12 lg:py-16 bg-white" id="equipment" style={manrope.style}>
            <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8 lg:mb-10">
                    {t("find-the-right-equipment")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4">
                    {products.slice(0, 3).map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="p-3 sm:p-4">
                                <h3 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">
                                    {product.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                                    {t(`modal.title.${product.name}`)}
                                </p>
                                <div className="flex justify-between">
                                    <button
                                        onClick={() => handleOrderClick(product)}
                                        className="w-full bg-white hover:bg-[#FCA311] border border-[#E5E7EB] hover:border-[#FCA311] text-[#2A2C2B] hover:text-white px-4 sm:px-6 py-3 rounded-lg text-base font-medium transition-all">
                                        {t("order")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {products.slice(3, 5).map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative h-40 sm:h-48 rounded-lg overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="p-3 sm:p-4">
                                <h3 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">
                                    {product.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                                    {t(`modal.title.${product.name}`)}
                                </p>
                                <div className="flex justify-between">
                                    <button
                                        onClick={() => handleOrderClick(product)}
                                        className="w-full bg-white hover:bg-[#FCA311] border border-[#E5E7EB] hover:border-[#FCA311] text-[#2A2C2B] hover:text-white px-4 sm:px-6 py-3 rounded-lg text-base font-medium transition-all">
                                        {t("order")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProduct && (
                <Modal
                    isOpen={!!selectedProduct}
                    onClose={handleCloseModal}
                    product={selectedProduct}
                />
            )}
        </section>
    )
})

PopularProductCards.displayName = 'PopularProductCards'
export default PopularProductCards

