import React, { Component } from 'react';
import PagedTable from './PagedTable.jsx';

import styled from 'styled-components';

const StyledSiteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    header{
        height: 20%;
    }

    .pagedTableContainer{
        height:80%;
    }
`

class SiteContainer extends Component {
    
    render() { 
        return ( 
            <StyledSiteContainer>
                <header>
                    {/**
                    Text should not be hard coded. Resource.
                     */}
                    <h1>
                        Top Github JavaScript Repositories
                    </h1>
                </header>
                <div className="pagedTableContainer">
                    <PagedTable>

                    </PagedTable>
                </div>
            </StyledSiteContainer>
        );
    }
}

export default SiteContainer;