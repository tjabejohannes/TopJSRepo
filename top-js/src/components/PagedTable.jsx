import React, { Component } from 'react';
import ElementContainer from './ElementContainer.jsx'
import PageSelector from './PageSelector.jsx'
import { fetchData } from '../frontend.js'


class PagedTable extends Component {
    state = {
        selectedPage: 0,
        elementsPerPage: 20,
        amountOfPages: 5,
        elements: [],
    }

    componentDidMount() {
        try {
            fetch("https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100")
                .then(response => response.json())
                .then(data => this.setState({ elements: data.items }));
        } catch (error) {
            console.error(error);

        }
    }

    handleSiteChange = (i) => {
        console.log(i);
        this.setState({
            selectedPage: i
        });
    }

    render() {
        return (
            this.state.elements.length !== 0 ?
                <div>
                    <ElementContainer elements={
                        this.state.elements.slice(
                            this.state.elementsPerPage * (this.state.selectedPage),
                            this.state.elementsPerPage * (this.state.selectedPage + 1))}>
                    </ElementContainer>
                    <PageSelector
                        elementPerPage={this.state.elementsPerPage}
                        amountOfPages={this.state.amountOfPages}
                        selectedPage={this.state.selectedPage}
                        handleSiteChange={this.handleSiteChange}>
                    </PageSelector>
                </div> :
                <div>
                    Loading ...
                </div>
        );
    }
}

export default PagedTable;