import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GET_BANK_INFORMATIONS } from 'graphql/queries/bankInformation';

const baseUrl   = process.env.NEXT_PUBLIC_API_URL;

export async function API(successCallBack) {
    const client = new ApolloClient({
        uri: baseUrl,
        cache: new InMemoryCache(),
    });
    
    successCallBack(await client.query({
        query: GET_BANK_INFORMATIONS
    }));
}

API((response) => {
    console.log(response);
});

// const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN;

// function API (apiUrl, requestOptions, successCallBack) {

//     fetch(baseUrl+apiUrl, requestOptions)
//         .then((response) => {
//             console.log(response);
//             successCallBack(response);
//         })
//         .then((result) => {
//             console.log(result);
//         })
//         .catch(error => console.log('error', error));
// }

// export default API;