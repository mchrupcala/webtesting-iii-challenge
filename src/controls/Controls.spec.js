// Test away!

import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import Controls from './Controls';

// the closed toggle button is disabled if the gate is locked
it('"Closed" toggle button is disabled if gate is locked', () => {
    const {getByText} =  render(<Controls locked={true} closed={true}/>)
    expect(getByText(/Open Gate/i).disabled).toBe(true);
});

// the locked toggle button is disabled if the gate is open
it('"Locked" toggle button is diabled if gate is open', () => {
    const {getByText} =  render(<Controls locked={false} closed={false}/>)
    expect(getByText(/Lock Gate/i).disabled).toBe(true);
});

// provide buttons to toggle the closed and locked states.
it('Renders two buttons', () => {
    const {getByTestId} = render(<Controls />)
    expect(getByTestId('btn-1'))
    expect(getByTestId('btn-2'))
})

// buttons' text changes to reflect the state the door will be in if clicked
it('Button text updates - Unlocked and Open', () => {
    const {getByText} =  render(<Controls locked={false} closed={false}/>)
    expect(getByText(/Close Gate/i));
});

it('Button text updates - Closed and Unlocked', () => {
    const {getByText} =  render(<Controls locked={false} closed={true}/>)
    expect(getByText(/Open Gate/i));
    expect(getByText(/Lock Gate/i));
});

it('Button text updates - Locked and Closed', () => {
    const {getByText} =  render(<Controls locked={true} closed={true}/>)
    expect(getByText(/Unlock Gate/i));
});


