// Test away!
import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import Display from './Display';
import {render, fireEvent, cleanup} from '@testing-library/react'; 

afterEach(cleanup);
describe('<Display />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />); // generates a DOM tree
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it("displays 'Closed' if the `closed` prop is `true`", () => {
      const closed = true;
      const {getByText} = render(<Display closed={closed}/>);
      getByText("Closed"); 
  });
  it("displays 'Open' if the `open` prop is `true`", () => {
      const closed = false;
      const {getByText} = render(<Display closed={closed} />);
      getByText("Open");
  });
  it("displays 'Locked' if the `locked` prop is `true`", () => {
      const locked = true;
      const {getByText} = render(<Display locked={locked} />);
      getByText("Locked");
  });
   it("displays 'Unlocked' if the `unlocked` prop is `true`", () => {
       const locked = false;
       const {getByText} = render(<Display locked={locked} />);
       getByText("Unlocked");
  });
//   it("should use 'red-led' class when 'locked'", () => {
//       const locked = true;
//       const {container} = render(<Display locked={locked} />)
//       expect(getByText('Locked')).toHaveClass('red-led');
//   });
//   it("should use 'red-led' class when 'closed'", () => {
//       const closed = true;
//       const {getByText} = render(<Display locked={locked} />)
//       expect(getByText('Closed')).toHaveClass('red-led');
//   });
//   it("should use 'green-led' class when 'unlocked'", () => {
//       const locked = false;
//       const {getByText} = render(<Display locked={locked} />);
//       expect(getByText('Unlocked')).toHaveClass('green-led')
//   });
// it("should use 'green-led' class when 'open'", () => {

//   });
});


/*
SHOULD:
- displays if gate is open/closed and if it is locked/unlocked
- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
- when `locked` or `closed` use the `red-led` class
- when `unlocked` or `open` use the `green-led` class
*/