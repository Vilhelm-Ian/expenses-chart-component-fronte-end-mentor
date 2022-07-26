import styles from "../styles/Home.module.scss";

const Collumn = ({ day, amount }) => {
	return (
		<div className={styles.data}>
			<div style={{ height: amount }} className={styles.data__collumn}>
				.
			</div>
			<p className={styles.data__day}>{day}</p>
		</div>
	);
};

export default Collumn;
