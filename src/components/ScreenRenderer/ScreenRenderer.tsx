import { Text } from 'react-native'

interface ScreenRendererProps {
  data: {
    id: string
    title: string
    components: (
      | {
          type: string
          props: {
            value: string
            fontSize: number
            color: string
            title?: undefined
            action?: undefined
          }
        }
      | {
          type: string
          props: {
            title: string
            action: any
            value?: undefined
            fontSize?: undefined
            color?: undefined
          }
        }
    )[]
  }
}

export const ScreenRenderer = ({ data }: ScreenRendererProps) => {
  console.log(data)
  return <Text style={{ color: 'red' }}>{data.title}</Text>
}
