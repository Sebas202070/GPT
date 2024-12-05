interface Props {
    userScore: number;
    errors:string[];
    message:string;
  
  }

export const ChatGptOrthography = ({ /* userScore,errors, */message }: Props) => {
    return (
      <div className="col-start-1 col-end-9 p-3 rounded-lg">
        <div className="flex flex-row items-start">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 flex-shrink-0">
            G
          </div>
          <div className="relative ml-3 text-sm bg-black bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl">
          
{/*           <h3 className="text-xl">Tu Puntaje:{userScore}%</h3> */}
            <p>{message}</p>
        

       {/*    {
            (errors.length === 0)
            ? "Perfecto! no se encontraron errores"
            : (
              <h3>
                <ul>Debes corregir los siguientes errores:
                  {errors.map((error,i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              </h3>
            )
          } */}
  
          </div>
        </div>
      </div>
    );
  };