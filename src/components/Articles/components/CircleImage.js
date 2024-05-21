import circleImage from "../../../assets/images/circulo.jpg"

function CircleImage() {
    // const imageUrl = "https://picsum.photos/400/265"

    return (
        <div>
            {/* <img height={300} src={require("../../../assets/images/circulo.jpg")} alt="An image of a Manga Protagonist"/> */}
            {/* <img height={300} src={imageUrl} alt="An image of a Manga Protagonist" /> */}
            <img height={500} width={700} src={circleImage} alt="An image of a Manga Protagonist" />
        </div>
    );
}

export default CircleImage;