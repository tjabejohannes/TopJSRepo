import React, { Component } from 'react';

import TableRow from './TableRow'
import TableElement from './TableElement'
import TableHeader from './TableHeader'

import numeral from 'numeral'

import styled from 'styled-components';

const StyledTableContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    padding: 2% 10%;

`

class Table extends Component {
    render() {
        return (
            <StyledTableContainer>
                <TableHeader>
                    <TableElement>Name</TableElement>
                    <TableElement>Stars</TableElement>
                    <TableElement>Open Issues</TableElement>
                    <TableElement>Forks</TableElement>
                </TableHeader>
                {this.props.elements.map((element, i) => {
                    return (
                        <TableRow key={i}>
                            <TableElement>{element.name}</TableElement>
                            <TableElement>{numeral(element.watchers).format('0,0')}</TableElement>
                            <TableElement>{element.open_issues_count}</TableElement>
                            <TableElement>{numeral(element.forks).format('0,0')}</TableElement>
                        </TableRow>
                    
                    )
                })}
            </StyledTableContainer>
        );
    }
}

export default Table;