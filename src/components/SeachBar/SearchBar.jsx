import React from 'react'
import DropDownInput from '../DropDownInput/DropDownInput'
import Icons from '../Icons/Icons';

const SearchBar = () => {

return <div>
<DropDownInput />
<Icons name="search" className="svg search" />
<input type="text" />
</div>


};

export default SearchBar;