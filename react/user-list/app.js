const getAdequateFormatDate = (date) => {
    const newDate = new Date(date)
    const resultDay = newDate.getDay() + 1
    const resultMonth = newDate.getMonth() + 1
    const resultYear = newDate.getFullYear()
    const result = `${resultDay}.${resultMonth}.${resultYear}`;
    return result
}

const semiHideEmail = (email) => {
    const getMonkey = email.indexOf("@")
    const firstPart = email.slice(0,3)
    const secondPart = email.slice(getMonkey-2)
    const result = `${firstPart}...${secondPart}`
    return result
}


const Header = () => {
    return (
        <h1>React users</h1>
    )
}

const Footer = () => {
    return (
        <p>BitStudent bla bla</p>
    )
}

const Container = (props) => {
    const { users } = props

    return (
        <UserList users={users} />
    )
}

const UserList = (props) => {
    const { users } = props

    return users.map((user, i) => {
        return (
            <UserItem
                name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                email={semiHideEmail(user.email)}
                dob={user.dob}
                src={user.picture.medium}
                key={i}
            />
        )
    })
}

const UserItem = (props) => {
    return (
        <div>
            <img src={props.src} alt="avatar" />
            <p>{`name: ${props.name}`}</p>
            <p>{`email: ${props.email}`}</p>
            <p>{`date of birth ${getAdequateFormatDate(props.dob)}`}</p>
        </div>
    )
}

const App = (props) => {
    const { users } = props

    return (
        <div>
            <Header />
            <Container users={users} />
            <Footer />
        </div>
    )
}


ReactDOM.render(<App users={usersData} />, document.querySelector(".root"))