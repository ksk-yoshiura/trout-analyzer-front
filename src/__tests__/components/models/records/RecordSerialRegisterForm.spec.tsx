/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import RecordSerialRegisterForm from '../../../../components/model/records/RecordSerialRegisterForm';

jest.mock("next-auth/react")

test('RecordSerialRegisterForm', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  // レコードID
  const recordId = "1"
  const { asFragment } = render(<RecordSerialRegisterForm recordId={recordId} />);
  expect(asFragment()).toMatchSnapshot();
});