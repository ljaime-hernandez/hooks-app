import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

// two of the custom hooks are used on this component, thats why we need to use the
// jest.mock method in both of them to import the return object which each of them will
// bring to us
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe('tests in MultipleCustomHooks component', () => {


    beforeEach(()=>{
        useCounter.mockReturnValue({
            state: 1,
            increment: () => {}
        })
    })

    test('should render properly', () => {
        
        // default values on the useFetch hook which should actually
        // allow for a div component to render if the data is null and the loading
        // state is true
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show information', () => {
        
        // In this case we play as if the fetch returned an object with data, 
        // if seen on the actual custom hook, the loading should turn false and the
        // data should give us both an author and a quote
        useFetch.mockReturnValue({
            data: [{
                author: 'Miguel',
                quote: 'Hello World'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);

        // this expect will confirm if the loading state is false

        expect(wrapper.find('.alert').exists()).toBe(false);
        // the text inside the element with a className of quote should return the
        // quote
        expect(wrapper.find('.quote').text().trim()).toBe('Hello World');
        // the text inside the element with a className of blockquote-footer should return the
        // authors name
        expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Miguel');
    })
})