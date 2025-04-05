import { Link } from 'react-router'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import Logo from '~/assets/logo.svg'

export default function Header() {
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { address } = useAccount()
  const hundleWallet = async () => {
    !address ? connect({ connector: connectors[0] }) : disconnect()
  }

  return (
    <header className="sticky top-0 flex h-16 flex-row items-center justify-between bg-stone-5/50 px-4 backdrop-blur-sm">
      <Link to="/">
        <img src={Logo} alt="EPO" height={52} width={52} />
      </Link>
      <button type="button" className="btn" onClick={() => hundleWallet()}>
        {!address ? (
          <span className="flex items-center">
            <ph-sign-in size="28" />
            <span className="ml-2">Connect</span>
          </span>
        ) : (
          <span className="flex items-center">
            <ph-sign-out size="28" />
            <span className="ml-2">Disconnect</span>
          </span>
        )}
      </button>
    </header>
  )
}
