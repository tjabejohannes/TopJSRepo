import React, { Component } from 'react';

import styled from 'styled-components';

const StyledPageSelector = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom:20px;

    .siteNumber{
        margin: 10px;
    }

    .selectedSiteNumber{
        margin: 10px;
        font-weight: bold;
    }
`

class PageSelector extends Component {
    render() {
        return (
            <StyledPageSelector>
                {[...Array(this.props.amountOfPages).keys()].map((items, i) => {
                    return (
                        this.props.selectedPage === i ?
                            <div className="selectedSiteNumber" key={i}>
                                {i + 1}
                            </div> :
                            <div className="siteNumber" key={i} onClick={() => this.props.handleSiteChange(i)}>
                                {i + 1}
                            </div>)
                })}
            </StyledPageSelector>);
    }
}

export default PageSelector;