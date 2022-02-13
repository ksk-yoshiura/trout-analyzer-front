/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LureDetail from '../../../../components/model/lures/LureDetail';

test('LureDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<LureDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});