/* eslint-disable valid-jsdoc */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import axios from 'axios';
import * as util from '../util';
/**
 * @class Transaction
 * @author sheghun {@link https://github.com/sheghun}
 *  Transaction resource
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *
 */
class Charge {
    static endpoint = '/charge';

    /**
     * Card charge
     * @param {CardOptions} options
     */
    static async card(options: CardOptions) {
        return util.extractResponse(axios.post(`${this.endpoint}`, options));
    }

    /**
     * Bank charge
     * @param {BankOptions} options
     */
    static async bank(options: BankOptions) {
        return util.extractResponse(axios.post(`${this.endpoint}`, options));
    }

    /**
     * Submit OTP
     */
    static async submitOtp(options: {otp: string; reference: string}) {
        return util.extractResponse(axios.post(`${this.endpoint}/submit_otp`, options));
    }

    /**
     * Submit Pin
     */
    static async submitPin(options: {pin: string; reference: string}) {
        return util.extractResponse(axios.post(`${this.endpoint}/submit_pin`, options));
    }
}

export default Charge;
