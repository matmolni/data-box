/*
//array of pre-defined data views
import DataPanel from "../components/data-panels/DataPanel";

const dataViews = [
    [
        {
            id: 'item-1', x: 0, y: 0, w: 2, h: 1,
            content: <DataPanel></DataPanel>
        },
        {
            id: 'item-2', x: 2, y: 0, w: 2, h: 1,
            content: <DataPanel></DataPanel>
        },
        {
            id: 'item-3', x: 4, y: 0, w: 2, h: 1,
            content: <DataPanel></DataPanel>
        },
        {
            id: 'item-4', x: 0, y: 1, w: 2, h: 2,
            content: <DataPanel></DataPanel>
        },
        {
            id: 'item-5', x: 2, y: 1, w: 2, h: 2,
            content: <DataPanel></DataPanel>
        },
        {
            id: 'item-6', x: 4, y: 1, w: 1, h: 1,
            content: <DataPanel></DataPanel>
        },
        {
            id: 'item-7', x: 5, y: 1, w: 1, h: 1,
            content: <DataPanel></DataPanel>
        },
        {
            id: 'item-8', x: 4, y: 2, w: 2, h: 1,
            content: <DataPanel></DataPanel>
        }
    ],
    [
        {
            id: 'item-1',
        }
    ]
];*/

const dataViewLayouts = [
    {
        viewName: 'Default',
        viewLayout:
            [
                {
                    id: 'item-1', x: 0, y: 0, w: 2, h: 1,
                    chartType: "lap"
                },
                {
                    id: 'item-2', x: 2, y: 0, w: 2, h: 1,
                    chartType: "gpsSpeed"
                },
                {
                    id: 'item-3', x: 4, y: 0, w: 2, h: 1,
                    chartType: "gpsSpeed"
                },
                {
                    id: 'item-4', x: 0, y: 1, w: 2, h: 2,
                    chartType: "gpsSpeed"
                },
                {
                    id: 'item-5', x: 2, y: 1, w: 2, h: 2,
                    chartType: "gpsSpeed"
                },
                {
                    id: 'item-6', x: 4, y: 1, w: 1, h: 1,
                    chartType: "gpsSpeed"
                },
                {
                    id: 'item-7', x: 5, y: 1, w: 1, h: 1,
                    chartType: "gpsSpeed"
                },
                {
                    id: 'item-8', x: 4, y: 2, w: 2, h: 1,
                    chartType: "gpsSpeed"
                }
            ]
    },
    {
        viewName: 'Test',
        viewLayout:
            [
                {
                    id: 'item-1',
                },
                {
                    id: 'item-2'
                }
            ]
    }
];

export default dataViewLayouts;