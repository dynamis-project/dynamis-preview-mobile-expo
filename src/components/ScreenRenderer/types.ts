import type { ViewProps } from 'react-native'

export type UIComponent =
  | { type: 'view'; props: ViewProps & { children: UIComponent[] } }
  | {
      type: 'text'
      props: { value: string; fontSize?: number; color?: string }
    }
  | { type: 'button'; props: { title: string; action?: Action } }
  | { type: 'image'; props: { uri: string; width?: number; height?: number } }
  | { type: 'textInput'; props: { placeholder?: string; value?: string } }
  | { type: 'list'; props: { items: UIComponent[] } }
  | { type: 'scrollView'; props: { children: UIComponent[] } }
  | { type: 'spacer'; props: { size: number } }
  | { type: 'divider'; props: { color?: string; thickness?: number } }
  | { type: 'icon'; props: { name: string; size?: number; color?: string } }
  | { type: 'card'; props: { children: UIComponent[] } }
  | {
      type: 'modalTrigger'
      props: { title: string; modalContent: UIComponent[] }
    }

export type Action =
  | { type: 'navigate'; screenId: string }
  | { type: 'alert'; message: string }
