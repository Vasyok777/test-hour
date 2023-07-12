import React, { useEffect, useRef, useState } from 'react'
import './HorizontalNavBar.css'

const sectionsData = [
	{ name: 'Сніданки' },
	{ name: 'Сніданки 2' },
	{ name: 'Сні' },
	{ name: 'Сніда' },
	{ name: 'Hello The best Friend' },
]

const HorizontalNavBar = () => {
	const [selectedSection, setSelectedSection] = useState(sectionsData[0])
	const highlightLineRef = useRef(null)

	const handleSectionClick = section => {
		setSelectedSection(section)
	}

	useEffect(() => {
		const highlightLine = highlightLineRef.current
		console.log(highlightLine)
		if (highlightLine) {
			const { offsetLeft, offsetWidth } = selectedSection.ref
			highlightLine.style.transform = `translateX(${offsetLeft}px)`
			highlightLine.style.width = `${offsetWidth}px`
		}
	}, [selectedSection])

	return (
		<div className='horizontal-navbar-container'>
			<div className='horizontal-navbar'>
				{sectionsData.map((section, index) => (
					<div
						key={index}
						className={`section ${selectedSection === section ? 'active' : ''}`}
						onClick={() => handleSectionClick(section)}
						ref={ref => (section.ref = ref)}
					>
						{section.name}
					</div>
				))}
			</div>
			<div className='highlight-line' ref={highlightLineRef}></div>
		</div>
	)
}

export default HorizontalNavBar
