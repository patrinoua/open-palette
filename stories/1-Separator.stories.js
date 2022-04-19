import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Spacer } from '../src/atoms/Spacer'
import { Text } from 'react-native'
import { Separator } from '../src/atoms/Separator'

export default {
  title: 'Separator..',
}

export const separator = () => (
  <>
    <Spacer m={1} />
    <Text>lalala</Text>
    <Separator />
    <Text>lalala</Text>
    <Separator />
  </>
)

// On-Device Register
storiesOf('Separator', module).add('Separator', separator)
