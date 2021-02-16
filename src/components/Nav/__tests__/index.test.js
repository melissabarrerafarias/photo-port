import React from 'react'; 
import { render, cleanup } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect'; 
import Nav from '..'; 

afterEach(cleanup); 

describe('Nav component', () => {
    // baseline test 
    it('renders', () => {
        render(<Nav />); 
    }); 

    // snapshot test 
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />); 
        expect(asFragment()).toMatchSnapshot(); 
    }); 
}); 

// checks if camera emoji is visible 
describe('emoji is visible', () => {
    it('inserts emoji into h2', () => {
        const { getByLabelText } = render(<Nav />); // getByLabelText queries aria-label value
        expect(getByLabelText('camera')).toHaveTextContent('📸'); 
    })
}); 

// checks to see if links are visible so users can navigate to parts of app
describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />); 
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!'); 
        expect(getByTestId('about')).toHaveTextContent('About Me'); 
    })
}); 