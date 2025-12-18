import * as React from 'react'

export function composeRefs<T>(
  ...refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
  return (node: T | null) => {
    for (const ref of refs) {
      if (!ref) continue

      if (typeof ref === 'function') {
        ref(node)
      } else {
        // RefObject<T>
        ref.current = node
      }
    }
  }
}
