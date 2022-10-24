import logo from './logo.svg';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SignUp from './Components/SignUp.js';
import styled from "styled-components";


const AppContainer = styled.div
`	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function App() {
  return (
	<AppContainer>
		<SignUp />
	</AppContainer>
  );
}

export default App;
