interface Props {
    name: string;
    age: number;
    isRegistered?: boolean;
}

export function Header({name, age, isRegistered}:Props) {
    return (
        <div>
            <h1>Hello {name}, you are {age} years old!</h1>
            {isRegistered ? 
                <a>Logout</a> :
                <a>Login</a>
            }
        </div>
    )
}