function Task() {
  
    let ToDoTask = `padhle`;
    let Date = `14-11-2025`;
  return (

   <div id = "addedTask"class="container text-center">
      <div class="row g-3 align-items-center">
        <div class="col-6">
          <h5>{ToDoTask}</h5>
        </div>
        <div class="col-4">
          <h5>{Date}</h5>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Task;