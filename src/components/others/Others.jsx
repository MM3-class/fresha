import { NavLink, Route, Routes } from 'react-router-dom'
import Businesses2 from './Businesses2';
import BusinessesA from './BusinessesA';

const Others = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Treat yourself anytime, anywhere</h1>
            <nav className='space-x-8 font-medium text-md my-4 text-secondary-color'>
                <NavLink className="hover:text-primary-color hover:border-b pb-2 aria-[current=page]:text-primary-color aria-[current=page]:border-b-primary-color" to='/'>Other businesses in St James's</NavLink>
                <NavLink className="hover:text-primary-color hover:border-b pb-2 aria-[current=page]:text-primary-color aria-[current=page]:border-b-primary-color" to='/other2'>Other businesses around St James's</NavLink>
            </nav>
            <div>
                <Routes>

                    <Route path='/' element={<BusinessesA />} />
                    <Route path='/other2' element={<Businesses2 />} />
                </Routes>
            </div>
        </div>
    )
}

export default Others