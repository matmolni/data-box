import  { useState, useEffect, createRef, useRef } from 'react'

import 'gridstack/dist/gridstack.min.css'
import 'gridstack/dist/gridstack-extra.min.css'
import { GridStack } from 'gridstack';

import './DataGrid.css'

function GridManager({ items }) {
    const refs = useRef({})
    const gridRef = useRef()

    if (Object.keys(refs.current).length !== items.length) {
        items.forEach(({ id }) => {
            refs.current[id] = refs.current[id] || createRef()
        })
    }

    useEffect(() => {
        gridRef.current = gridRef.current ||
            GridStack.init(
                {
                    float: true,
                    column: 6,
                    //row: 3,
                    alwaysShowResizeHandle: false
                },
                '.controlled')
        const grid = gridRef.current
        grid.batchUpdate()
        grid.removeAll(false)
        items.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
        grid.batchUpdate(false)
    }, [items])


    function GridItem({ id }) {
        return (
            <div className="grid-item">{id}</div>
        )
    }

    return (
        <div className={`grid-stack controlled`}>
            {items.map((item, i) => {
                return (
                    <div ref={refs.current[item.id]} key={item.id} className={'grid-stack-item'}>
                        <div className="grid-stack-item-content">
                            <GridItem {...item} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default GridManager;