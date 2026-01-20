function Time() {
  let time = new Date();

  return (
    <div>
      <p>
        Date: {time.toLocaleDateString()} and Time: {time.toLocaleTimeString()}
      </p>
    </div>
  );
}
export default Time;