'use client';

import ConnectContainer from '@/context/PolkadotProvider';
import Wallets from '@/components/Wallets';

const IndexPage = () => {
	return (
		<ConnectContainer>
			<div className="text-textBase ">
				<Wallets />
			</div>
		</ConnectContainer>
	);
};

export default IndexPage;
