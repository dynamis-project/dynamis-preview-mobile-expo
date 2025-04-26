import { Text } from 'react-native'
import { ScreenRenderer } from '../../components/ScreenRenderer'
import { DynamicRenderer } from '../../components/DynamicRenderer/DynamicRenderer'

const mockData = {
  id: 'home-screen',
  title: 'Welcome to Dynamis!',
  components: [
    {
      type: 'text',
      props: {
        value: 'Hello, this is server-driven!',
        fontSize: 24,
        color: '#333333',
      },
    },
    {
      type: 'button',
      props: {
        title: 'Click Me',
        action: { type: 'navigate', screenId: 'next-screen' },
      },
    },
  ],
}

const mock = {
  type: 'view',
  props: {
    flexDirection: 'row',
    children: [
      { type: 'text', props: { value: 'Left', fontSize: 18, color: '#000' } },
      { type: 'text', props: { value: 'Right', fontSize: 18, color: '#000' } },
    ],
  },
}

const mock2 = {
  type: 'view',
  props: {
    flexDirection: 'row',
    children: [
      { type: 'button', props: { title: 'Left', fontSize: 18, color: '#000' } },
      { type: 'text', props: { value: 'Right', fontSize: 18, color: '#000' } },
    ],
  },
}

const threeMock = [mock, mock2]

export const HomeScreen = () => {
  return (
    <>
      {threeMock.map((item, index) => (
        <DynamicRenderer key={String(index)} component={item} />
      ))}
    </>
  )
}
