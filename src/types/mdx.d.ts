declare module 'import-all.macro' {
  const importAll: any
  export default importAll
}

declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}
