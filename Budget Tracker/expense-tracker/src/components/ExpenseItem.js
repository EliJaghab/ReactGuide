import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <p>{props.date.toISOString()}</p>
      <p className="expense-item__description">
        <h2> {props.title}</h2>
        <p className="expense-item__price"> ${props.amount} </p>
      </p>
    </div>
  );
}

export default ExpenseItem;
