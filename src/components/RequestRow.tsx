import * as React from 'react';
import {Request} from "../types/Request";
import {RequestForecast} from "./RequestForecast";
import CheckIcon from '@material-ui/icons/Check';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
import ForumIcon from '@material-ui/icons/Forum';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export interface RequestRowProps {
    request: Request,
    reactKey: string,
    isOpen: boolean,
    openHandler: any
}

export class RequestRow extends React.Component<RequestRowProps> {
    constructor(props: RequestRowProps) {
        super(props);
    }

    render() {
        return (
            <div className={`requests-list__row ${this.props.isOpen ? "requests-list__row--active" : ""}`}>
                <div className="requests-list__row-top" onClick={this.toggleOpen.bind(this)}>
                    <div className="requests-list__status-icon">
                        {
                            this.props.request.status === 'done' ? <CheckIcon style={({color: "rgb(72, 179, 89)"})}/> :
                                this.props.request.status === 'canceled' ? <CloseIcon style={({color: "rgb(183, 29, 48)"})}/> :
                                    this.props.request.status === 'warning' ? <WarningIcon style={({color: "rgb(237, 175, 76)"})}/> :
                                        ''
                        }
                    </div>
                    <div className="requests-list__request-number">{this.props.request.name}</div>
                    <div className="requests-list__date">{(new Date(this.props.request.start_date)).toLocaleDateString()}</div>
                    <div className="requests-list__type">{this.props.request.type}</div>
                    <div className="requests-list__status">
                        {this.props.request.status === "canceled" ? "Отменено" :
                            this.props.request.status === "done" ? "Завершено" :
                                this.getForecast()}
                    </div>
                    <div className="request-list__controls">
                        <button className="request-list__chat-btn">
                            <ForumIcon/>
                        </button>
                        <button className="request-list__remove-btn">
                            <DeleteIcon/> Отозвать заявку
                        </button>
                        <button className="request-list__open-btn">
                            {
                                this.props.isOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>
                            }
                        </button>
                    </div>
                </div>
                <ReactCSSTransitionGroup transitionName="forecast" transitionEnterTimeout={500} transitionLeaveTimeout={200}>
                    {
                        this.props.isOpen &&
                        <div className="request-list__row-bot">
                            <div className="requests-list__row requests-list__row--forecast">
                                <div className="forecast">
                                    {this.props.request.items.map((forecast) =>
                                        <RequestForecast size={100 / this.props.request.items.length} forecastItem={forecast}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    }
                </ReactCSSTransitionGroup>
            </div>
        )
    }

    getForecast() {
        return (
            <div className="forecast-caption">
                <div className="forecast-caption__top">
                    Прогноз: {(new Date(this.props.request.expected_end)).toLocaleDateString()}
                </div>
                <div className="forecast-caption__bot">
                    <div className="forecast-caption__progress">
                        <div className="forecast-caption__progress-inner" style={({backgroundColor: this.props.request.status == "warning" ? "rgb(237, 175, 76)" : "rgb(57, 181, 74)", width: this.getForecastProgress() + "%"})}/>
                    </div>
                </div>
            </div>
        )
    }

    getForecastProgress() {
        let doneAmount = 0;
        for (let i = 0; i < this.props.request.items.length; i++) {
            if(this.props.request.items[i].state === "done" || this.props.request.items[i].note) {
                doneAmount++;
            }
        }

        return (100 / this.props.request.items.length) * doneAmount;
    }

    toggleOpen() {
        this.props.openHandler(this.props.reactKey);
    }
}