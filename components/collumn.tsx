import styles from "../styles/Home.module.scss";

const Collumn = ({
	day,
	amount,
	biggest,
}: {
	day: string;
	amount: number;
	biggest: boolean;
}) => {
	return (
		<div className={styles.data}>
			<div
				style={{ height: amount * 2 }}
				className={`${styles.data__collumn} ${
					biggest ? styles.data__bigest : ""
				}`}
			></div>
			<p>{day}</p>
		</div>
	);
};

export default Collumn;
