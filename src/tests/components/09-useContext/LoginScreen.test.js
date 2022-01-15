import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";

/* to run this test:
1. run the 'npm install' command from the hooks-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'LoginScreen.test.js'
*/

describe('Tests on LoginScreen component', () => {

    // the setUser is passed to the LoginScreen component as parameter for it to use
    // it on the user setup
    const setUser = jest.fn();

    // in the actual component, we pass both the user object and the setUser function,
    // in this component we dont render the user object but we just call the function to
    // assign the values to it.
    // We use the mount method from enzyme instead of the shallow, this is because the 
    // shallow method will render only the first component containing the rest of the
    // components, here it would only render the UserContext but it would not show any
    // information but the LoginScreen component tag, we need to render the LoginScreen 
    // with this procedure as it depends on the context itself, the mount will allow us
    // to fix this inconvenience
    const wrapper = mount(
            <UserContext.Provider 
                value={{setUser}}
            >
                <LoginScreen />
            </UserContext.Provider>)

    test('should render properly', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('should execute setUser with the appropriate argument', () => {
        
        // the setUser is just a callback function that assigns values to an object,
        // as seen in the actual component, the default values are set in the click event,
        // theres no input or submit event going on it, thats why we can put the parenthesis
        // syntax in front of this onClick property which will call what is written in the
        // original component.
        // The LoginScreen component will generate a number based on a Date and time, 
        // this will generate 'random' numbers which we dont really need to specify at the moment,
        // thats why the object returned by the setUser function can be evaluated in the id property
        // as any, the name is specific so we do test it accordingly
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            id: expect.any(Number),
            name: 'Miguel'
        });
    })
})