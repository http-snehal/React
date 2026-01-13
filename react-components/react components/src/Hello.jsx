function Hello (){

  let fullName = () => {
    return "Snehal";
  }

  return <h1>Hello, {fullName()}!</h1>;
}
export default Hello;