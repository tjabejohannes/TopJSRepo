import React, { Component } from 'react';


import styled from 'styled-components';

const StyledTableHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin-bottom: 13px;
    min-height: 30px;
    font-weight:bold;
    border-bottom: 1.5px solid black;
    background-color: "#f1f1f1";
    text-shadow: 1px 1px lightgray;
`
class TableHeader extends Component {
    render() { 
        return ( 
            <StyledTableHeader>
                {this.props.children}
            </StyledTableHeader>
        );
    }
}

export default TableHeader;