import axios from 'axios'


function FirstPage() {
  const whenAddButtonClicked = () => {
    console.log(" When Button is Clicked ");

    
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h5> Login Page</h5>

        <div>
          <label>Name :</label>&nbsp;
          <input type="text" />
          <br />
          <br />
          <label>Name :</label>&nbsp;
          <input type="text" />
          <br />
          <br />
          <label>Name :</label>&nbsp;
          <input type="text" />
          <br />
          <br />
          <button onClick={whenAddButtonClicked} type="submit">
            {" "}
            Add{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
