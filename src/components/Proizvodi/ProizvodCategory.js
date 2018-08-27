import React, { Component } from 'react';

class ProizvodCategory extends Component {
    render() {
        return (
            <div>
                <li onClick={this.props.showSub} key={this.props.key}>{this.props.catIme}  --</li>
            </div>
        );
    }
}

export default ProizvodCategory;