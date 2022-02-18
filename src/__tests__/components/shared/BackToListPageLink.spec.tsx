/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import BackToListPageLink from '../../../components/shared/BackToListPageLink';

test('BackToListPageLink', () => {
  const name = "field"
  const { asFragment } = render(<BackToListPageLink name={name} />);
  expect(asFragment()).toMatchSnapshot();
});