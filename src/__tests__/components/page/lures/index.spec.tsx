/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LureIndex from '../../../../components/page/lures/index';

test('LureIndex', () => {
  const { asFragment } = render(<LureIndex />);
  expect(asFragment()).toMatchSnapshot();
});