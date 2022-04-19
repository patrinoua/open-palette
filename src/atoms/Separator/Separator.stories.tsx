import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Spacer } from '../Spacer'
import { Text } from 'react-native'
import { Separator } from './Separator'

export default {
  title: 'Separator..2',
}

export const separator = () => (
  <>
    <Spacer m={1} />
    <Text>lalala 2</Text>
    <Separator />
    <Text>lalala 2</Text>
    <Text>lalala 2</Text>
    <Separator />
  </>
)

// On-Device Register
storiesOf('Separator 2', module).add('Separator 2', separator)