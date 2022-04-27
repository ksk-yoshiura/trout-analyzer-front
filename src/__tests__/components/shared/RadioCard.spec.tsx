/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import RadioCard from '../../../components/shared/RadioCard';

test('RadioCard', () => {
  const name = "field"
  const { asFragment } = render(<RadioCard name={name} />);
  expect(asFragment()).toMatchSnapshot();
});