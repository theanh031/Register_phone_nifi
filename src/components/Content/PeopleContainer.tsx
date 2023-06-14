import { ReactNode } from "react"

interface PeopleContainerProps {
    children: ReactNode
}
const PeopleContainer: React.FC<PeopleContainerProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default PeopleContainer