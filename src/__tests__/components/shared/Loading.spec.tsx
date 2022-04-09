/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import Loading from '../../../components/shared/Loading';

test('Loading', () => {
  const typeNum = 1
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});