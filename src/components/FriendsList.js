import Friend from "./Friend";

export default function FriendsList({
  friends,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
          key={friend.id}
          friend={friend}
        />
      ))}
    </ul>
  );
}
