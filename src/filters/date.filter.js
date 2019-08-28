import moment from 'moment';

const convertDateToString = value => moment(value.toString()).format('MM/DD/YYYY');

export default convertDateToString;
