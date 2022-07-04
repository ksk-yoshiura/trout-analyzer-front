/**
 * @jest-environment jsdom
 */
import React from 'react';

import LineDetail from '../../../../components/model/lines/LineDetail';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('LineDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<LineDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});