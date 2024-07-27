import { createContext, useEffect, useState } from "react";

//context creation
export const AppContext = createContext();

function AppContextProvider({ children }) {

    const [modalData, setModalData] = useState();
    //to store the data of every form
    const [formData, setFormData] = useState([]);
    //to track the selected row
    const [selectedRow, setSelectedRow] = useState([]);

    //table m send krna h yhi data
    //db m store krna h yhi data
    const fetchTask = async () => {
        const response = await fetch("http://localhost:4000/api/v1/getFormData", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        })
        const result = await response.json();
        // console.log("Fetched result is", result);
        // Extracting the data from each object in the array
        const formDataArray = result.object.map(item => item.data);

        // Save in the formData array
        setFormData(formDataArray);

    }

    useEffect(() => {
        // console.log("ContextApp data is", modalData);
        fetchTask();
        // console.log("Table DAta is", formData);

    }, []);


    return <AppContext.Provider value={{ modalData, setModalData, formData, setFormData, selectedRow, setSelectedRow }}>
        {children}
    </AppContext.Provider>
};

export default AppContextProvider;
