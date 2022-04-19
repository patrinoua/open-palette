import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Text } from 'react-native'
import { Separator } from './Separator'

export default {
  title: 'Separator',
}

export const separator = () => (
  <>
    <Text>lalala 1</Text>
    <Separator />
    <Text>lalala 2</Text>
    <Separator />
    <Text>lalala 2</Text>
    <Separator />
  </>
)

// On-Device Register
storiesOf('Space Elements', module).add('Separator', separator)
