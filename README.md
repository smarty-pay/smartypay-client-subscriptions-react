# SmartyPay Subscriptions SDK for React


# How to install
```bash
npm i smartypay-client-subscriptions-react
```

# How to use with [Metamask Browser Extension](https://metamask.io/download/)
- Addition install [smartypay-client-metamask](https://www.npmjs.com/package/smartypay-client-metamask)
```bash
npm i smartypay-client-metamask
```

# List of all available hooks and static methods
[See docs](https://smarty-pay.github.io/smartypay-client-subscriptions-react/modules.html) 

# Connect to Metamask wallet
- Use hook: [useConnectToWalletCallback](https://smarty-pay.github.io/smartypay-client-subscriptions-react/modules.html#useConnectToWalletCallback)
- See [demo project](https://github.com/smarty-pay/smartypay-subscriptions-demo-react) for more details
```ts
import {SmartyPayMetamaskProvider} from 'smartypay-client-metamask';
import {useConnectToWalletCallback, useSmartyApiLocked} from 'smartypay-client-subscriptions-react';


export function MetamaskConnectButton(){

  const isSmartyApiLocked = useSmartyApiLocked();
  const connectToMetamask = useConnectToWalletCallback(SmartyPayMetamaskProvider);

  return (
    <>
      <button
        disabled={isSmartyApiLocked}
        onClick={connectToMetamask}
      >
        Metamask
      </button>
    </>
  )
}
```

# Activate subscription
- Use static method: [activateSubscriptionInWallet](https://smarty-pay.github.io/smartypay-client-subscriptions-react/modules.html#activateSubscriptionInWallet)
- See [demo project](https://github.com/smarty-pay/smartypay-subscriptions-demo-react) for more details

# Pause subscription
- Use static method: [pauseSubscriptionInWallet](https://smarty-pay.github.io/smartypay-client-subscriptions-react/modules.html#pauseSubscriptionInWallet)
- See [demo project](https://github.com/smarty-pay/smartypay-subscriptions-demo-react) for more details

# UnPause subscription
- Use static method: [unPauseSubscriptionInWallet](https://smarty-pay.github.io/smartypay-client-subscriptions-react/modules.html#unPauseSubscriptionInWallet)
- See [demo project](https://github.com/smarty-pay/smartypay-subscriptions-demo-react) for more details

# Cancel subscription
- Use static method: [cancelSubscriptionInWallet](https://smarty-pay.github.io/smartypay-client-subscriptions-react/modules.html#cancelSubscriptionInWallet)
- See [demo project](https://github.com/smarty-pay/smartypay-subscriptions-demo-react) for more details

# Monitoring operation process
- Use static method: [addSubscriptionsListener](https://smarty-pay.github.io/smartypay-client-subscriptions-react/modules.html#addSubscriptionsListener)
- See [demo project](https://github.com/smarty-pay/smartypay-subscriptions-demo-react) for more details
