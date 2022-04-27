/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import  { useSession } from "next-auth/react";
import  { Session } from "next-auth";
import MainContent from '../../../components/layout/MainContent';

jest.mock("next-auth/react")

test('MainContent', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  const { asFragment } = render(<MainContent />);
  expect(asFragment()).toMatchSnapshot();
});