import { Categories } from './components/Categories/ui/Categories'
import { CategoriesScroll } from './components/CategoriesScroll'
import HorizontalNavBar from './components/Navbar/Navbar'
import Scrolling from './components/Scrolling'

function App() {
	return (
		<>
			Hello
			<HorizontalNavBar />
			<Categories />
			<CategoriesScroll />
			<Scrolling />
		</>
	)
}

export default App
