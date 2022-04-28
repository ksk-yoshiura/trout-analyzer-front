/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import FinishButton from '../../../../../components/model/records/serial_register_partial/FinishButton';

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