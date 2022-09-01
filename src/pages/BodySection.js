

const BodySection = () => {
    return ( 
        <section className="section-body d-flex">
            <div className="section-wb">
                <h3 className="pb-font">.Let's help Treat your Pet Right.</h3>
                <p className="sb-font">Shop the best products for your pets from top brands in the industry</p>
                <form className="input-form">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="bg-image" />
        </section>
     );
}
 
export default BodySection;