
import comics from "./comics"


export default function Main(){

    return (

        <main>
            <div className="container-fluid">
                <div className="jumbo"><img src="./src/assets/img/jumbotron.jpg" alt="" /></div>
                <div className="row d-flex">
                    
                    {comics.map(({ id, title, thumb }) => {
                        return <div className="comics col-12 col-sm-6 col-lg-3" key={id}>
                            
                            <div><img src={thumb} alt={title} /></div>
                            <div className='title'>{title}</div>
                        </div>

                    }
                        
                    )}

                </div>
            </div>
        </main> 
    )
}