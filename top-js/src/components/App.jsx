import React from 'react';
import logo from '../logo.svg';
import SiteContainer from './SiteContainer.jsx'

import styled from 'styled-components';

const StyledApp = styled.div`
    margin-top: 70px;
    text-align: center;
`

function App() {
  return (
    <StyledApp className="App">
      <SiteContainer>

      </SiteContainer>
    </StyledApp>
  );
}

export default App;
