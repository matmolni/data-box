import React, {Component} from 'react';
import {Skeleton} from "primereact/skeleton";

class Timeline extends Component {
    render() {
        return (
            <div>
                <Skeleton className="h-6rem w-auto"></Skeleton>
            </div>
        );
    }
}

export default Timeline;