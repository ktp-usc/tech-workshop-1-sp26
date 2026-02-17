type Props = {
    name: string;
}

export default function Greeting({ name }: Props) {
    return (
        <p className="text-black">Hello, {name}!</p>
    );
}