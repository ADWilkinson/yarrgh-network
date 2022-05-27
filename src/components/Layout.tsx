import Header from './Header'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import Image from 'next/image'
import bgImage from '@images/bg.png'
import cardImage from '@images/card.jpg'
import iconImage from '@images/icon.png'

const Layout = ({ children }) => {
	const meta = {
		title: `yarrgh: the pirate network`,
		description: `the pirate network.`,
		image: `https://yarrgh.network${cardImage.src}`,
	}

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="title" content={meta.title} />
				<meta name="description" content={meta.description} />
				<link rel="icon" type="image/png" href={iconImage.src} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://yarrgh.network" />
				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:image" content={meta.image} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://yarrgh.network" />
				<meta property="twitter:title" content={meta.title} />
				<meta property="twitter:description" content={meta.description} />
				<meta property="twitter:image" content={meta.image} />
			</Head>
			<div className="bg-theme-navy text-theme-oldlace min-h-screen font-wigrum">
				{/* <div className="fixed inset-0 -z-10 h-screen">
					<Image src={bgImage} placeholder="blur" layout="fill" alt="" />
				</div> */}
				<Header />
				<main className="max-w-2xl mx-auto space-y-8 px-6 md:px-0 font-medium font-wigrum">{children}</main>
				<Toaster position="bottom-right" />
			</div>
		</>
	)
}

export default Layout
