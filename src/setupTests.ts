import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const mockMath = Object.create(global.Math)
mockMath.random = () => 0.5
global.Math = mockMath

configure({ adapter: new Adapter() })
