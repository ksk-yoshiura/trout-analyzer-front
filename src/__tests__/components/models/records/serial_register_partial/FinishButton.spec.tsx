/**
 * @jest-environment jsdom
 */
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React from 'react';

import FinishButton from '../../../../../components/model/records/serial_register_partial/FinishButton';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';

jest.mock("next-auth/react")

test('FinishButton', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
  const recordId = "1"
  const { asFragment } = render(<FinishButton recordId={recordId} />);
  expect(asFragment()).toMatchSnapshot();
});