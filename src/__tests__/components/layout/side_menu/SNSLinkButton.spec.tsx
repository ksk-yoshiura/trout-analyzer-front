/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import SNSLinkButton from '../../../../components/layout/side_menu/SNSLinkButton';

test('SNSLinkButton', () => {
  const { asFragment } = render(<SNSLinkButton />);
  expect(asFragment()).toMatchSnapshot();
});