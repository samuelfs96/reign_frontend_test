import angular_logo from '../icons/angular-icon.png'
import react_logo from '../icons/react-icon.png'
import vue_logo from '../icons/vue-icon.png'
import arrow_down from '../icons/arrow_down.png'

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

  const handleChange = (value: string) => {
    setSelectValue(value)
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
    <div className={className}>
      <button className="dropbtn">{renderSelectedOption()}</button>
      <div className="dropdown-content">
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