/**
 * @jest-environment jsdom
 */
import React from 'react';

import RadioCard from '../../../components/shared/RadioCard';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';

test('RadioCard', () => {
  const name = "field"
  const { asFragment } = render(<RadioCard name={name} />);
  expect(asFragment()).toMatchSnapshot();
});