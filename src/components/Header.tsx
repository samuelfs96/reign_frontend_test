interface Props {
  className?: 'string',
  children: React.ReactNode
}

const Header = ({
  className,
  children
}: Props) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default Header