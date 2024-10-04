import React,{createContext, useState, useEffect, useContext, ReactNode} from 'react';

interface AppContextType {
    video : any;
};

const AppContext = createContext<AppContextType | undefined>(undefined); 

interface IAppProviderProps {
    children: ReactNode;
    media_type: string;
    id: string | number;
};

const AppProvider:  React.FC<IAppProviderProps> = ({children, media_type, id}) => {

    const [data, setData] = useState<any[]> ([]);

    const [video, setVideo] = useState<any> (null);

    const fetchData = async() => {
       if (media_type && id)
        {
            const response = await fetch(
                `https://api.themoviedb.org/3/${media_type}/${id}?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=it-IT`
            );
    
            const dataJson = await response.json();
    
            console.log("Dati film:",dataJson);
    
            setData(dataJson.adult);
        }
    };
    
    const fetchVideo = async() => {
        if (media_type && id){
            const responseVideo = await fetch(
                `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=it-IT`
            );
    
            const jsonVideo = await responseVideo.json();
    
            console.log("Video film:",jsonVideo);
    
            if(jsonVideo && jsonVideo.results && Array.isArray(jsonVideo.results) && jsonVideo.results.length > 0){
                setVideo(jsonVideo.results[0]);
            }
        }
    };

    useEffect(
        () => {
            fetchData();
            fetchVideo();
        },
        []
    );

    return(
        <AppContext.Provider value = {{video}}>{children}</AppContext.Provider>
    );
};

const useGlobalContext = () => {
    const context = useContext(AppContext);

    if (context === undefined)
    {
        throw new Error("E' necessario un app Provider");
    }

    return context;
};

export {AppContext, AppProvider, useGlobalContext};
