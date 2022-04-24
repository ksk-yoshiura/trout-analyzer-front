/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RodsList from '../../../../components/model/rods/RodsList';

test('RodsList', () => {
  const isTackle = true
  const { asFragment } = render(<RodsList isTackle={isTackle} />);
  expect(asFragment()).toMatchSnapshot();
});