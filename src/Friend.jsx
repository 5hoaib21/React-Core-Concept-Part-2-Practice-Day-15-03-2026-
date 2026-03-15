export default function Friend({friend}){
  console.log(friend)
  const {name, email, phone, id, username, website} = friend;
  return(
    <div className="card">
      <p>id: {id}</p>
      <h4>name: {name}</h4>
      <p>email: {email}</p>
      <p>Phone: {phone}</p>
      <p>username: {username}</p>
      <p>website: {website}</p>
    </div>
  )
}