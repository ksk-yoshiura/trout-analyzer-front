/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RodDetail from '../../../../components/model/rods/RodDetail';

test('RodDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<RodDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});