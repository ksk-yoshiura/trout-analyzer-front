/**
 * @jest-environment jsdom
 */
import React from 'react';

import SignUpForm from '../../../../components/model/auth/SignUpForm';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('SignUpForm', () => {
  const { asFragment } = render(<SignUpForm />);
  expect(asFragment()).toMatchSnapshot();
});