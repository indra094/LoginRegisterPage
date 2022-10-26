import styled from "styled-components";
import React from "react";
import {BoxContainer,
	FormContainer,
	Input,
	MutedLink,
SubmitButton} from "./Common";


export function LoginForm(props) {
	return (
	<BoxContainer>
		<FormContainer>
			<Input type="email" placeholder="Email"/>
			<Input type="password" placeholder="Password"/>

			<MutedLink href = "#"> Forgot Password?</MutedLink>
			<SubmitButton type="submit">Sign In</SubmitButton>
		</FormContainer>
	</BoxContainer>
	);
}

