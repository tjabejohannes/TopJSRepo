import React, { Component } from 'react';

import Button from './Button.jsx'

import styled from 'styled-components';

const StyledPageSelector = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom:20px;
`

class PageSelector extends Component {
    render() {
        return (
            <StyledPageSelector>
                {[...Array(this.props.amountOfPages).keys()].map((items, idx) => {
                    return (
                        this.props.selectedPage === idx ?
                            <Button onClick={() => this.props.handleSiteChange(idx)} type="selected" key={idx}>
                                {idx + 1}
                            </Button> :
                            <Button onClick={() => this.props.handleSiteChange(idx)} key={idx}>
                                {idx + 1}
                            </Button>)
                })}
            </StyledPageSelector>);
    }
}

export default PageSelector;