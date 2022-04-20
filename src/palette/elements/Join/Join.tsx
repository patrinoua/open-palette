// import { flattenChildren } from "app/utils/flattenChildren"
import React from "react"

interface JoinProps {
  separator: React.ReactElement
  /** Flatten out nested fragments. Useful for Joins with conditional rendering */
  flatten?: boolean
}

/**
 * `Join` is a higher order component that renders a separator component
 * between each of `Join`'s direct children.
 *
 * @example
 *
 *  <Join separator={<SomeComponent/>}>
 *    <child1/>
 *    <child2/>
 *    <child3/>
 *  </Join>
 *
 * which renders
 *
 * <child1/>
 * <SomeComponent/>
 * <child2/>
 * <SomeComponent/>
 * <child3/>
 */
export const Join: React.FC<JoinProps> = ({ separator, children, flatten = false }) => {
  // const childArray = flatten ? flattenChildren(children) : React.Children.toArray(children)
  const childArray = React.Children.toArray(children)

  return childArray.reduce((acc, curr, currentIndex) => {
    acc.push(
      React.cloneElement(curr as React.ReactElement<any>, {
        key: `join-${currentIndex}`,
      })
    )

    if (currentIndex !== childArray.length - 1) {
      acc.push(
        separator &&
          React.cloneElement(separator, {
            key: `join-sep-${currentIndex}`,
          })
      )
    }

    return acc
  }, [] as any)
}
