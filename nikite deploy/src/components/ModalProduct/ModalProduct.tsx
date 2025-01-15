'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Image from "next/image"
import {useTranslations} from "next-intl";

interface Product {
    id: number
    name: string
    description: string
    weight: string
    price: string
    times: string
    year: number
    image: string
}

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    product: Product
}

export function Modal({ isOpen, onClose, product }: ModalProps) {
    const t  = useTranslations('MainPage.modal')
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick)
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div ref={modalRef} className="bg-white rounded-lg p-6 max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <Image src={product.image} alt={product.name} className="w-full h-48 rounded-lg object-cover mb-4" width={300} height={300} />
                <p className="text-gray-600 mb-4">{t(`title.${product.name}`)}</p>
                <div className="mb-6">
                    <table className="w-full">
                        <tbody>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">{t('mass')}</td>
                            <td className="py-2 text-right">{product.weight}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">{t('time')}</td>
                            <td className="py-2 text-right">{product.times}</td>
                        </tr>
                        <tr>
                            <td className="py-2 font-semibold">{t('year')}</td>
                            <td className="py-2 text-right">{product.year}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-center mb-6">
                    <span className="text-2xl font-bold text-[#FCA311]">{product.price}</span>
                </div>
                <div className="flex justify-center">
                    <a
                        href="https://wa.me/+994518999521"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FCA311] hover:bg-[#FCA311]/90 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        {t('contact')}
                    </a>
                </div>
            </div>
        </div>
    )
}

