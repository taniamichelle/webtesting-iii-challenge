// Test away!
import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import Controls from './Controls';
import {render, fireEvent} from '@testing-library/react'; 

describe('<Controls />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Controls />); // generates a DOM tree
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it("closed toggle button is disabled if the gate is locked", () => {
      const mock = jest.fn();
      const {getByText} = render(<Controls closed={true} locked={true}/>)
      const button = getByText(/Lock Gate/i);
      fireEvent.click(button);
      expect(mock).not.toHaveBeenCalled();
  });
  it("locked toggle button is disabled if the gate is open", () => {
      const mock = jest.fn();
      const {getByText} = render(<Controls closed={false} locked={false}/>)
      const button = getByText(/Lock/i);
      fireEvent.click(button);
      expect(mock).not.toHaveBeenCalled();
  });
});
/*
SHOULD:
- provide buttons to toggle the `closed` and `locked` states.
- buttons' text changes to reflect the state the door will be in if clicked
- the closed toggle button is disabled if the gate is locked
- the locked toggle button is disabled if the gate is open

// Gate: 
    - defaults to `unlocked` and `open`
    - cannot be closed or opened if it is locked
*/
