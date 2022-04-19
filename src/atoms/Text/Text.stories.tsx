import { storiesOf } from '@storybook/react-native'
import { Text } from '.'

// import { Text } from 'react-native'

// const variants: Array<TextProps['variant']> = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

storiesOf('Text', module).add('Basic props', () => (
  <>
    <Text>regular ~~ This is a text.</Text>
  </>
))
