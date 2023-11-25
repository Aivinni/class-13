interface Props {
    name: String;
}

export function Footer({name}:Props) {
    return (
      <h1>Bye {name}</h1>
    )
}