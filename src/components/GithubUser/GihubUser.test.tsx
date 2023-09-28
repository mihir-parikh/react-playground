import { getByTestId, render, waitFor } from "@testing-library/react";
import GithubUser from "./GithubUser";

afterAll(() => {
    jest.restoreAllMocks();
});

it('renders user data when fetched successfully', async () => {
    // Mock the fetch function to return a mock user data
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({
                name: 'Mihir Parikh',
                bio: 'Software Engineer',
                public_repos: 10,
                public_gists: 5,
                avatar_url: 'https://avatars.githubusercontent.com/u/12972080?v=4',
            }),
        })
    ) as jest.Mock; // Define global.fetch as a jest.Mock
    
    render(<GithubUser />);

    // Wait for the component to render and fetch data
    await waitFor(() => {
        // Assert that the mocked user data is rendered
        expect(document.getElementById('name')?.textContent).toBe('Name: Mihir Parikh');
        expect(document.getElementById('bio')?.textContent).toBe('Bio: Software Engineer');
        expect(document.getElementById('repos')?.textContent).toBe('Public repos: 10');
        expect(document.getElementById('gists')?.textContent).toBe('Public gists: 5');
        expect(document.getElementById('avatar')?.getAttribute('src')).toBe('https://avatars.githubusercontent.com/u/12972080?v=4');
    });
});