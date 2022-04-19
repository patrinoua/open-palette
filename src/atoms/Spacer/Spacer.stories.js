import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Text } from 'react-native'
import { Spacer } from './Spacer'

export default {
  title: 'Spacer',
}

export const spacer = () => (
  <>
    <Text>separatorseparatorseparatorseparator 2</Text>
    <Spacer />
    <Text>lalala 2</Text>
    <Text>lalala 2</Text>
    <Spacer />
  </>
)

// On-Device Register
storiesOf('Spacer', module).add('Spacer', spacer)
