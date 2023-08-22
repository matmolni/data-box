import {useContext, useEffect, useState} from "react";
import {DataContext} from "../../app/AppContexts";
import fetchDatalog from "../../utils/fetchDatalog";

function ValuePanel ({ dataSource, options }) {

    const {selectedDataset, displayMoment} = useContext(DataContext);

    const [value, setValue] = useState(null);

    //get value from datalog that corresponds to the selected moment in time
    function getValue (datalog) {
        if (!datalog) {
            return null;
        }
        const record = datalog.find((record) => record.relativeTimestamp === displayMoment);
        if (!record) {
            return null;
        }
        else {
            return record.data;
        }
    }

    //when displayMoment changes, update the value
    useEffect(() => {
        fetchDatalog(selectedDataset, dataSource).then((datalog) => {
            const newValue = getValue(datalog);
            setValue(newValue);
        });
    }, []);

    return (
        <div className="flex align-items-center justify-content-center h-full text-8xl" style={{color: options.colour}}>
            {value}
        </div>
    );
}

export default ValuePanel;