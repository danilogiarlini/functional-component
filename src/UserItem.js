import './UserItem.css'

const UserItem = (props) => {
  return (
      <li key={props.id}>
        <img src={props.profilePic} alt={props.name}/>
        <h2>{props.name}</h2>
        <h2>{props.surname}</h2>
        <p>{props.email}</p>
      </li>
  );
};

export default UserItem;
