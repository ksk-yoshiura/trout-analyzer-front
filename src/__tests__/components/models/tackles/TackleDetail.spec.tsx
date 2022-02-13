/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import TackleDetail from '../../../../components/model/tackles/TackleDetail';

test('TackleDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<TackleDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});