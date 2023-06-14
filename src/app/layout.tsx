import '../styles/globals.css';
import React from 'react';

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className="h-screen w-screen bg-background flex items-center justify-center">
				{children}
			</body>
		</html>
	);
};

export default RootLayout;