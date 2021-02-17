import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm />);
    });
    // second test
    it('matches snaphot DOM node structure', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('text content matches', () => {
    it('matches text content', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('contactMe')).toHaveTextContent('Contact me');
    })
}); 

describe('text content matches to submit', () => {
    it('matches text content on submit button', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('submitButton')).toHaveTextContent('Submit');
    })
}); 