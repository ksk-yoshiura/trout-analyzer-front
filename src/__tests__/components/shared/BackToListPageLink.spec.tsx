/**
 * @jest-environment jsdom
 */
import React from 'react';

import BackToListPageLink from '../../../components/shared/BackToListPageLink';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';

test('BackToListPageLink', () => {
  const name = "field"
  const { asFragment } = render(<BackToListPageLink name={name} />);
  expect(asFragment()).toMatchSnapshot();
});