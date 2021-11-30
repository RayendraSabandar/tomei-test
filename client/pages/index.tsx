import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
	<div className={styles.container}>
		<Head>
			<title>Create a new account</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.main}>
			<div>
				<Image src='/Logo.png' alt='tomei logo' width={200} height={200}/>
			</div>
			<div>
				<div className={styles.steps}>
					<Image src='/Wizard-Step1.png' alt='Wizard-Step1' width={50} height={60}/>
					<Image src='/Wizard-HorizontalBar.png' alt='Wizard-Step1' width={50} height={2.5}/>
					<Image src='/Wizard-Step2.png' alt='Wizard-Step1' width={50} height={60}/>
					<Image src='/Wizard-HorizontalBar.png' alt='Wizard-Step1' width={50} height={2.5}/>
					<Image src='/Wizard-Step3.png' alt='Wizard-Step1' width={50} height={60}/>
					<Image src='/Wizard-HorizontalBar.png' alt='Wizard-Step1' width={50} height={2.5}/>
					<Image src='/Wizard-Step4.png' alt='Wizard-Step1' width={50} height={60}/>
					<Image src='/Wizard-HorizontalBar.png' alt='Wizard-Step1' width={50} height={2.5}/>
					<Image src='/Wizard-Step5.png' alt='Wizard-Step1' width={50} height={60}/>
				</div>

				<div className={styles.steps}>
					<div>
						<p>Step 1:</p>
						<p>Create your account password</p>
					</div>
					<div>
						<p>Step 2:</p>
						<p>Personal Information</p>
					</div>
					<div>
						<p>Step 3:</p>
						<p>Employment Details</p>
					</div>
					<div>
						<p>Step 4:</p>
						<p>Upload Documents</p>
					</div>
					<div>
						<p>Step 5:</p>
						<p>Complete</p>
					</div>
				</div>
			</div>
			<div>
				<p>form</p>
			</div>
			<div>
				<p>button</p>
			</div>
			
			{/* <h1 className={styles.title}>
			Welcome to <a href="https://nextjs.org">Next.js!</a>
			</h1>

			<p className={styles.description}>
			Get started by editing{' '}
			<code className={styles.code}>pages/index.tsx</code>
			</p>

			<div className={styles.grid}>
			<a href="https://nextjs.org/docs" className={styles.card}>
				<h2>Documentation &rarr;</h2>
				<p>Find in-depth information about Next.js features and API.</p>
			</a>

			<a href="https://nextjs.org/learn" className={styles.card}>
				<h2>Learn &rarr;</h2>
				<p>Learn about Next.js in an interactive course with quizzes!</p>
			</a>

			<a
				href="https://github.com/vercel/next.js/tree/master/examples"
				className={styles.card}
			>
				<h2>Examples &rarr;</h2>
				<p>Discover and deploy boilerplate example Next.js projects.</p>
			</a>

			<a
				href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				className={styles.card}
			>
				<h2>Deploy &rarr;</h2>
				<p>
				Instantly deploy your Next.js site to a public URL with Vercel.
				</p>
			</a>
			</div> */}
		</main>

		{/* <footer className={styles.footer}>
			<a
			href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
			target="_blank"
			rel="noopener noreferrer"
			>
			Powered by{' '}
			<span className={styles.logo}>
				<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
			</span>
			</a>
		</footer> */}
	</div>
  )
}

export default Home