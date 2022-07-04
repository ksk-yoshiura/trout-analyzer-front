/**
 * @jest-environment jsdom
 */
import React from 'react';

import SNSLinkButton from '../../../../components/layout/side_menu/SNSLinkButton';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('SNSLinkButton', () => {
  const { asFragment } = render(<SNSLinkButton />);
  expect(asFragment()).toMatchSnapshot();
});