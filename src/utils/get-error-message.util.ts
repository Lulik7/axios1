

import axios from "axios";


export const getErrorMessage=  (error:unknown)=> {
    let errorMessage = " Error while data's downloading:";

    if (axios.isAxiosError(error)) {
        const axiosError = error;

        //404 or 500
        if (axiosError.response) {
            errorMessage = `Error of server: ${axiosError.response.status}-${axiosError.response.data.message}`;

            //Error of service:404-Products not found
        } else if (axiosError.request) {
            errorMessage = " No response from server";
        } else {
            errorMessage = `Error: ${axiosError.message}`;
        }
    } else if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
    }
    console.error(errorMessage);
    return errorMessage;
}