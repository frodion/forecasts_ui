import * as React from 'react';
import { Requests } from './components/Requests';
import {Container} from "@material-ui/core";

const mockedResponse = {
  "applications": [
    {
      "name": "Заявка №2",
      "start_date": "2018-07-07T12:15:11.723Z",
      "type": "Изменение условий",
      "status": "canceled",
      "expected_end": "2018-07-10T00:00:00.000Z",
      "items": [
        {
          "name": "проверка заявки",
          "date": "2018-07-07T12:15:11.723Z",
          "time": "4",
          "state": "done",
          "note": ""
        },
        {
          "name": "экспертиза",
          "date": "2018-07-07T16:15:11.723Z",
          "time": "8",
          "state": "done",
          "note": ""
        },
        {
          "name": "принятие решения",
          "date": "2018-07-08T16:15:11.723Z",
          "time": "16",
          "state": "doing",
          "note": "Дозапрос документов\nНеобходио прикрепить дополнительные документы"
        },
        {
          "name": "подписание код",
          "date": "2018-07-10T16:15:11.723Z",
          "time": "24",
          "state": "todo",
          "note": ""
        },
        {
          "name": "выдача продуктука",
          "date": "2018-07-13T16:15:11.723Z",
          "time": "",
          "state": "todo",
          "note": ""
        }
      ]
    },
    {
      "name": "Заявка №3",
      "start_date": "2018-07-07T12:15:11.723Z",
      "type": "Изменение условий",
      "status": "warning",
      "expected_end": "2018-07-10T00:00:00.000Z",
      "items": [
        {
          "name": "проверка заявки",
          "date": "2018-07-07T12:15:11.723Z",
          "time": "7",
          "state": "done",
          "note": ""
        },
        {
          "name": "экспертиза",
          "date": "2018-07-07T16:15:11.723Z",
          "time": "15",
          "state": "done",
          "note": ""
        },
        {
          "name": "принятие решения",
          "date": "2018-07-08T16:15:11.723Z",
          "time": "47",
          "state": "doing",
          "note": "Дозапрос документов\nНеобходио прикрепить дополнительные документы"
        },
        {
          "name": "подписание код",
          "date": "2018-07-10T16:15:11.723Z",
          "time": "254",
          "state": "todo",
          "note": ""
        },
        {
          "name": "выдача продуктука",
          "date": "2018-07-13T16:15:11.723Z",
          "time": "",
          "state": "todo",
          "note": ""
        }
      ]
    },
    {
      "name": "Заявка №4",
      "start_date": "2018-07-07T12:15:11.723Z",
      "type": "Изменение условий",
      "status": "done",
      "expected_end": "2018-07-10T00:00:00.000Z",
      "items": [
        {
          "name": "проверка заявки",
          "date": "2018-07-07T12:15:11.723Z",
          "time": "4",
          "state": "done",
          "note": ""
        },
        {
          "name": "экспертиза",
          "date": "2018-07-07T16:15:11.723Z",
          "time": "8",
          "state": "done",
          "note": ""
        },
        {
          "name": "принятие решения",
          "date": "2018-07-08T16:15:11.723Z",
          "time": "16",
          "state": "done",
          "note": ""
        },
        {
          "name": "подписание код",
          "date": "2018-07-10T16:15:11.723Z",
          "time": "24",
          "state": "done",
          "note": ""
        },
        {
          "name": "выдача продуктука",
          "date": "2018-07-13T16:15:11.723Z",
          "time": "",
          "state": "done",
          "note": ""
        }
      ]
    },
    {
      "name": "Заявка №5",
      "start_date": "2018-07-07T12:15:11.723Z",
      "type": "Изменение условий",
      "status": "",
      "expected_end": "2018-07-10T00:00:00.000Z",
      "items": [
        {
          "name": "проверка заявки",
          "date": "2018-07-07T12:15:11.723Z",
          "time": "4",
          "state": "done",
          "note": ""
        },
        {
          "name": "экспертиза",
          "date": "2018-07-07T16:15:11.723Z",
          "time": "8",
          "state": "done",
          "note": ""
        },
        {
          "name": "принятие решения",
          "date": "2018-07-08T16:15:11.723Z",
          "time": "16",
          "state": "done",
          "note": ""
        },
        {
          "name": "подписание код",
          "date": "2018-07-10T16:15:11.723Z",
          "time": "24",
          "state": "done",
          "note": ""
        },
        {
          "name": "выдача продуктука",
          "date": "2018-07-13T16:15:11.723Z",
          "time": "",
          "state": "doing",
          "note": ""
        }
      ]
    }
  ]
};

const requests = mockedResponse.applications;

export class App extends React.Component {
  render() {
    return (
        <Container>
          <Requests requests={requests}/>
        </Container>
    )
  }
}
