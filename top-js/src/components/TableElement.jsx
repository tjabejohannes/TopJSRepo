import React, { Component } from 'react';


import styled from 'styled-components';

const StyledTableElement = styled.div`
    display: flex;
    justify-content: center;
    width:25%;
    padding: 10px;
`

class TableElement extends Component {
    render() {
        return (
            <StyledTableElement>
                {this.props.children}
            </StyledTableElement>
        );
    }
}

export default TableElement;