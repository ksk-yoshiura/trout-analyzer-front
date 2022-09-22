import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import type { NextRouter } from 'next/router';
import React from 'react'

// Chakra UI対応
const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  const mockRouter: NextRouter = {
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    basePath: '/',
    isLocaleDomain: true,
    isReady: true,
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isPreview: false,
  };
  return (
    <ChakraProvider>
      <RouterContext.Provider value={mockRouter}>
        {children}
      </RouterContext.Provider>
    </ChakraProvider>
  )
}

const customRender = (ui: JSX.Element, options?: any) => {
  render(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react'
export { customRender as render }