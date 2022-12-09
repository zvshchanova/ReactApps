import {multipyBythree} from './functions'

test('testing multipyBythree', () =>{
    expect (multipyBythree(4)).toBe(12);
    expect (multipyBythree(0)).toBe(0);
    expect (multipyBythree(1)).toBe(3);
})
