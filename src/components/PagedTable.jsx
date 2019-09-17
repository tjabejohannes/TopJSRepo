import React, { Component } from 'react';
import Table from './Table.jsx'
import PageSelector from './PageSelector.jsx'


class PagedTable extends Component {
    state = {
        selectedPage: 0,
        elementsPerPage: 20,
        amountOfPages: 5,
        elements: [],
        failedFetchAttempt: false,
    }

    componentDidMount() {
        // Should be moved to a separate file for cleaner code.
        try {
            fetch("https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100")
                .then(response => response.json())
                .then(data => this.setState({ elements: data.items }));
        } catch (error) {
            //User should be informed of a failed fetch attempt.
            this.setState({
                failedFetchAttempt: true
            })
            console.error(error);
        }
    }

    handleSiteChange = (i) => {
        this.setState({
            selectedPage: i
        });
    }

    render() {
        return (
            this.state.failedFetchAttempt === false ?
                this.state.elements.length !== 0 ?
                    <div>
                        <Table elements={
                            this.state.elements.slice(
                                this.state.elementsPerPage * (this.state.selectedPage),
                                this.state.elementsPerPage * (this.state.selectedPage + 1))}>
                        </Table>
                        <PageSelector
                            elementPerPage={this.state.elementsPerPage}
                            amountOfPages={this.state.amountOfPages}
                            selectedPage={this.state.selectedPage}
                            handleSiteChange={this.handleSiteChange}>
                        </PageSelector>
                    </div> :
                    <div>
                        Loading table content...
                    </div> :
                <div>
                    Failed to load table data.
                </div>
        );
    }
}

export default PagedTable;