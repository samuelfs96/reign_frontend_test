import angular_logo from '../icons/angular-icon.png'
import react_logo from '../icons/react-icon.png'
import vue_logo from '../icons/vue-icon.png'
import arrow_down from '../icons/arrow_down.png'
import { useState } from 'react'

interface Props {
  className?: string,
  value: string,
  setSelectValue: any
}

const Select = ({
  className,
  value,
  setSelectValue
}: Props) => {

  const [active, setActive] = useState(false)

  const handleChange = (value: string) => {
    setSelectValue(value)
    setActive(false)
  }

  const renderSelectedOption = (): JSX.Element => {
    return (
      <>
        {
          value === 'angular' ? <img src={angular_logo} alt="img" /> :
          value === 'reactjs' ? <img src={react_logo} alt="img" /> :
          value === 'vuejs' ? <img src={vue_logo} alt="img" /> : ''
        }
        <span>{value || 'Select Your News'}</span>
        <img src={arrow_down} alt="img" />
      </>
    )
  }

  return (
    <div className={className} onMouseOver={() => setActive(false) }>
      <button className="dropbtn">{renderSelectedOption()}</button>
      <div className={`dropdown-content${active ? ' active-drpwn' : ''}`}>
        <div onClick={() => handleChange('angular')}>
         <img src={angular_logo} alt="img" />
         <span>Angular</span>
        </div>
        <div onClick={() => handleChange('reactjs')}>
         <img src={react_logo} alt="img" />
         <span>Reactjs</span>
        </div>
        <div onClick={() => handleChange('vuejs')}>
         <img src={vue_logo} alt="img" />
         <span>Vuejs</span>
        </div>
      </div>
    </div>
  )
}

export default Select