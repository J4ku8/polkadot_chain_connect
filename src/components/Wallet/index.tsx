import { memo, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { BaseWallet, Account } from '@polkadot-onboard/core';

const Wallet = ({
	wallet,
	setAccounts,
	setApi,
}: {
	wallet: BaseWallet;
	setAccounts: (args: Account[]) => void;
	setApi: (args: ApiPromise) => void;
}) => {
	useEffect(() => {
		(async () => {
			const provider = new WsProvider(
				'wss://hydradx-rococo-rpc.play.hydration.cloud',
			);
			const api = await ApiPromise.create({ provider });
			setApi(api);
		})();
	}, []);

	const walletClickHandler = async () => {
		try {
			await wallet.connect();
			const accounts = await wallet.getAccounts();
			setAccounts(accounts);
		} catch (error) {
			// handle error
		}
	};

	return (
		<div
			className="mb-8 p-2 border-solid border-4 rounded-lg border-primary cursor-pointer"
			onClick={walletClickHandler}
		>
			<div>
				{wallet.metadata.title} {wallet.metadata.version}
			</div>
		</div>
	);
};

export default memo(Wallet);
