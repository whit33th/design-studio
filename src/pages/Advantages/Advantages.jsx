import styles from './Advantages.module.scss'
import telephone from 'asset/ico/telephone.png'
import wallet from 'asset/ico/wallett.png'
import clock from 'asset/ico/clock.png'
function Advantages() {
	return (
		<div className={styles.Container}>
			<div className={styles.card}>
				<img src={telephone} alt="" />
				<h2>Free initial Consultation</h2>
				<p>Start your project with a comprehensive consultation to understand your business goal and project needs - no charge, no obligations. </p>
			</div>
			<div className={styles.card}>
				<img src={wallet} alt="" />
				<h2>Transparent Pricing</h2>
				<p>Our pricing is straightforward and transparent, offering no suprises. What you see is what you get, always within your budget.</p>
			</div>
			<div className={styles.card}>
				<img src={clock} alt="" />
				<h2>Timely Project Delivary</h2>
				<p>Our team is committed to deliver your project on time without the slightest dalay, without quality loss and with precision.</p>
			</div>

		</div>
	)
}

export default Advantages