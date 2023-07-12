import Scrollable from 'shared/helpers/Scrollable'
import 'swiper/css'
import { categoriesData } from '../../Scrolling'
import Card from '../../UI/Card'
import './Categories.scss'

export const CategoriesScroll = () => {
	return (
		<div className='container'>
			<div className='scrollable__container'>
				<Scrollable _class='items'>
					{categoriesData.map(item => (
						<Card key={item.id} {...item} />
					))}
				</Scrollable>
			</div>
		</div>
	)
}
