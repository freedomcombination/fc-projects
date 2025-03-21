import React from 'react'

type ComponentProps = {
  componentPath?: string
}

export const ComponentBlock: React.FC<ComponentProps> = (prop) => {
  const { componentPath: selectedComponent } = prop

  if (!selectedComponent || selectedComponent === 'none') {
    return null
  }

  const DynamicComponent = () => <div>{selectedComponent}</div> /* React.lazy(() =>
    import(selectedComponent).then((mod) => ({
      default: mod.default,
    }))
  ); */

  return (
    <React.Suspense fallback={<div>Yükleniyor...</div>}>
      <DynamicComponent />
    </React.Suspense>
  )
}
