function Enter() {
  return (
    <div id = "entry"  class="container text-center">
      <div class="row g-3 align-items-center">
        <div class="col-6">
          <input type="text" placeholder="Enter your task here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Enter;
