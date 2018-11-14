import moment from 'moment';
import op from "object-path";


export default class RuntimeError {

  id;
  date;
  message;

  /**
   * @param {Error} [error] - axios error
   * @param {string} [message] - string error
   */
  constructor({error, message}) {
    this.id = moment().valueOf();
    this.date = moment();
    this.message = error ? op.get(error, 'response.data.error', error.message) : message;
  }

}
