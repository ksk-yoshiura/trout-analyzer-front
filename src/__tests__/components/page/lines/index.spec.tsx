/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LineIndex from '../../../../components/page/lines/index';

test('LineIndex', () => {
  const { asFragment } = render(<LineIndex />);
  expect(asFragment()).toMatchSnapshot();
});