import comics from "./db/comics";

export default function Main() {
  return (
    <main>
      <div className="container-fluid">
        <div className="jumbo">
          <button className="btn btn-primary rounded-0">
            Bottone Spigolo Vivo
          </button>
        </div>
        <div className="container">
          <div className="row d-flex">
            {comics.map(({ id, title, thumb }) => {
              return (
                <div className="comics col-12 col-sm-6 col-lg-3" key={id}>
                  <div className="cardm">
                    <div>
                      <img src={thumb} alt={title} />
                    </div>
                    <div className="title">{title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="load d-flex">
          <button className="btn btn-primary rounded-0 ">Load More</button>
        </div>
      </div>
    </main>
  );
}

/*
<div>
     <img src="./src/assets/img/jumbotron.jpg" alt="" />
</div>

*/
