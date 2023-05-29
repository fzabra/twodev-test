import React from 'react'
import DropDownInput from '../DropDownInput/DropDownInput'
import Icons from '../Icons/Icons';
import styles from './Search.module.scss'

const SearchBar = () => {

return (

<div className={styles.containerSearch}>
<DropDownInput />
<Icons name="search" className={styles.svgSearch} />
<input type="text" />
</div>
)

};

export default SearchBar;