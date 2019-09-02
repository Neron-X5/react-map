import React from 'react';
import { shallow } from 'enzyme';

import AddressForm from './index';

describe('AddressForm Component', () => {
    it('shallow renders without crashing', () => {
        const wrapper = shallow(<AddressForm />);
        expect(wrapper).toBeDefined();
    });
});
