import * as React from 'react'
import Eventcal from '../models/eventcal'

interface Props {
  todos: Eventcal[],
  onTodoClicked: (EventcalId: number) => void
}
interface State { }

export default class AddForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { todos, onTodoClicked } = this.props
    return (
      <ul>
         {
          todos.map(todo => (
            <li key={todo.id}
              onClick={() => onTodoClicked(todo.id)}
              style={{  }}>
              {todo.title}
            </li>)
          )
        } 
      </ul>
    )
  }
}