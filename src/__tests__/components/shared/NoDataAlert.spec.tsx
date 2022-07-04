/**
 * @jest-environment jsdom
 */
import React from 'react';

import NoDataAlert from '../../../components/shared/NoDataAlert';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';

test('NoDataAlert', () => {
  const title = 'lures'
  const { asFragment } = render(<NoDataAlert title={title} />);
  expect(asFragment()).toMatchSnapshot();
});