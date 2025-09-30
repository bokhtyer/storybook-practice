export default function Card({ title, content, alignment = "left" }) {
    return (
        <div
            style={{
                border: "1px solid black",
                textAlign: alignment,
                width: "300px",
                padding: "10px",
                borderRadius: "5px",
            }}
            data-testid="card-item"
        >
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
