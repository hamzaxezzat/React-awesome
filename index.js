function Page() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));
