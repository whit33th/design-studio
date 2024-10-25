
import styles from './Button.module.scss'

function BorderBtn({children}) {
	return (
		<button className={styles.BorderBtn}>{children}</button>
	)
}

export default BorderBtn