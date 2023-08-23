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
                    id: 'item-01', x: 0, y: 0, w: 2, h: 1,
                    chartType: "lap"
                },
                {
                    id: 'item-02', x: 2, y: 0, w: 2, h: 1,
                    chartType: "gpsSpeed"
                },
                {
                    id: 'item-03', x: 4, y: 0, w: 2, h: 1,
                    chartType: "sas"
                },
                {
                    id: 'item-11', x: 0, y: 1, w: 2, h: 1,
                    chartType: "apps"
                },
                {
                    id: 'item-12', x: 2, y: 1, w: 2, h: 1,
                    chartType: "brake"
                },
                {
                    id: 'item-13', x: 4, y: 1, w: 1, h: 1,
                    chartType: "wheelSpeed-FL"
                },
                {
                    id: 'item-14', x: 5, y: 1, w: 1, h: 1,
                    chartType: "wheelSpeed-FR"
                },
                {
                    id: 'item-21', x: 0, y: 2, w: 1, h: 1,
                    chartType: "tyreTemp-FL"
                },
                {
                    id: 'item-22', x: 1, y: 2, w: 1, h: 1,
                    chartType: "tyreTemp-FR"
                },
                {
                    id: 'item-23', x: 2, y: 2, w: 1, h: 1,
                    chartType: "tyreTemp-RL"
                },
                {
                    id: 'item-24', x: 3, y: 2, w: 1, h: 1,
                    chartType: "tyreTemp-RR"
                },
                {
                    id: 'item-25', x: 4, y: 2, w: 1, h: 1,
                    chartType: "wheelSpeed-RL"
                },
                {
                    id: 'item-26', x: 5, y: 2, w: 1, h: 1,
                    chartType: "wheelSpeed-RR"
                },
                {
                    id: 'item-31', x: 0, y: 3, w: 1, h: 1,
                    chartType: "tyrePressure-FL"
                },
                {
                    id: 'item-32', x: 1, y: 3, w: 1, h: 1,
                    chartType: "tyrePressure-FR"
                },
                {
                    id: 'item-33', x: 2, y: 3, w: 1, h: 1,
                    chartType: "tyrePressure-RL"
                },
                {
                    id: 'item-34', x: 3, y: 3, w: 1, h: 1,
                    chartType: "tyrePressure-RR"
                }
            ]
    },
    {
        viewName: 'Moments',
        viewLayout:
            [
                {
                    id: 'moments-item-11', x: 0, y: 0, w: 1, h: 1,
                    chartType: "gpsSpeed-moment"
                },
                {
                    id: 'moments-item-12', x: 1, y: 0, w: 5, h: 1,
                    chartType: "gpsSpeed"
                },
                {
                    id: 'moments-item-21', x: 0, y: 1, w: 1, h: 1,
                    chartType: "brake-moment"
                },
                {
                    id: 'moments-item-22', x: 1, y: 1, w: 5, h: 1,
                    chartType: "brake"
                }
            ]
    }
];

export default dataViewLayouts;