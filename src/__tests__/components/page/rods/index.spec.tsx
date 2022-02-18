/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RodIndex from '../../../../components/page/rods/index';

test('RodIndex', () => {
  const { asFragment } = render(<RodIndex />);
  expect(asFragment()).toMatchSnapshot();
});