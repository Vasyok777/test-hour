import { useEffect, useState } from 'react'
import Scrollable from 'shared/helpers/Scrollable'
import Card from '../UI/Card'
import './Scrolling.scss'

export const categoriesData = [
	{
		id: 1,
		img: 'one',
		desc: 'Сніданки',
	},
	{
		id: 2,
		img: 'two',
		desc: 'Десерти',
	},
	{ id: 3, img: 'three', desc: 'Сендвічі' },
	{ id: 4, img: 'four', desc: 'Морозиво' },
	{ id: 5, img: 'five', desc: 'Сніданки' },
	{ id: 6, img: 'one', desc: 'Сніданки' },
	{ id: 7, img: 'two', desc: 'Десерти' },
	{ id: 8, img: 'three', desc: 'Сендвічі' },
	{ id: 9, img: 'four', desc: 'Морозиво' },
	{ id: 10, img: 'five', desc: 'Сніданки' },
]

const Scrolling = () => {
	const [scrolling, setScrolling] = useState(false)
	const [isAtEnd, setIsAtEnd] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolling(true)
			} else {
				setScrolling(false)
			}

			const container = document.querySelector('.items')
			if (container) {
				setIsAtEnd(
					container.scrollWidth - container.scrollLeft === container.clientWidth
				)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className={`categories-container${scrolling ? ' scrolling' : ''}`}>
			<div className='categories-wrapper'>
				<Scrollable _class='items'>
					<div
						className='padding-left'
						style={{ paddingLeft: isAtEnd ? '100px' : '0' }}
					/>
					{categoriesData.map(item => (
						<div className='category-item' key={item.id}>
							<Card {...item} />
						</div>
					))}
					<div className='padding-right' style={{ paddingRight: '100px' }} />
				</Scrollable>
			</div>
		</div>
	)
}

export default Scrolling
