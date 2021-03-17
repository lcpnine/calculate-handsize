import { FC } from 'react'
import { BigButton } from 'components/buttons'
import { ButtonColor } from 'constants/colors'

const MainPage: FC = () => {
  return (
    <div className="main">
      <div className="main__text">
        <div className="main__text-title">Show me the hand size</div>
        <div className="main__text-description">This is description</div>
      </div>
      <div className="main__examples">
        <img src="https://user-images.githubusercontent.com/52521363/111510104-cda33e00-8790-11eb-9fd9-f541026e6349.jpg" />
        <img src="https://user-images.githubusercontent.com/52521363/111510096-caa84d80-8790-11eb-8b0e-a3c039759e24.png" />
      </div>
      <div className="main__buttons">
        <BigButton color={ButtonColor.BLUE} onClick={() => {}}>
          I have a picture
        </BigButton>
        <BigButton color={ButtonColor.WHITE} onClick={() => {}}>
          I will take a picture
        </BigButton>
      </div>
    </div>
  )
}

export default MainPage
