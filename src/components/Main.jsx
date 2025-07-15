
import comics from "./comics"


export default function Main(){

    return (

        <main>
            <div className="container-fluid">
                <div className="jumbo"><button class="btn btn-primary rounded-0">Bottone Spigolo Vivo</button></div>
                <div className="container">
                    <div className="row d-flex">
                        
                        {comics.map(({ id, title, thumb }) => {
                            return <div className="comics col-12 col-sm-6 col-lg-3" key={id}>
                                <div className="cardm">
                                    <div><img src={thumb} alt={title} /></div>
                                    <div className='title'>{title}</div>
                                </div>    
                            </div>

                        })}
                            
                        

                    </div>
                </div>  
                <div><button class="btn btn-primary rounded-0">Bottone Spigolo Vivo</button>
</div>
            </div>
        </main> 
    )
}