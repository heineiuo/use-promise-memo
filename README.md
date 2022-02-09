# use-promise-memo

```tsx
import { usePromiseMemo } from 'use-promise-memo'

function App(){
  const promise = usePromiseMemo(() => {
    return new Promise(resolve => setTimeout(resolve, 3000))
  }, [])

  return (
    <View>
      <Text>
        {promise.pending
          ? 'Loading...'
          : promise.rejected
          ? promise.result.message
          : 'Done'}
      </Text>
    </View>
  )
}

```