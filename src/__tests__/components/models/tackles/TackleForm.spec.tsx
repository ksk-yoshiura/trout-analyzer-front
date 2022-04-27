/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import  { useSession } from "next-auth/react";
import  { Session } from "next-auth";
import TackleForm from '../../../../components/model/tackles/TackleForm';

jest.mock("next-auth/react")

test('TackleForm', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  // ID
  const chosenId = '1'
  const { asFragment } = render(<TackleForm chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});