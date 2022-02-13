/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LineDetail from '../../../../components/model/lines/LineDetail';

test('LineDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<LineDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});