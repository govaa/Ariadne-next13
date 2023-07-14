import * as icons from "lucide-react"
import { LucideIcon } from "lucide-react"

interface IconsProps extends icons.LucideProps {
  name: keyof typeof icons
}

const Icons: React.FC<IconsProps> = ({ name, color, size }) => {
  const LucideIconComponent = icons[name] as LucideIcon

  return <LucideIconComponent color={color} size={size} />
}

export default Icons
