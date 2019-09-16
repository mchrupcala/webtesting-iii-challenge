// Test away

import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';

//shows the controls and display

describe('Renders Dashboard, Display, and Controls components', () => {
    it('renders the dashboard', () => {
        const wrapper =  render(<Dashboard />)
        const controls = render(<Controls />)
        const display = render(<Display />)
    });
})

