import "./home.scss"
function Home() {

    return (
        <section className="
                    my-container
                    grid gap-8 text-center
                    md:items-center md:grid-cols-2 md:text-left
                    sm:max-xl:bg-blue-50
                    ">
            <div>
                <img
                    src="https://img.vn/uploads/thuvien/img-renderacc-aeon-1-jpeg-20230926175923hJd6oSpnqQ.jpeg"
                    alt=""
                    className={"w-full rounded-lg"}
                />
            </div>
            <div>
                <h1 className="text-4xl font-medium mb-2">Headline</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi cupiditate maxime neque nostrum odio qui saepe vitae.
                    At deleniti dolor incidunt laborum molestiae molestias nam nemo saepe soluta veniam.
                    A blanditiis cupiditate dignissimos dolor eius eos iusto labore magni maiores minima
                    mollitia necessitatibus placeat provident ullam vitae voluptas, voluptatibus?</p>
            </div>
        </section>
    )
}

export default Home;