import type { AppProps } from 'next/app'
import { FC } from 'react'

import 'styles/base/reset.scss'
import 'styles/base/global.scss'
import 'styles/components/buttons.scss'
import 'styles/layout/main.scss'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
