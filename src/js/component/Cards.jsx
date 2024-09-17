
import React from "react";
import Card from "./Card"

const Cards = () => {
    return (
        <div className="container my-4">
            <div className="row row-cols-1 row-cols-md-4 g-5">
                <Card 
                    title="Noticia n1"
                    imageUrl="https://fastly.picsum.photos/id/1/500/325.jpg?hmac=Lj03x_A6ase6iuKKsMLHBzTeYBKENHvG4EHmhI3h3I4"
                />
                <Card 
                    title="Noticia 2"
                    imageUrl="https://fastly.picsum.photos/id/9/500/325.jpg?hmac=u5OkNXwS50fHaAUNQ5-t_Y8L2pdEsYwdF85EguhutJk"
                />
                <Card 
                    title="Noticia 3"
                    imageUrl="https://fastly.picsum.photos/id/20/500/325.jpg?hmac=YjQ9Mwu9XY3AvO7mn5U6NPYh3nb_Gt8f9Wu6yZkb5cE"
                />
                <Card 
                    title="Noticia 4"
                    imageUrl="https://fastly.picsum.photos/id/26/500/325.jpg?hmac=-Ki2YbGca7MlKr8wKJAwdjqNVE8ofE-JWV8t4NefZwk"
                />
            </div>

        </div>
    );
}
export default Cards