function Example () {
    const showTitle = true;
   
    return(
      <div>
        {
          if (showTitle) {
            <h1> Example </h1>
          }
        }
      </div>
    )
  }
   
  export default Example;