import React, { useState } from 'react';
import useWithFirstMountEffect from "./use-with-first-mount-effect";

const RootComponent = (props) => {

	const [triggerUseEffect, setTriggerUseEffect] = useState(0);
	const [state, setState] = useState({
		text: 'none',
		value: 0,
	});


	useWithFirstMountEffect(

	
		() => {
			setState({
				text: 'mountFunction',
				value: 50,
			})
		},
	

	
		() => {
			setState(state => ({
				text: 'afterMountFunction',
				value: state.value + 1,
			}))
		},
	

		[triggerUseEffect],	
	);


	return(
		<div>
			<div>{state.text}</div>
			<div>{state.value}</div>
			<button
				onClick={() => {setTriggerUseEffect(triggerUseEffect => triggerUseEffect + 1)}}
			>
				Trigger useWithFirstMountEffect
			</button>
		</div>
	);

};

export default RootComponent;