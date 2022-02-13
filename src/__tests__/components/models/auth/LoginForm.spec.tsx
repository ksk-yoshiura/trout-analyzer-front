/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import SignUpForm from '../../../../components/model/auth/SignUpForm';

test('SignUpForm', () => {
  const { asFragment } = render(<SignUpForm />);
  expect(asFragment()).toMatchSnapshot();
});