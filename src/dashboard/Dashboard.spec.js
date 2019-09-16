// Test away

import React from 'react';
import { render, debug } from '@testing-library/react';
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

// defaults to unlocked and open
//getting an error message "toContain is not a function" but the code seems right and I talked it over in Help channel. Maybe an issue with dependencies?
it('test if unlocked/open on render using green-led class appears for unlocked or open state', () => {
    const {getByText, debug} = render(<Display closed={false} locked={false}/> )
    debug()
    expect(getByText('Unlocked').toContain('green-led'))
    expect(getByText('Open').toContain('green-led'))
})

// cannot be closed or opened if it is locked
describe('If locked, can"t be closed or opened.', () => {
    it('renders the dashboard', () => {
        const {getByText} =  render(<Controls locked={true} closed={true} />)
        expect(getByText('Open Gate').disabled).toBe(true);
    });
})