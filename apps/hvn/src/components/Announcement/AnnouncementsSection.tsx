'use client'

import { FC } from 'react'

import { Link } from '@fc/intl/navigation'
import { Button } from '@fc/ui/base/button'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Announcement, Media } from '@/payload-types'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

type AnnouncementsProps = {
  announcements: Announcement[]
}
export const AnnouncementsSection: FC<AnnouncementsProps> = ({ announcements }) => {
  const t = useTranslations('')

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
        {announcements.map((announcement) => (
          <SwiperSlide key={announcement.id}>
            <div className="rounded-lg bg-white p-4 text-center shadow-md">
              <Image
                alt="announcement"
                className="mb-4 w-full rounded-md object-contain"
                height={300}
                src={(announcement.image as Media).url as string}
                unoptimized
                width={500}
              />
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-2 text-xl font-semibold">{announcement.title}</h3>
                  <p>{announcement.description}</p>
                </div>

                <Link href={`/announcements/${announcement.slug}`}>
                  <Button className="cursor-pointer rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600 sm:px-8 sm:py-4 sm:text-lg">
                    {t('readMore')}
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
