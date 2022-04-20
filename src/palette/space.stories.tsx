import { storiesOf } from "@storybook/react-native"
import { Text } from "palette"
import React from "react"
import { View } from "react-native"
import { withTheme } from "storybook/decorators"
import { List } from "storybook/helpers"
import { Separator } from "./elements"
import { useSpace } from "./hooks"
import { SpacingUnitV3 } from "./Theme"

const SpaceLine = ({ space: theSpace }: { space: SpacingUnitV3 }) => {
  const space = useSpace()
  return (
    <View>
      <View
        style={{
          width: space(theSpace),
          borderBottomWidth: 1,
          borderColor: "black",
          marginBottom: 4,
        }}
      />
      <Text color="black">"{theSpace}"</Text>
      <Text color="black">{`${space(theSpace)}px`}</Text>
    </View>
  )
}

storiesOf("Spaces", module)
  .addDecorator(withTheme)
  .add("SpaceLine", () => (
    <List style={{ marginLeft: 50 }} contentContainerStyle={{ alignItems: "flex-start" }}>
      <SpaceLine space="0.5" />
      <SpaceLine space="1" />
      <SpaceLine space="2" />
      <SpaceLine space="4" />
      <SpaceLine space="6" />
      <SpaceLine space="12" />
    </List>
  ))
  .add("Separator", () => (
    <>
      <Separator />
      <Text color="black">lalala</Text>
      <Separator />
      <Text color="black">lalala</Text>
      <Separator />
      <Text color="black">lalala</Text>
      <Separator />
    </>
  ))
