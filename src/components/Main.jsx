import comics from "./db/comics";
import iconList from "./db/icon_list";

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
        <div className="blue bg-primary">
          <div className="container">
            <div className="row d-flex">
              {iconList.map(({ id, title, img }) => {
                return (
                  <div className="col-12 col-sm-6 col-lg-2">
                    <div className="cardml d-flex">
                      <img
                        src="./src/assets/img/buy-comics-shop-locator.png"
                        alt=""
                      />
                      <a href="">Testo qui</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/*
<div>
     <img src="./src/assets/img/jumbotron.jpg" alt="" />
</div>

{iconList.map(({ id, title, img }) => {
          return(<div className="col-12 col-sm-6 col-lg-3">
            <div className="cardml d-flex">
              <img src="./src/assets/img/buy-comics-shop-locator.png" alt="" />
              <a href="">Testo qui</a>
            </div>
          </div>
          
          
          
          
          
          
          
          )
        })}


<div className="blue row d-flex bg-primary">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="cardml d-flex">
              <img src="./src/assets/img/buy-comics-shop-locator.png" alt="" />
              <a href="">Testo qui</a>
            </div>
          </div>
        </div>
*/
