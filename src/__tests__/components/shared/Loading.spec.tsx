/**
 * @jest-environment jsdom
 */
import React from 'react';

import Loading from '../../../components/shared/Loading';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';

test('Loading', () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});