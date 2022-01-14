import {renderHook} from '@testing-library/react-hooks';
import { useFetch } from "../../hooks/useFetch";

describe('Tests on useFetch hook', () => {

    test('should return default data', () => {
        
        // with the use of renderHook method, we retrieve each of the values returned by this
        // custom hook, then we test each of the values individually as they should be in their
        // default state, in this case the values should not have changed as the fetch method,
        // as it is an asynchronous function, to include an async and await syntax added along
        // with the 'waitForNextUpdate' method
        const {result} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('should return desired information', async() => {
        
        // in comparison to the previous test, we do include the async at the beginning of the test
        // and the await on the 'waitForNextUpdate' method, the timeout is LONGER than the one
        // in the custom hook as of us to test it we need to receive the data after the timeout is
        // complete
        const {result, waitForNextUpdate} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
        await waitForNextUpdate({timeout: 3500});
        
        const {data, loading, error} = result.current;
        
        // this api will return us only one object at a time containing the quote and the author of 
        // one of the characters in the show Breaking Bad
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });
    
    test('should return error', async() => {
        
        // the url included in this test is incorrect, as in one of the arguments for its api, the 
        // right text should say /api/ instead of /apid/ therefore it should return a request error
        // which is properly handled in the custom hook, returning specific values with a string
        // telling us what the error was
        const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'))
        await waitForNextUpdate({timeout: 3500});
        
        const {data, loading, error} = result.current;
        
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('Info could not get loaded');
    });

})