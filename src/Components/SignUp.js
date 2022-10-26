import React from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";

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
	top: -290px;
	left: -70px;
	transform: rotate(60deg);
	background: rgb(232,229,28);
	background: linear-gradient(90deg, rgba(232,229,28,1) 0%, rgba(240,210,10,1) 35%, rgba(238,173,6,1) 100%);
`;

const HeaderContainer = styled.div
`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const HeaderText = styled.h2
`
	font-size: 30px;
	font-weight: 600;
	z-index: 10;
	margin: 0px;
	
	color: #000;
`;

const SmallText = styled.h5
`
	color: #000;
	font-weight: 500;
	font-size: 11px;
	z-index:10;
	line-height: 10;
	margin-top: 7px;
	margin:0;
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

const InnerContainer = styled.div
`
	width: 100%;
	display: flex;
	flex-direction: column;
	line-height:9;
	padding: 0 0;
`;

function SignUp(props) {
	return (
		<BoxContainer>
			<TopContainer>
				<BackDrop/>
			
				<HeaderContainer>
					<HeaderText> Welcome</HeaderText>
					<SmallText>Please Login or Signup to continue</SmallText>
				</HeaderContainer>
				</TopContainer>
				<InnerContainer>
					<LoginForm/>
				</InnerContainer>	
			
		</BoxContainer>
	);
}

export default SignUp;