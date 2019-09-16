// Test away!

import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';


// displays if gate is closed and if it is locked
// displays 'Closed' if the closed prop is true...
// displays 'Locked' if the locked prop is true...
it('Checks that display will show Locked and Closed', () => {
    const {getByTestId, debug} =  render(<Display locked={true} closed={true}/>)
    debug()
    expect(getByTestId('locked-div').textContent).toBe("Locked")
    expect(getByTestId('closed-div').textContent).toBe("Closed")
});

// displays if gate is open and if it is unlocked
// ...and 'Open' if otherwise
// and 'Unlocked' if otherwise
it('Checks that display will show Unlocked and Open', () => {
    const {getByTestId, debug} =  render(<Display locked={false} closed={false}/>)
    debug()
    expect(getByTestId('locked-div').textContent).toBe("Unlocked")
    expect(getByTestId('closed-div').textContent).toBe("Open")
});



// when locked or closed use the red-led class

// when unlocked or open use the green-led class