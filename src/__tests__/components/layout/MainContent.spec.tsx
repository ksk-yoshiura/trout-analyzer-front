/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import MainContent from '../../../components/layout/MainContent';

test('MainContent', () => {
  const { asFragment } = render(<MainContent />);
  expect(asFragment()).toMatchSnapshot();
});