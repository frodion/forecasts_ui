import * as React from 'react';
import {RequestRow, RequestRowProps} from "./RequestRow";
import {Request} from "../types/Request"
import AddCircleIcon from '@material-ui/icons/AddCircle';

export interface RequestProps {
    requests: Array<Request>
}

export interface RequestState {
    openKey: string
}

export class Requests extends React.Component<RequestProps, RequestState> {
    constructor(props: RequestProps) {
        super(props);

        this.state = {
            openKey: null
        }
    }

    render() {
        return <section>
            <div className="requests-header">
                <h1 className="requests-header__title">Мои заявки</h1>
                <button className="requests-header__button"><AddCircleIcon className="requests-header__button-icon"/>Новая заявка</button>
            </div>
            <div className="requests-list">
                <div className="requests-list__header">
                    <div className="requests-list__row requests-list__row--header">
                        <div className="requests-list__status-icon"></div>
                        <div className="requests-list__request-number">Номер заявки</div>
                        <div className="requests-list__date">Дата подачи</div>
                        <div className="requests-list__type">Тип заявки</div>
                        <div className="requests-list__status">Статус</div>
                    </div>
                </div>
                <div className="requests-list__content">
                    {this.props.requests.map((request : Request) => <RequestRow isOpen={this.getHashCode(request) == this.state.openKey} openHandler={this.openRow.bind(this)} key={this.getHashCode(request)} reactKey={this.getHashCode(request)} request={request}/>)}
                </div>
            </div>
        </section>
    }

    openRow(key) {
        this.setState({
            openKey: this.state.openKey == key ? null : key
        });
    }

    getHashCode(request) {
        return String(this.hashCode(request.status + request.name + request.type));
    }

    hashCode(str) {
        let hash = 0;
        if (str.length == 0) {
            return hash;
        }
        for (var i = 0; i < str.length; i++) {
            var char = str.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
}