import { mount } from "enzyme";
import { HomeScreen } from"../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

/* to run this test:
1. run the 'npm install' command from the hooks-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'HomeScreen.test.js'
*/

describe('Tests on HomeScreen component', () => {

    const user = {
        name: 'Miguel',
        email: 'luism.jaimeh@gmail.com'
    };

    // We use the mount method from enzyme instead of the shallow, this is because the 
    // shallow method will render only the first component containing the rest of the
    // components, here it would only render the UserContext but it would not show any
    // information but the LoginScreen component tag, we need to render the LoginScreen 
    // with this procedure as it depends on the context itself, the mount will allow us
    // to fix this inconvenience
    const wrapper = mount(
            <UserContext.Provider value={{user}}>
                <HomeScreen />
            </UserContext.Provider>)

    test('should show correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
});