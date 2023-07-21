const PageBanner = ({pageTitle="", pageSubtitle=""}) => {
    return (
        <div className="page-title-area bg-ariadneblue">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <h1 className="text-3xl font-bold mb-4">
                            {pageTitle}
                        </h1>
                        <h4 className="pt-3 text-gray-600">
                            {pageSubtitle}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageBanner;
