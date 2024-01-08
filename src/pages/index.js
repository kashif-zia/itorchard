import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { LoadingScreen } from '../layouts/loader/LoadingScreen'

const index = () => {
	const router = useRouter()

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		router.push('/home')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			<LoadingScreen /> 
		</div>
	)
}

export default index
