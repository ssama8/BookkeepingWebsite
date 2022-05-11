import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
export default function Home() {
	return (
		<main className={styles.container}>
			<Hero />
			<HomeContent />
		</main>
	);
}
