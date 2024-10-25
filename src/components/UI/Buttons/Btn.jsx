import styles from './Button.module.scss'

function Btn({children}) {
	return (
		<button className={styles.Btn}>{children}</button>
	)
}

export default Btn