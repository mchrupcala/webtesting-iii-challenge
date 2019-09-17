// Test away!

import React from 'react';
import { render, queryByText } from '@testing-library/react';
import Display from './Display';


// displays if gate is closed and if it is locked
// displays 'Closed' if the closed prop is true...
// displays 'Locked' if the locked prop is true...
it('Checks that display will show Locked and Closed', () => {
    const {getByTestId, debug} =  render(<Display locked={true} closed={true}/>)
    expect(getByTestId('locked-div').textContent).toBe("Locked")
    expect(getByTestId('closed-div').textContent).toBe("Closed")
});

// displays if gate is open and if it is unlocked
// ...and 'Open' if otherwise
// and 'Unlocked' if otherwise
it('Checks that display will show Unlocked and Open', () => {
    const {getByTestId, debug} =  render(<Display locked={false} closed={false}/>)
    expect(getByTestId('locked-div').textContent).toBe("Unlocked")
    expect(getByTestId('closed-div').textContent).toBe("Open")
});



// when locked or closed use the red-led class
it('test if red-led class appears for locked or closed state', () => {
    const {queryByText} = render(<Display locked={true} closed={true}/> )
    expect(queryByText('red-led'))
})

// when unlocked or open use the green-led class
it('test if green-led class appears for unlocked or open state', () => {
    const {queryByText} = render(<Display locked={false} closed={false}/> )
    expect(queryByText('green-led'))
})