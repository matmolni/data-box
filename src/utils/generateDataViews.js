import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css'
import 'gridstack/dist/gridstack-extra.min.css'
import GenericPanel from "../components/data-panels/GenericPanel";

function generateDataViews({ setDataViews, setSelectedView}) {

    setDataViews(dataViewTemplates);
    setSelectedView(dataViewTemplates[0].viewLayout);

}

export default generateDataViews;

const dataViewTemplates = [
        {
            viewName: 'Default',
            viewLayout:
                [
                    {
                        id: 'item-1', x: 0, y: 0, w: 2, h: 1,
                        content: "<div>Test</div>"
                    },
                    {
                        id: 'item-2', x: 2, y: 0, w: 2, h: 1,
                        content: "<GenericPanel></GenericPanel>"
                    },
                    {
                        id: 'item-3', x: 4, y: 0, w: 2, h: 1,
                        content: "<GenericPanel></GenericPanel>"
                    },
                    {
                        id: 'item-4', x: 0, y: 1, w: 2, h: 2,
                        content: "<GenericPanel></GenericPanel>"
                    },
                    {
                        id: 'item-5', x: 2, y: 1, w: 2, h: 2,
                        content: "<GenericPanel></GenericPanel>"
                    },
                    {
                        id: 'item-6', x: 4, y: 1, w: 1, h: 1,
                        content: "<GenericPanel></GenericPanel>"
                    },
                    {
                        id: 'item-7', x: 5, y: 1, w: 1, h: 1,
                        content: "<GenericPanel></GenericPanel>"
                    },
                    {
                        id: 'item-8', x: 4, y: 2, w: 2, h: 1,
                        content: "<GenericPanel></GenericPanel>"
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
    ]
;