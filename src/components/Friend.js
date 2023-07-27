import Button from "./Button";

export default function Friend({ friend, onSelectedFriend, selectedFriend }) {
  const selectedFriendId = selectedFriend;
  return (
    <li
      className={
        selectedFriendId && selectedFriendId.id === friend.id ? "selected" : ""
      }
    >
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelectedFriend(friend)}>
        {selectedFriendId && selectedFriendId.id === friend.id
          ? "Close"
          : "Select"}
      </Button>
    </li>
  );
}
