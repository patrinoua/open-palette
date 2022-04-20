import { renderWithWrappers } from "app/tests/renderWithWrappers"
import React from "react"
import { FlatList } from "react-native"
import ParentAwareScrollView from "./ParentAwareScrollView"

const props = {
  aFunc: jest.fn(),
}

const scrollEvent = {
  nativeEvent: {
    contentSize: { height: 600, width: 400 },
    contentOffset: { y: 150, x: 0 },
    layoutMeasurement: { height: 100, width: 100 },
  },
}

describe("<ParentAwareScrollView>", () => {
  it("receives parent onScroll event when nested in a virtualized list", () => {
    // the ParentAwareScrollView nested inside the Flatlist should
    // react to the parent flatlist scroll by calling props.aFunc
    const AFlatList = () => (
      <FlatList
        data={[
          <ParentAwareScrollView key="a" onScroll={(e: typeof scrollEvent) => props.aFunc(e)} />,
        ]}
        renderItem={({ item }) => item}
      />
    )
    const tree = renderWithWrappers(<AFlatList />)
    const flatList = tree.root.findByType(FlatList)
    flatList.instance._listRef._onScroll(scrollEvent)

    expect(props.aFunc).toHaveBeenCalled()
    expect(props.aFunc).toHaveBeenCalledWith(scrollEvent)
  })
})
