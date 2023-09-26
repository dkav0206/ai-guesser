//react
import {Suspense} from 'react'
import {Outlet, useLocation} from 'react-router-dom'

//components
import { useScrollTop } from "../../hooks/useScrollTop"
import { SkeletonHome } from '../../components/Skeleton/Skeleton'


function HomeTemplate(){
    const location = useLocation()
    useScrollTop()
    return (
        <div>
            <Suspense fallback={<SkeletonHome/>}>
                <Outlet></Outlet>
            </Suspense>
        </div>
    )

}

export default HomeTemplate