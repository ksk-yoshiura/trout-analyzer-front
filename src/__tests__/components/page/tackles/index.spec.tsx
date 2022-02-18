/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import TackleIndex from '../../../../components/page/tackles/index';

test('TackleIndex', () => {
  const { asFragment } = render(<TackleIndex />);
  expect(asFragment()).toMatchSnapshot();
});