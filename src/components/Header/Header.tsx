import React from 'react';
import styles from './Header.module.css';

type PropsType = {
    onButtonClickSmall: () => void
    onButtonClickBig: () => void
}

const Header: React.FC<PropsType> = ({onButtonClickSmall, onButtonClickBig}) => {
    return (
        <div>
            <button onClick={onButtonClickSmall} type="button" className={`btn btn-primary btn-lg ${styles.button}`}>
                Small data volume
            </button>
            <button onClick={onButtonClickBig} type="button" className={`btn btn-secondary btn-lg ${styles.button}`}>
                Big data volume
            </button>
        </div>
    )
}

export default Header
