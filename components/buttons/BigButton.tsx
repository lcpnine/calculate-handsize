import { ReactElement, MouseEvent } from 'react'

interface BigButtonProps {
  children: string
  onClick: (() => void) | ((event: MouseEvent<HTMLElement>) => void)
}

const BigButton = ({ children, onClick }: BigButtonProps): ReactElement => {
  return (
    <button className="button-big" onClick={onClick}>
      {children}
    </button>
  )
}

export default BigButton
