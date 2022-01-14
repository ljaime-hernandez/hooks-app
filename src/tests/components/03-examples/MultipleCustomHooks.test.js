import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe('tests in MultipleCustomHooks', () => {

    beforeEach(()=>{
        useCounter.mockReturnValue({
            state: 1,
            increment: () => {}
        })
    })

    test('should render properly', () => {
        
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show information', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Miguel',
                quote: 'Hello World'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.quote').text().trim()).toBe('Hello World');
        expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Miguel');
    })
})