import React from "react";

const DataContext = React.createContext(null);
const DisplayContext = React.createContext(null);

function AppProvider({children}) {

    //states for data context
    const [selectedDataset, setSelectedDataset] = React.useState(null);
    const [displayMoment, setDisplayMoment] = React.useState(0); //selected moment in time
    const [displayRange, setDisplayRange] = React.useState({start: 0, end: 0});

    //states for display context
    const [selectedView, setSelectedView] = React.useState(null);

    return (
        <DataContext.Provider value={{
            selectedDataset, setSelectedDataset,
            displayMoment, setDisplayMoment,
            displayRange, setDisplayRange
        }}>
            <DisplayContext.Provider value={{
                selectedView, setSelectedView
            }}>
                {children}
            </DisplayContext.Provider>
        </DataContext.Provider>
    );
}

export {AppProvider, DataContext, DisplayContext};