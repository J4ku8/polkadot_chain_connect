import { useEffect, useState } from 'react';
import { ApiPromise } from '@polkadot/api';
import { Account } from "@polkadot-onboard/core";

interface Api {
	api: ApiPromise | null;
}

interface Interface extends Api {
	data: Account
}

interface BalanceInterface extends Api {
	address: string;
	setBalance: (balance: number) => void;
}

const getBalance = async ({ api, address, setBalance }: BalanceInterface) => {
	await api?.query?.system.account(address, ({ data: balance }) => {
		setBalance(balance.free);
	});
};

const Card = ({ data, api }: Interface) => {
	const [balance, setBalance] = useState<number>(0);
	const [assets, setAssets] = useState<any[]>([]);
	const { address, name } = data;

	useEffect(() => {
		(async () => {
			await getBalance({ api, address, setBalance });
			const assets = await api?.query?.assetRegistry.assets.entries();
			assets?.map(([assetId, assetData]) =>
				setAssets(prevState => [...prevState, assetData.toJSON()]),
			);
		})();
	}, [api]);

	return (
		<div className="rounded-xl w-auto h-52 mx-auto mt-10 bg-gradient-to-r p-[6px] from-primary to-purple flex items-center">
			<div className="flex flex-col justify-between h-full w-full bg-secondary rounded-lg shadow p-2">
				<div className="flex flex-col items-center pt-4 gap-y-1">
					<h5 className="text-xl font-medium text-textBase mb-1">{name}</h5>
					<span className="text-sm text-inverse">{`id: ${address}`}</span>
					<span className="text-sm text-inverse">{`balance: ${balance} HDX`}</span>
					<div className="text-inverse ">
						<h6 className="text-sm text-center">assets</h6>
						<ul className="h-12 overflow-y-scroll scroll-smooth">
							{assets?.map((asset, i) => (
								<li key={`${asset.name}${i}${asset.existentialDeposit}`}>
									{asset.name}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
