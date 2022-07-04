/**
 * @jest-environment jsdom
 */
import React from 'react';

import RodsList from '../../../../components/model/rods/RodsList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RodsList', () => {
  const isTackle = true
  const { asFragment } = render(<RodsList isTackle={isTackle} />);
  expect(asFragment()).toMatchSnapshot();
});