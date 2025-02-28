import Pagina from './components/template/Pagina';
import React from 'react';

export default function Home() {
    return (
        <Pagina>
            <div className="flex flex-col py-2 px-4">
                <h2 className="text-lg md:text-3xl font-semibold ">Principais Informações</h2>
                <div className="flex flex-col md:flex-row flex-1 w-[90%] justify-evenly md:px-8 py-4 gap-4">
                    <div className="hover:cursor-pointer hover:bg-transparent rounded-lg bg-lime-600/90 shadow-md shadow-gray-950/50 border-solid flex items-center md:w-[50%] h-32 md:h-60 flex-col justify-center gap-2">
                        <h3 className="md:text-2xl text-default-300/90">Grupo(s) avaliados</h3>
                        <p className="text-3xl text-default-300/90">2</p>
                    </div>
                    <div className="hover:cursor-pointer hover:bg-transparent rounded-lg bg-yellow-700/90 shadow-md shadow-gray-950/50 border-solid flex items-center md:w-[50%] h-32 md:h-60 flex-col justify-center gap-2">
                        <h3 className="md:text-2xl text-default-300/90">Grupos cadastrados</h3>
                        <p className="text-3xl text-default-300/90">3</p>
                    </div>
                    <div className=" hover:cursor-pointer hover:bg-transparent rounded-lg bg-red-800/90 shadow-md shadow-gray-950/50 border-solid flex items-center md:w-[50%] h-32 md:h-60 flex-col justify-center gap-2">
                        <h3 className="md:text-2xl text-default-300/90"> Grupo(s) para avaliar</h3>
                        <p className="text-3xl text-default-300/90">3</p>
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
