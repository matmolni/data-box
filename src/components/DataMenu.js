import React, {Component} from 'react';
import {Skeleton} from "primereact/skeleton";
import {SlideMenu} from "primereact/slidemenu";

class DataMenu extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <SlideMenu model={this.props.model} className="h-full w-auto"></SlideMenu>
        );
    }
}

export default DataMenu;