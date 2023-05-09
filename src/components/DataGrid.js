import React, {Component} from 'react';
import {Skeleton} from "primereact/skeleton";

class DataGrid extends Component {
    render() {
        return (
            <div className="data-grid">
                <Skeleton className="h-full w-auto"></Skeleton>
            </div>
        );
    }
}

export default DataGrid;