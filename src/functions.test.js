import React from 'react';
import add from './App';
import subtract from './App';
import multiply from './App';
import divide from './App';

test("Function is defined or not" ,() => {
    expect (add).toBeDefined();
})

test("Function is defined or not" ,() => {
    expect (multiply).toBeDefined();
})

test("Function is defined or not" ,() => {
    expect (subtract).toBeDefined();
})

test("Function is defined or not" ,() => {
    expect (divide).toBeDefined();
})

