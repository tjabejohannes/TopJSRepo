import React, { Component } from 'react';


import styled from 'styled-components';

const StyledTableRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    background-color: lightgrey;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin-bottom: 10px;
    min-height: 30px;
    align-items: center;
`

class TableRow extends Component {

    render() {
        return (
            <StyledTableRow>
                {this.props.children} 
            </StyledTableRow>
        );
    }
}

export default TableRow;