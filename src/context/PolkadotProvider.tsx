import { WalletAggregator } from '@polkadot-onboard/core';
import { InjectedWalletProvider } from '@polkadot-onboard/injected-wallets';
import { WalletConnectProvider } from '@polkadot-onboard/wallet-connect';
import { PolkadotWalletsContextProvider } from '@polkadot-onboard/react';
import React from 'react';

const APP_NAME = 'Polkadot Demo';
const config = {
	disallowed: [],
	supported: [
		{
			id: 'polkadot-js',
			title: 'polkadotJS',
			description: 'Basic account injection and signer',
			urls: {
				main: '',
				browsers: {
					chrome:
						'https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd',
					firefox:
						'https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/',
				},
			},
		},
		{
			id: 'talisman',
			title: 'talisman',
			description:
				'Talisman is a Polkadot wallet that unlocks a new world of multichain web3 applications in the Paraverse',
			urls: {
				main: '',
				browsers: {
					chrome:
						'https://chrome.google.com/webstore/detail/talisman-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld',
					firefox:
						'https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/',
				},
			},
		},
	],
};

const ConnectContainer = ({ children }: { children: React.ReactNode }) => {
	const injectedWalletProvider = new InjectedWalletProvider(config, APP_NAME);
	const walletConnectParams = {
		projectId: '4fae85e642724ee66587fa9f37b997e2',
		relayUrl: 'wss://relay.walletconnect.com',
		metadata: {
			name: 'Polkadot Demo',
			description: 'Polkadot Demo',
			url: '#',
			icons: ['/images/wallet-connect.svg'],
		},
	};
	const walletConnectProvider = new WalletConnectProvider(
		walletConnectParams,
		APP_NAME,
	);

	const walletAggregator = new WalletAggregator([
		injectedWalletProvider,
		walletConnectProvider,
	]);

	return (
		<PolkadotWalletsContextProvider walletAggregator={walletAggregator}>
			{children}
		</PolkadotWalletsContextProvider>
	);
};

export default ConnectContainer;
