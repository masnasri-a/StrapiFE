import Image from 'next/image';
import HI from '../../public/hi.png'

const HomeMenu = () => {
    return (
        <>
            <div className="homeMenu">
                <div className="welcome">
                    <span>Welcome </span>
                    <Image src={HI} alt='hi' height={30} width={30}/>
                </div>
                <div className="descriptionHome">
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </span>
                </div>
            </div>
        </>
    )
}

export default HomeMenu;