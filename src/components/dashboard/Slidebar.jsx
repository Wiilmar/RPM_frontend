//import Statistics from "../Statistics"
const Slidebar = () => {
    return (
        <>
            <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                <nav className="block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-9999 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full">
                    <button className="md:hidden flex items-center justify-center cursor-pointer text-blueGray-700 w-6 h-10 border-l-0 border-r border-t border-b border-solid border-blueGray-100 text-xl leading-none bg-white rounded-r border border-solid border-transparent absolute top-1/2 -right-24-px focus:outline-none z-9998">
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                    <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
                        <div className="flex bg-white flex-col items-stretch opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">
                            <a href="#!" className="md:flex items-center flex-col text-center md:pb-2 text-blueGray-700 mr-0 inline-flex whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                                <img src="" alt="..." className="max-w-full rounded" />
                                <span>Notus Design System PRO</span>
                            </a>
                            <div className="md:flex-col md:min-w-full flex flex-col list-none">
                                <hr className="my-4 md:min-w-full" />
                                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">Section 3</h6>
                                <a href="#!" className="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-blueGray-500">
                                    <i className="fas fa-newspaper mr-2 text-sm text-blueGray-400"></i>Page 1 for Section 3
                                </a>
                                <a href="#!" className="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-blueGray-500">
                                    <i className="fas fa-user-circle mr-2 text-sm text-blueGray-400"></i>Page 2 for Section 3
                                </a>
                                <a href="#!" className="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-blueGray-500">
                                    <i className="fas fa-paint-brush mr-2 text-sm text-blueGray-400"></i>Page 3 for Section 3
                                </a>
                                <hr className="my-4 md:min-w-full" />
                                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">Section 4</h6>
                                <a href="#!" className="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-blueGray-500">
                                    <i className="fab fa-angular mr-2 text-sm text-blueGray-400"></i>Page 1 for Section 4
                                </a>
                                <a href="#!" className="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-blueGray-500">
                                    <i className="fab fa-react mr-2 text-sm text-blueGray-400"></i>Page 2 for Section 4
                                </a>
                                <a href="#!" className="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-blueGray-500">
                                    <i className="fab fa-vuejs mr-2 text-sm text-blueGray-400"></i>Page 3 for Section 4
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="relative md:ml-64 bg-blueGray-100 w-full">
                    <nav className="absolute top-0 left-0 w-full z-10 bg-white lg:flex-row lg:flex-nowrap lg:justify-start flex items-center py-1 px-4 lg:bg-transparent">
                        <div className="w-full mx-auto items-center flex justify-between lg:flex-nowrap flex-wrap lg:px-6 px-4">
                            <a href="#!" className="text-blueGray-800 lg:text-white text-sm uppercase inline-block font-semibold my-3">Settings Page</a>
                            <button className="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-blueGray-400 rounded bg-transparent block outline-none focus:outline-none text-blueGray-300 lg:hidden" type="button">
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out lg:h-auto-important hidden">
                                <form className="flex flex-row flex-wrap items-center ml-auto mr-3 mt-3">
                                    <div className="mb-3 pt-0">
                                        <input placeholder="Search here" type="text" className="border-transparent shadow px-3 py-2 text-sm w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200 " />
                                    </div>
                                </form>
                                <a href="#!"

                                    className="mr-3 hover:bg-blueGray-200 hover:text-blueGray-800 rounded-full py-2 px-3 text-blueGray-800 bg-blueGray-200 text-sm uppercase font-bold hidden lg:block whitespace-nowrap">My Account</a>
                                <a href="#!" className="mr-3 hover:bg-blueGray-200 hover:text-blueGray-800 rounded-full py-2 px-3 text-blueGray-800 bg-blueGray-200 text-sm uppercase font-bold hidden lg:block whitespace-nowrap">Settings</a>
                                <a href="#!" className="mr-3 hover:bg-blueGray-200 hover:text-blueGray-800 rounded-full py-2 px-3 text-blueGray-800 bg-blueGray-200 text-sm uppercase font-bold hidden lg:block whitespace-nowrap">Log out</a>
                            </div>
                        </div>
                    </nav>
                    <div className="px-4 md:px-10 mx-auto w-full h-40 md:h-80 bg-gradient-to-r from-lightBlue-500 to-lightBlue-800">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white dark:bg-blueGray-800">
                            <div className="rounded-t bg-white dark:bg-blueGray-800 mb-0 px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-blueGray-700 dark:text-white text-xl font-bold">Settings Page</h6>
                                    <a href="#!" className="text-blueGray-700 dark:text-white px-3 py-1 text-sm shadow-md border border-solid border-blueGray-400 rounded bg-white dark:bg-blueGray-800 inline-flex items-center font-bold text-xs uppercase leading-none mr-1">
                                        Edit Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slidebar