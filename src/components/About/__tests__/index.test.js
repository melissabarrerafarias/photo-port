import React from 'react'; 
import { render, cleanup } from '@testing-library/react'; 
// render function will 'render' the component
// cleanup function is used to remove components from the DOM between tests that could corrupt test results
import '@testing-library/jest-dom/extend-expect'; 
import About from '..'; 

afterEach(cleanup); // after each test no leftover memory that could give false result

describe('About component', () => { // 'describe' declares which component is being tested
    // first test 
    it('renders', () => { // verify component is rendering 
        render(<About />); 
    }); 

    it('matches snaphot DOM node structure', () => { // snapshot -> serialized version of DOM node structure
        const { asFragment } = render(<About />); // asFragment returns snapshot of About component 
        expect(asFragment()).toMatchSnapshot(); 
    })
})