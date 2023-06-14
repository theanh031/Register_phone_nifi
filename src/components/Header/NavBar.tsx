interface NavBarProps {
    children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({children}) => {
  return (
    <div className="flex flex-row gap-4 py-3">
        {children}
    </div>
  )
}

export default NavBar