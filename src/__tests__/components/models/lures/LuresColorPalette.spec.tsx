/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LuresColorPalette from '../../../../components/model/lures/LuresColorPalette';

test('LuresColorPalette', () => {
  const { asFragment } = render(<LuresColorPalette />);
  expect(asFragment()).toMatchSnapshot();
});