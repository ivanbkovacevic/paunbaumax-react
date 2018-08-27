import React, { Component } from 'react';

class ProizvodCategory extends Component {
    render() {
        return (
            <div>
                <li key={this.props.key}>{this.props.catIme} --</li>
            </div>
        );
    }
}

export default ProizvodCategory;