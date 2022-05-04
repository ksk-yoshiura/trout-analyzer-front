/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import NoDataAlert from '../../../components/shared/NoDataAlert';

test('NoDataAlert', () => {
  const title = 'lures'
  const { asFragment } = render(<NoDataAlert title={title} />);
  expect(asFragment()).toMatchSnapshot();
});