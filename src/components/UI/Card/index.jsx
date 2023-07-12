import './Card.scss'

const Card = ({ img, desc }) => {
	return (
		<div className='card'>
			<div className='card__img'>
				<img src={require(`../../../assets/img/${img}.jpg`)} alt='Категорії' />
			</div>
			<h6>{desc}</h6>
		</div>
	)
}
export default Card
