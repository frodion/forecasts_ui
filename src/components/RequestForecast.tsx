import * as React from 'react';
import {Forecast} from "../types/Forecast";
import WarningIcon from '@material-ui/icons/Warning';
import Tooltip from '@material-ui/core/Tooltip';

const useStylesBootstrap = function() {
    return {
        arrow: {
            color: "rgb(0,0,0)",
        },
        tooltip: {
            backgroundColor: "rgba(0,0,0)",
        },
    }
};

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow placement="top-start" classes={classes} {...props} />;
}

export interface ForecastItemProps {
    forecastItem: Forecast,
    size: number
}

export function RequestForecast({forecastItem, size}: ForecastItemProps) {
    return (
        <div className={"forecast__item forecast__item--" + forecastItem.state} style={({width: `${size}%`})}>
            <div className="forecast__item-title">{forecastItem.name}</div>
            <div className="forecast__item-date">{(new Date(forecastItem.date)).toLocaleDateString()}</div>
            {
                forecastItem.note &&
                <React.Fragment>
                    <div className="forecast__item-note" data-note={forecastItem.note}>
                        <BootstrapTooltip title={
                            <div className="forecast__item-note-text">
                                <div className="forecast__item-note-header">{forecastItem.note.split("\n")[0]}</div>
                                <div className="forecast__item-note-content">{forecastItem.note.split("\n")[1]}</div>
                            </div>
                        }>
                            <WarningIcon/>
                        </BootstrapTooltip>
                    </div>
                    <div className="forecast__item-note-back"/>
                </React.Fragment>
            }
            {
                forecastItem.time &&
                <div className="forecast__item-time">
                    {Math.floor((+forecastItem.time) / 8) != 0 ? Math.floor((+forecastItem.time) / 8) + " Д." : ""}
                    {" "}
                    {((+forecastItem.time) % 8) != 0 ? ((+forecastItem.time) % 8) + " Ч." : ""}
                </div>
            }
        </div>
    )
}