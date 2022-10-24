import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div
`	width: 280px;
	min-height: 500px;
	display: flex;
	flex-direction: column;
	border-radius: 19px;
	background-color: #fff;
	box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
	position: relative;
	overflow: hidden;
`;

const BackDrop = styled.div
`	width: 160%;
	height: 550px;
	position: absolute;
	display: flex;
	flex-direction: column;
	border-radius: 50%;
	background: rgb(232,229,28);
	background: linear-gradient(90deg, rgba(232,229,28,1) 0%, rgba(240,210,10,1) 35%, rgba(238,173,6,1) 100%);
`;

const TopContainer = styled.div
`	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 0 1.8em;
	padding-bottom: 5em;
`;

function SignUp(props) {
	return (
		<BoxContainer>
			<TopContainer>
				<BackDrop/>
			</TopContainer>
		</BoxContainer>
	);
}

export default SignUp;