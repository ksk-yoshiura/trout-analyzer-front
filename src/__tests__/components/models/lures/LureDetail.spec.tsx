/**
 * @jest-environment jsdom
 */
import React from 'react';

import LureDetail from '../../../../components/model/lures/LureDetail';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('LureDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<LureDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});