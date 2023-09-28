import { useEffect, useState } from "react";

const GithubUser = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch('https://api.github.com/users/mihir-parikh')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    if (data) {
        return (
            <div>
                <p id='name'>Name: {data.name}</p>
                <p id='bio'>Bio: {data.bio}</p>
                <p id='repos'>Public repos: {data.public_repos}</p>
                <p id='gists'>Public gists: {data.public_gists}</p>
                <img id="avatar" height={60} src={data.avatar_url} alt="avatar" />
            </div>
        );
    }
};

export default GithubUser;