interface NewUserExperienceProps {
    setUser: (name: string) => void 
}

export const NewUserExperience = ({setUser}: NewUserExperienceProps) => {

    const updateUser = (event: any) => {
        const newUser = event.target.userName.value
        setUser(newUser);
        event.preventDefault();
    }
    return (
        <section id='new-user-view'>
            <h2>Welcome to Fluid Tweets!</h2>
            <form onSubmit={updateUser}>
                <input type="text" name='userName' placeholder='Enter username'/>
                <input type="submit" value="Submit"/>
            </form>
        </section>
    )
}