import React from 'react';
import { shallow } from 'enzyme';

import MapView from './index';

describe('MapView Component', () => {
    it('shallow renders without crashing', () => {
        const wrapper = shallow(<MapView />);
        expect(wrapper).toBeDefined();
    });
});
