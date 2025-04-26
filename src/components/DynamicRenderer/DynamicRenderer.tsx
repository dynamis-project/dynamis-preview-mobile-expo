import { Text, View, Button } from 'react-native'
import type { UIComponent } from '../ScreenRenderer/types'

type DynamicRendererProps = {
  component: UIComponent
}

export function DynamicRenderer({ component }: DynamicRendererProps) {
  switch (component.type) {
    case 'text':
      return (
        <Text
          style={{
            fontSize: component.props.fontSize,
            color: component.props.color,
          }}
        >
          {component.props.value}
        </Text>
      )
    case 'button':
      return (
        <Button
          title={component.props.title}
          onPress={() => {
            // You can handle the action later
            console.log('Button pressed!')
          }}
        />
      )
    case 'view':
      return (
        <View>
          {component.props.children.map((child, index) => (
            <DynamicRenderer key={index} component={child} />
          ))}
        </View>
      )
    default:
      return null
  }
}
