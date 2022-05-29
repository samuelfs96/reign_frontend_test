interface Props {
  className?: string,
  value: string,
  setValue: any
}

const Tabs = ({
  className,
  value,
  setValue
}: Props) => {

  const handleClick = (value: string) =>{
    setValue(value)
  }

  return (
    <div className={className}>
      <button className={value === 'all' ? 'active' : ''} onClick={() => handleClick('all')}>All</button>
      <button className={value === 'favs' ? 'active' : ''} onClick={() => handleClick('favs')}>My faves</button>
    </div>
  )
}

export default Tabs