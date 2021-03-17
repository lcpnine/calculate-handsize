import { ReactElement, MouseEvent } from 'react'
import { ButtonColor } from 'constants/colors'

interface BigButtonProps {
  children: string
  color: ButtonColor
  onClick: (() => void) | ((event: MouseEvent<HTMLElement>) => void)
}

const BigButton = ({ children, color, onClick }: BigButtonProps): ReactElement => {
  return (
    <button className={`button-big button-${color}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default BigButton
