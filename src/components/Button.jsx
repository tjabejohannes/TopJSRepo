import React, { Component } from 'react';

import styled from 'styled-components';

const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom:20px;

    .btn{
        margin: 10px;
        border-radius: 2px;
        border-width: 0;
        outline: none;
        overflow: hidden;
        padding: 0.5em 1em;
    }

    .selected {
        box-shadow: 0 1px 4px;
        color:white;
        background-color: black;
    }

    .btn:hover{
        background-color: gray;
        color:white;
    }
`


class Button extends Component {

    render() {
        return (
            <StyledButton>
            {
                this.props.type === "selected" ?
                    <button type="button" className="btn selected" onClick={() => this.props.onClick()}>
                        {this.props.children}
                    </button> :
                    <button type="button" className="btn" onClick={() => this.props.onClick()}>
                        {this.props.children}
                    </button>
                }
            </StyledButton>)
    }
}

export default Button;