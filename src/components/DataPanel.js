import React from 'react';
import GPSSpeedPanel from "./data-panels/GPSSpeedPanel";
import LapPanel from "./data-panels/LapPanel";
import RangePanel from "./data-panels/RangePanel";

function DataPanel({chartType}) {

    let ChartComponent = null;
    let panelName = null;
    let datasource = null;
    let dataset = null;

    switch (chartType) {
        case "lap":
            panelName = "Laps Completed";
            datasource = "lap";
            dataset =
                {
                    label: 'Laps Completed',
                    backgroundColor: 'rgb(255,129,51)',
                    borderColor: 'rgba(255,129,51)',
                    borderWidth: 1,
                    stepped: true,
                    data: null,
                };
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "gpsSpeed":
        case "lap":
            panelName = "GPS Speed";
            datasource = "gps_speed";
            dataset =
                {
                    label: 'GPS Speed',
                    backgroundColor: 'rgb(51,170,255)',
                    borderColor: 'rgb(51,170,255)',
                    borderWidth: 1,
                    stepped: false,
                    data: null,
                };
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "sas":
            panelName = "Steering Angle Sensor";
            datasource = "sas";
            dataset =
                {
                    label: 'Steering Angle Sensor',
                    backgroundColor: 'rgb(255,170,51)',
                    borderColor: 'rgb(255,170,51)',
                    borderWidth: 1,
                    stepped: false,
                    data: null,
                }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "apps":
            panelName = "Accelerator Pedal Position Sensor";
            datasource = "apps";
            dataset =
                {
                    label: 'Accelerator Pedal Position Sensor',
                    backgroundColor: 'rgb(51,255,170)',
                    borderColor: 'rgb(51,255,170)',
                    borderWidth: 1,
                    stepped: false,
                    data: null,
                }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "brake":
            panelName = "Brake Pressure Sensor";
            datasource = "brake_pressure";
            dataset =
                {
                    label: 'Brake Pressure Sensor',
                    backgroundColor: 'rgb(51,170,255)',
                    borderColor: 'rgb(51,170,255)',
                    borderWidth: 1,
                    stepped: false,
                    data: null,
                }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;

        // Wheel Speed
        case "wheelSpeed-FL":
            panelName = "Wheel Speed Front Left";
            datasource = "wheel_speed_fl";
            dataset =
                {
                    label: 'Wheel Speed Front Left',
                    backgroundColor: 'rgb(51,255,248)',
                    borderColor: 'rgb(51,255,248)',
                    borderWidth: 1,
                    stepped: false,
                    data: null,
                }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "wheelSpeed-FR":
            panelName = "Wheel Speed Front Right";
            datasource = "wheel_speed_fr";
            dataset =
                {
                    label: 'Wheel Speed Front Right',
                    backgroundColor: 'rgb(51,255,248)',
                    borderColor: 'rgb(51,255,248)',
                    borderWidth: 1,
                    stepped: false,
                    data: null,
                }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "wheelSpeed-RL":
            panelName = "Wheel Speed Rear Left";
            datasource = "wheel_speed_rl";
            dataset =
                {
                    label: 'Wheel Speed Rear Left',
                    backgroundColor: 'rgb(51,255,248)',
                    borderColor: 'rgb(51,255,248)',
                    borderWidth: 1,
                    stepped: false,
                    data: null,
                }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "wheelSpeed-RR":
            panelName = "Wheel Speed Rear Right";
            datasource = "wheel_speed_rr";
            dataset =
                {
                    label: 'Wheel Speed Rear Right',
                    backgroundColor: 'rgb(51,255,248)',
                    borderColor: 'rgb(51,255,248)',
                    borderWidth: 1,
                    stepped: false,
                    data: null,
                }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;

        // Tyre Pressure
        case "tyrePressure-FL":
            panelName = "Tyre Pressure Front Left";
            datasource = "tyre_pressure_fl";
            dataset = {
                label: 'Tyre Pressure Front Left',
                backgroundColor: 'rgb(51,255,170)',
                borderColor: 'rgb(51,255,170)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "tyrePressure-FR":
            panelName = "Tyre Pressure Front Right";
            datasource = "tyre_pressure_fr";
            dataset = {
                label: 'Tyre Pressure Front Right',
                backgroundColor: 'rgb(51,255,170)',
                borderColor: 'rgb(51,255,170)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "tyrePressure-RL":
            panelName = "Tyre Pressure Rear Left";
            datasource = "tyre_pressure_rl";
            dataset = {
                label: 'Tyre Pressure Rear Left',
                backgroundColor: 'rgb(51,255,170)',
                borderColor: 'rgb(51,255,170)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "tyrePressure-RR":
            panelName = "Tyre Pressure Rear Right";
            datasource = "tyre_pressure_rr";
            dataset = {
                label: 'Tyre Pressure Rear Right',
                backgroundColor: 'rgb(51,255,170)',
                borderColor: 'rgb(51,255,170)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;

        // Tyre Temperature
        case "tyreTemp-FL":
            panelName = "Tyre Temperature Front Left";
            datasource = "tyre_temp_fl";
            dataset = {
                label: 'Tyre Temperature Front Left',
                backgroundColor: 'rgb(255,88,51)',
                borderColor: 'rgb(255,88,51)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "tyreTemp-FR":
            panelName = "Tyre Temperature Front Right";
            datasource = "tyre_temp_fr";
            dataset = {
                label: 'Tyre Temperature Front Right',
                backgroundColor: 'rgb(255,88,51)',
                borderColor: 'rgb(255,88,51)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "tyreTemp-RL":
            panelName = "Tyre Temperature Rear Left";
            datasource = "tyre_temp_rl";
            dataset = {
                label: 'Tyre Temperature Rear Left',
                backgroundColor: 'rgb(255,88,51)',
                borderColor: 'rgb(255,88,51)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "tyreTemp-RR":
            panelName = "Tyre Temperature Rear Right";
            datasource = "tyre_temp_rr";
            dataset = {
                label: 'Tyre Temperature Rear Right',
                backgroundColor: 'rgb(255,88,51)',
                borderColor: 'rgb(255,88,51)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;

        // Tyre Temperature Surface
        case "tyreTempSurface-FL":
            panelName = "Tyre Temperature Surface Front Left";
            datasource = "tyre_temp_surface_fl";
            dataset = {
                label: 'Tyre Temperature Surface Front Left',
                backgroundColor: 'rgb(255,170,51)',
                borderColor: 'rgb(255,170,51)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "tyreTempSurface-FR":
            panelName = "Tyre Temperature Surface Front Right";
            datasource = "tyre_temp_surface_fr";
            dataset = {
                label: 'Tyre Temperature Surface Front Right',
                backgroundColor: 'rgb(255,170,51)',
                borderColor: 'rgb(255,170,51)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "tyreTempSurface-RL":
            panelName = "Tyre Temperature Surface Rear Left";
            datasource = "tyre_temp_surface_rl";
            dataset = {
                label: 'Tyre Temperature Surface Rear Left',
                backgroundColor: 'rgb(255,170,51)',
                borderColor: 'rgb(255,170,51)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "tyreTempSurface-RR":
            panelName = "Tyre Temperature Surface Rear Right";
            datasource = "tyre_temp_surface_rr";
            dataset = {
                label: 'Tyre Temperature Surface Rear Right',
                backgroundColor: 'rgb(255,170,51)',
                borderColor: 'rgb(255,170,51)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;

        // Suspension Travel
        case "suspensionTravel-FL":
            panelName = "Suspension Travel Front Left";
            datasource = "suspension_travel_fl";
            dataset = {
                label: 'Suspension Travel Front Left',
                backgroundColor: 'rgb(163,51,255)',
                borderColor: 'rgb(163,51,255)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "suspensionTravel-FR":
            panelName = "Suspension Travel Front Right";
            datasource = "suspension_travel_fr";
            dataset = {
                label: 'Suspension Travel Front Right',
                backgroundColor: 'rgb(163,51,255)',
                borderColor: 'rgb(163,51,255)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "suspensionTravel-RL":
            panelName = "Suspension Travel Rear Left";
            datasource = "suspension_travel_rl";
            dataset = {
                label: 'Suspension Travel Rear Left',
                backgroundColor: 'rgb(163,51,255)',
                borderColor: 'rgb(163,51,255)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        case "suspensionTravel-RR":
            panelName = "Suspension Travel Rear Right";
            datasource = "suspension_travel_rr";
            dataset = {
                label: 'Suspension Travel Rear Right',
                backgroundColor: 'rgb(163,51,255)',
                borderColor: 'rgb(163,51,255)',
                borderWidth: 1,
                stepped: false,
                data: null,
            }
            ChartComponent = () => <RangePanel dataSource={datasource} dataset={dataset}></RangePanel>;
            break;
        default:
            ChartComponent = () => <div>Default Chart</div>;
            panelName = "Default Chart";
    }


    return (
        <div className="data-panel h-full p-3 border-round-lg shadow-2 overflow-hidden">
            <div className="text-lg text-white font-bold white-space-nowrap overflow-hidden text-overflow-ellipsis">{panelName}</div>
            <div className="">
                <ChartComponent></ChartComponent>
            </div>
        </div>
    );
}

export default DataPanel;