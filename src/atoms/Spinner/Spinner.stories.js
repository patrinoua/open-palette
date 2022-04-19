import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Text } from 'react-native'
import { Spinner } from './Spinner'
import { Flex } from '../Flex'
export default {
  title: 'Spinner',
}

// Error: "ThemeContext is not defined"

export const spinner = () => (
  <>
    <Text>Spacer</Text>
    <Flex>
      <Spinner />
      <Text>lalala 2</Text>
      <Text>lalala 2</Text>
      <Spinner />
    </Flex>
  </>
)

// On-Device Register
storiesOf('Loading', module).add('Spinner', spinner)
