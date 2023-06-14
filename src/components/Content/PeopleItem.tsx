interface PeopleItemProps {
    title: string
}
const PeopleItem: React.FC<PeopleItemProps> = ({title}) => {
  return (
    <div>{title}</div>
  )
}

export default PeopleItem