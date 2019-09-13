import React, { Component } from 'react';

import styled from 'styled-components';

const StyledElementContainer = styled.div`
    table{
        margin:auto;
        padding-bottom:30px;
    }
    th{
        text-align: left;
        padding-right: 20px;
    }
    td{
        text-align: left;
    }
`

class ElementContainer extends Component {
    render() {
        return (
            <StyledElementContainer>
                <table>
                    <tbody>
                        <tr>
                            <th>Repository Name</th>
                            <th>Watchers</th>
                            <th>Forks</th>
                            <th>Id</th>
                        </tr>
                        {this.props.elements.map((element, i) => {
                            return (
                                <tr key={i}>
                                    <td>{element.name}</td>
                                    <td>{element.watchers}</td>
                                    <td>{element.forks}</td>
                                    <td>{element.id}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </StyledElementContainer>
        );
    }
}

export default ElementContainer;