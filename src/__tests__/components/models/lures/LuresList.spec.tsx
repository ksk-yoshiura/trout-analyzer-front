/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LuresList from '../../../../components/model/lures/LuresList';

test('LuresList', () => {
  const { asFragment } = render(<LuresList />);
  expect(asFragment()).toMatchSnapshot();
});