/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import Paystack from '../index';
import {assert, expect} from 'chai';
import faker from 'faker';

const trans_ref: string = faker.random.alphaNumeric(9);

describe('Charge', () => {
    it('Card Charge', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.charge.card({
                email: faker.internet.email(),
                amount: faker.random.number(),
                card: {
                    number: '4084084084084081',
                    cvv: '408',
                    expiry_month: '01',
                    expiry_year: '99',
                },
                pin: '0000',
            });
            assert.strictEqual(res.status, true);
            assert.containsAllDeepKeys(res, {data: {message: 'Charge attempted'}});
            expect(res).to.have.property('data');
        } catch (error) {
            return error;
        }
    });

    it('Bank Charge', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.charge.bank({
                email: faker.internet.email(),
                amount: faker.random.number(),
                bank: {
                    code: '057',
                    account_number: '0000000000',
                },
            });
            assert.strictEqual(res.status, true);
            assert.containsAllDeepKeys(res, {data: {message: 'Charge attempted'}});
            expect(res).to.have.property('data');
        } catch (error) {
            return error;
        }
    });
});
