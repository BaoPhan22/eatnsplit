import Button from "./Button";

export default function FormSplitBill({
  selectedFriend,
  billValue,
  setBillValue,
  myExpense,
  setMyExpense,
  whoIsPaying,
  setWhoIsPaying,
  handleSplitingBill,
}) {
  const friendExpense = billValue - myExpense;
  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        e.preventDefault();
        if (billValue <= 0 || myExpense <= 0) return;
        handleSplitingBill(whoIsPaying === "user" ? friendExpense : -myExpense);
      }}
    >
      <h2>Split a build with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />

      <label>Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > billValue
              ? myExpense
              : Number(e.target.value)
          )
        }
      />

      <label>{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>Who paid the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Add</Button>
    </form>
  );
}
