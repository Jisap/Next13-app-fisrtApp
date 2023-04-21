import Users from '@/components/Users'

const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

const IndexPage = async () => {

  const users = await fetchUsers()
  
  return (
  
    <Users users={users} />
      
  )
}

export default IndexPage