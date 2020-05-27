import React from 'react'
import '../../styles/loading.css';

const Loading = () => {
	return (
		<div className="loading-screen">
			<div className = "box">
				<div className="spinner" />
				<p> Loading... </p>
			</div>
		</div>
	)
}

export default Loading
