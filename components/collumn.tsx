import styles from "../styles/Home.module.scss";

const Collumn = ({ day, amount, biggest }) => {
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
