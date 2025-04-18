'use client'
import React from 'react'

import { Button } from '@fc/ui/base/button'

import { useTranslations } from 'next-intl'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const AnnouncementsSection = () => {
  const t = useTranslations('')
  const pathName = usePathname()
  const locale = pathName.split('/')[1]
  const slideAnnouncements = [
    {
      content: 'This is the content of announcement 1.',
      id: '1',
      image: '/images/announcement.jpg',
      slug: 'festival-2025-1',
      title: 'Announcement 1',
    },
  ]

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
      >
        {slideAnnouncements.map((announcement) => (
          <SwiperSlide key={announcement.id}>
            <div className="rounded-lg bg-white p-4 text-center shadow-md">
              <Image
                alt="announcement"
                className="mb-4 w-full rounded-md object-contain"
                height={300}
                src={announcement.image}
                unoptimized
                width={500}
              />
              <div className="items-space-between flex flex-row justify-center gap-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{announcement.title}</h3>
                  <p>{announcement.content}</p>
                </div>
                <div>
                  <Link href={`/${locale}/${announcement.slug}`}>
                    <Button className="cursor-pointer rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600 sm:px-8 sm:py-4 sm:text-lg">
                      {t('readMore')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
