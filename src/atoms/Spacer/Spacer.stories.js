import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Text } from 'react-native'
import { Separator } from './Separator'

export default {
  title: 'Spacer',
}

export const spacer = () => (
  <>
    <Text>separatorseparatorseparatorseparator 2</Text>
    <Separator />
    <Text>lalala 2</Text>
    <Text>lalala 2</Text>
    <Separator />
  </>
)

// On-Device Register
storiesOf('Spacer', module).add('Spacer', spacer)
