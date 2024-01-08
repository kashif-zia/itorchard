import React, { useState } from 'react'
import Review from './Review'
import ReviewFinish from './ReviewFinish'
const ReviewComponent = () => {
	const [isFinish, setIsFinish] = useState(false)
	const handleFormFinish = ()=>{
		setIsFinish(true)
	}
	return <>{!isFinish ? <Review handleFormFinish={handleFormFinish}/> : <ReviewFinish />}</>
}

export default ReviewComponent
