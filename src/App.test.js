import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {});
