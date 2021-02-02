import React , {useState , useEffect} from 'react';
import { FaSun , FaMoon } from 'react-icons/fa';

const ToogleMode = () => {

    const [icon , setIcon] = useState(localStorage.getItem('Theme') || 'Light');

    const toogleIcons = icon === 'light' ? <FaSun className="sun" /> : <FaMoon className="moon" />;

    const switchTheme  = (event) =>  {
        if(event.target.checked) {
            setIcon('dark');
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode');
        }else {
            setIcon('light');
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
      })

    return (
        <div className="theme-switch-wrapper">
            <span id="toggle-icon">
                {toogleIcons}
            </span>
            <label className="theme-switch">
                <input type="checkbox" onChange={switchTheme} checked={icon=='dark'?true:false}/>
                <div className="slider round"></div>
            </label>
        </div>
    )
}

export default ToogleMode;