const PageBanner = ({pageTitle="", pageSubtitle=""}) => {
    return (
        <div className="flex items-center justify-center bg-ariadneblue">
        <div className="container mx-auto py-4">
            <h1 className="text-3xl font-bold text-white text-center my-4">
                {pageTitle}
            </h1>
            <h4 className="pt-3 text-gray-600">
                {pageSubtitle}
            </h4>
        </div>
    </div>
    )
}

export default PageBanner;
