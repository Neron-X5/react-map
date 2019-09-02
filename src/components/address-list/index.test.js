import React from 'react';
import { shallow } from 'enzyme';

import AddressList from './index';

describe('AddressList Component', () => {
    it('shallow renders without crashing', () => {
        const wrapper = shallow(<AddressList />);
        expect(wrapper).toBeDefined();
    });
});
