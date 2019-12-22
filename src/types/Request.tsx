import {Forecast} from "./Forecast";

export type Request = {
    name: string;
    start_date: string;
    type: string;
    status: string;
    expected_end: string;
    items: Array<Forecast>;
}