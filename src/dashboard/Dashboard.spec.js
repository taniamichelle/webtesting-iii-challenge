// Test away
import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import Dashboard from './Dashboard';
import {render, fireEvent} from '@testing-library/react'; 

describe('<Dashboard />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />); // generates a DOM tree
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  // What we want to test: 
    // when user clicks button, what happens in the app?
});
