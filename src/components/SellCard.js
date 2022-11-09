

export function SellCard({product ,}) {

    const { Build , SPrice ,} = product;

    return(

        
          <p className="w-fit px-4 py-1 rounded-lg border-2 border-indigo-500 text-base font-bold">Shahid has a {Build} model in City ,Country  for {SPrice}.</p>  
        

    )


}