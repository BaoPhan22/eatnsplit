import { useState } from "react";
import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpenAddFriendForm, setOpenAddFriendForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [billValue, setBillValue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSplitingBill(value) {
    console.log(value);

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  function addFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setOpenAddFriendForm(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectedFriend={(friend) => {
            setSelectedFriend(friend === selectedFriend ? null : friend);
            setOpenAddFriendForm(false);
          }}
          selectedFriend={selectedFriend}
        />

        {isOpenAddFriendForm && <FormAddFriend onSetFriend={addFriend} />}

        <Button
          onClick={() => {
            setOpenAddFriendForm(!isOpenAddFriendForm);
            setSelectedFriend(null);
          }}
        >
          {isOpenAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend !== null && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          myExpense={myExpense}
          setMyExpense={setMyExpense}
          billValue={billValue}
          setBillValue={setBillValue}
          whoIsPaying={whoIsPaying}
          setWhoIsPaying={setWhoIsPaying}
          handleSplitingBill={handleSplitingBill}
        />
      )}
    </div>
  );
}
