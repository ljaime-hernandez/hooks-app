import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    // with the help of the useRef, we are avoiding an error displaying on the console
    // which will be triggered if we mount and then dismount the component when it has
    // not finalized the processes on it, in this case the fetch, the useRef then is 
    // used so we can track the launch of this hook in the component, refer to the first
    // useEffect hook for more information
    const isMounted = useRef(true);

    // we add default values for the component using this hook to render accordingly, 
    // when the data have not been retrieved from the API, then its declared as null,
    // a loading value is set to true so we can render certain elements on the component
    // for both visual effect and for the user to know if the component is working or not,
    // the error value is created just in case theres an error loading the data.
    const [state, setState] = useState({data: null, loading: true, error: null});

    // this useEffect does not has an input (empty brackets at the end), therefore it will
    // listen to any action taken in this hook, for this purpose, we set the default value of the
    // useRef to false so the fetch in this hook does not do any action when the component is
    // dismounted, avoiding the web for crashing.
    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    // the useEffect is going to load whenever a change to the url is made, in this case,
    // the url is modified from the MultipleCustomHooks component with the help of a button
    // (which is also a hook)
    useEffect(() => {

        // simple state reset for the loading to return to true after being previously used
        setState({data: null, loading: true, error: null});
        
        // the fetch will use the url to retrieve data from our API, that information is then
        // transformed into JSON format, and finally we use the setState to both change the values
        // of the state and to add the data received from the fetch request 
        fetch(url)
            .then(res => res.json())
            .then(data => {

                // the useRef will allow the hook to work only when the component
                // is rendered, if it is dismounted then this action will not be taken
                if(isMounted.current){

                setTimeout(() => {
                    setState({
                        loading: false,
                        error: null,
                        data
                })}, 2000)}
            }).catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Info could not get loaded'
                })
            })
    }, [url]);

    return state;
}