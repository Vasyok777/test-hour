import React, { useEffect, useRef, useState } from 'react'

const Scrollable = ({ children, _class }) => {
	const [state, setState] = useState({
		isScrolling: false,
		clientX: 0,
		scrollX: 0,
	})
	const ref = useRef(null)
	useEffect(() => {
		const el = ref.current
		if (el) {
			const onWheel = e => {
				e.preventDefault()
				el.scrollTo({
					left: el.scrollLeft + e.deltaY * 4,
					behavior: 'smooth',
				})
			}
			el.addEventListener('wheel', onWheel)
			return () => el.removeEventListener('wheel', onWheel)
		}
	}, [])

	const onMouseMove = e => {
		if (ref && ref.current && !ref.current.contains(e.target)) {
			return
		}
		e.preventDefault()
		const { clientX, scrollX, isScrolling } = state
		if (isScrolling) {
			ref.current.scrollLeft = scrollX + e.clientX - clientX
			let sX = scrollX + e.clientX - clientX
			let cX = e.clientX
			setState({
				...state,
				scrollX: sX,
				clientX: cX,
			})
		}
	}
	const onMouseUp = e => {
		if (ref && ref.current && !ref.current.contains(e.target)) {
			return
		}
		e.preventDefault()
		setState({
			...state,
			isScrolling: false,
		})
	}
	const onMouseDown = e => {
		if (ref && ref.current && !ref.current.contains(e.target)) {
			return
		}
		e.preventDefault()
		setState({
			...state,
			isScrolling: true,
			clientX: e.clientX,
		})
	}

	useEffect(() => {
		document.addEventListener('mousedown', onMouseDown)
		document.addEventListener('mouseup', onMouseUp)
		document.addEventListener('mousemove', onMouseMove)

		return () => {
			document.removeEventListener('mousedown', onMouseDown)
			document.removeEventListener('mouseup', onMouseUp)
			document.removeEventListener('mousemove', onMouseMove)
		}
	}, [onMouseDown, onMouseUp, onMouseMove])

	return (
		<div
			className={_class}
			ref={ref}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			onMouseMove={onMouseMove}
		>
			{children}
		</div>
	)
}
export default Scrollable
