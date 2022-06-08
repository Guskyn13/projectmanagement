import Spinner from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/projectQueries'

export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS);
    
  return (
    <div>Projects</div>
  )
}
