import { useWallets } from '@polkadot-onboard/react';
import { Account, BaseWallet } from '@polkadot-onboard/core';
import Wallet from '@/components/Wallet';
import { useMemo, useState } from 'react';
import { ApiPromise } from '@polkadot/api';
import Card from '@/components/Card';

const Wallets = () => {
	const { wallets } = useWallets();
	const [accounts, setAccounts] = useState<Account[] | null>(null);
	const [api, setApi] = useState<ApiPromise | null>(null);

	const areAccountsLoaded = useMemo(
		() => !!accounts && accounts.length > 0,
		[accounts],
	);

	return areAccountsLoaded ? (
		<div>
			<button
				className="mt-64 mb-16 px-4 py-2 border-solid border-2 rounded-lg border-inverse cursor-pointer"
				onClick={() => {
					setAccounts(null);
					setApi(null);
				}}
			>
				Back
			</button>
			<div className="flex items-center justify-center flex-col gap-4 max-h-screen mb-16">
				{accounts?.map(data => (
					<div key={data.address}>
						<Card api={api} data={data} />
					</div>
				))}
			</div>
		</div>
	) : (
		<div className="flex items-center justify-center flex-row flex-wrap gap-8 gap-y-16">
			{wallets?.map((wallet: BaseWallet) => (
				<Wallet
					key={wallet.metadata.title}
					wallet={wallet}
					setAccounts={setAccounts}
					setApi={setApi}
				/>
			))}
		</div>
	);
};

export default Wallets;
