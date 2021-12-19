import type { VFC } from 'react'

type HomeTsxViewProps = {
} & HomeTsxProps

const HomeTsxView: VFC<HomeTsxViewProps> = (props) => {
  return null
}

type HomeTsxProps = {
}

export const HomeTsx: VFC<HomeTsxProps> = (props) => {
  return <HomeTsxView {...props} />
}

export default HomeTsx