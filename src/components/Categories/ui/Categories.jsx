import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { categoriesData } from '../../Scrolling'
import Card from '../../UI/Card'
import './Categories.scss'

export const Categories = () => {
	return (
		<div className='container'>
			<Swiper
				spaceBetween={50}
				slidesPerView={5}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{categoriesData.map(item => (
					<SwiperSlide key={item.id}>
						<Card {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
