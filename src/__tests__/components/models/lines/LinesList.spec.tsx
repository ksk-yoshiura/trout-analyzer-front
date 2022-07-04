/**
 * @jest-environment jsdom
 */
import React from 'react';

import LinesList from '../../../../components/model/lines/LinesList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('LinesList', () => {
  const isTackle = true
  const { asFragment } = render(<LinesList isTackle={isTackle} />);
  expect(asFragment()).toMatchSnapshot();
});