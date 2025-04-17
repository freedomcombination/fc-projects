'use client'
import React, { useRef } from 'react'

import { Button } from '@fc/ui/base/button'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

export const AnnouncementsSection = () => {
  const t = useTranslations('')
  const slideAnnouncements = [
    {
      content: 'This is the content of announcement 1.',
      id: '1',
      image: '/images/announcement.jpg',
      title: 'Announcement 1',
    },
  ]

  return (
    <div className="relative w-full max-w-4xl mx-auto">
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
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <Image
                alt="announcement"
                className="w-full object-contain rounded-md mb-4"
                height={300}
                src={announcement.image}
                unoptimized
                width={500}
              />
              <div className="flex flex-row items-space-between justify-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{announcement.title}</h3>
                  <p>{announcement.content}</p>
                </div>
                <div>
                  <Button className="rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600 sm:px-8 sm:py-4 sm:text-lg cursor-pointer">
                    {t('readMore')}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
